import { useState, useEffect, useRef } from 'react';
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from "react-paginate"; 
import image from "../img/3.jpg"
import Model from './model';
import SearchModel from './searchmodel';
import { Toaster, toast } from "react-hot-toast";
import Loading from './loading';



function Law(props) {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const [showModel, setShowModel ] = useState(false);
  const [selectedUser, setSelectedUser] = useState(0);
  const [searchShowModel,setSearchShowModel] = useState(false);
  const [searchUser, setSearchUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const usersPerPage = 14;
  const pagesVisited = pageNumber * usersPerPage;

  let searchId
  const pageCount = Math.ceil(users.length / usersPerPage);
  let law = props.type;

  const searchRef = useRef(null)

  const handleSearch =(event) =>{
    // console.log(searchRef.current.value);
    const find = searchRef.current.value.toUpperCase();
    try{const searchUsers = users.filter(user => user.section == find || user.Section == find);
    let searchId = searchUsers[0].id;
    
    if(searchUsers){
      setSearchUser(searchUsers);
      setSearchShowModel(true);
    }}catch(err){
      toast.error("This Law is undefined")
    }
   
    
  }
  

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

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000)
  },[])

  return (
   <>
   
    {
      loading ? <Loading /> : 
              <div className='mb-11'>
              <Toaster />
              <div className='relative flex justify-center m-10 h-10 '> 
              
                <input type='text' ref={searchRef} placeholder={`Search ${law.toUpperCase()}`} className=' absolute  p-5 rounded-xl w-80 h-10 border border-black ' />
                <button className='relative'
                onClick={handleSearch} 
                > 
                <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute left-32 bottom-3' /> </button>

                { searchShowModel && <SearchModel onClose={()=> setSearchShowModel(false)} searchUser ={ searchUser } /> }
              </div>
              <div className='flex flex-wrap justify-around '>
                  {users.slice(pagesVisited, pagesVisited + usersPerPage).map((user, i) => (
              
                <div className='flex flex-col lg:basis-[10%] w-48 lg:w-20 m-10 rounded-lg shadow-xl' key={i}>
                  <img src={image} className='rounded-lg'/>
                
                  <h3 className='text-center p-5 '>Section {user.Section || user.section}</h3>
                  
                  <button className='py-10' onClick={()=> {
                    setShowModel(true) 
                    setSelectedUser(user.id);
                  }
                
                  } > View More   </button>
                  { showModel && <Model onClose={()=> setShowModel(false)} users={users}  selectedUser={ selectedUser }  flag = {true} /> }
              </div>
            ))}
            
          </div>
          <div className='flex justify-center items-center mt-[30px]'>
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
          
          </div>
    }
   </>
  )
}

export default Law;
