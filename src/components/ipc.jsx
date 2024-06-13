import { useState, useEffect } from 'react';
import "../App.css"
import JsonData from "../ipc.json";
import ReactPaginate from "react-paginate"; // assuming ReactPaginate is a default export
import image from "../img/3.jpg"
function IPC() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);
  const add = "ipc";

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect( ()=>{
    const fetchData = async () => {
        try {
          const response = await fetch(`src/${add}.json`); // Fetch JSON data
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const jsonData = await response.json(); // Parse JSON data
          console.log(jsonData)
          setUsers(jsonData); // Update data state
        } catch (err) {
          console.log('Error fetching data:', err);
           // Update error state for potential UI handling
        }
      };
      fetchData();
  },[]);

  return (
    <>
       <div className='flex justify-between'>
      {users.slice(pagesVisited, pagesVisited + usersPerPage).map((user, i) => (
        <div className='flex flex-col w-22 my-10 mx-10  rounded-lg shadow-xl' key={i}>
          <img src={image} className='rounded-lg'/>
          {/* <h1 className='text-center text-base'> Section </h1> */}
          <h3 className='text-center p-5 '>Section {user.Section}</h3>
          <h3 className='text-center border-b-2 border-t-2 p-2'>{user.section_title+ " " + (i + pagesVisited)}</h3>
          <button className='text-center py-10'> View More </button>
        </div>
      ))}
     
    </div>
    <div className='user'>
         <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"navigationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
    
    </>
  )
}

export default IPC;
