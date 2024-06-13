import { useState, useEffect } from 'react';
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from "react-paginate"; 
import image from "../img/3.jpg"
import Model from './model';


function Law(props) {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const [showModel, setShowModel ] = useState(false);
  const [selectedUser, setSelectedUser] = useState(0);

  const usersPerPage = 14;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);
  let law = props.type;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect( ()=>{
    const fetchData = async () => {
        try {
          const response = await fetch(`src/json/${law}.json`); 
          const jsonData = await response.json(); 
          setUsers(jsonData); 
        } catch (err) {
          console.log('Error fetching data:', err);
        }
      };
      fetchData();
  },[users]);

  return (
    <>

       <div className='relative flex justify-center m-10 h-10'> 
         <input type='text' placeholder='Search' className='p-5 rounded-xl w-80 border border-black ' />
          <button className='absolute mt-2 pl-64'
          > 
          <FontAwesomeIcon icon={faMagnifyingGlass}  /> </button>
       </div>
       <div className='flex flex-wrap justify-around'>
           {users.slice(pagesVisited, pagesVisited + usersPerPage).map((user, i) => (
       
         <div className='flex flex-col basis-[10%] w-20 m-10  rounded-lg shadow-xl' key={i}>
            <img src={image} className='rounded-lg'/>
          
            <h3 className='text-center p-5 '>Section {user.Section || user.section}</h3>
            
            <button className='py-10' onClick={()=> {
              setShowModel(true) 
              setSelectedUser(user.id);
            }
          
            } > View More   </button>
            { showModel && <Model onClose={()=> setShowModel(false)} users={users}  selectedUser={ selectedUser }  /> }
        </div>
      ))}
     
    </div>
    <div className='flex justify-center items-center mt-[30px] '>
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

export default Law;