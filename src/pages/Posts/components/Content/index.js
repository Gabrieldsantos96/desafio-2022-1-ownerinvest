import useData from '../../../../hooks/useData';
import {useEffect,useState} from 'react';
import Api from '../../../../services/api';
import Pagination from '../Pagination';
import Post from '../Post';

function PostsData () {

  const {posts,setPosts,users,setUsers} = useData();

  const [itemsPerPage,setItemsPerPage] = useState(15);
  const [currentPage,setCurrentPage] = useState(0);

  const pages = Math.ceil(posts.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems =  posts.slice(startIndex,endIndex);

  const axiosPosts = async () => {
    const { data } = await Api.get('todos');
    setPosts(data);
  }; 

  const axiosUsers =  async () => {
    const request = await Api.get("/users");
    const { data } = request;
    setUsers(data);
 }


  useEffect(() => {
  axiosPosts();
  axiosUsers();
  },[])

   return (
     <div className="content">

     <Pagination
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}/>

    <div>
    <div className='content_title'><h2>Todos os posts</h2></div> 
      <div className='render_data'>
        
      {
      currentItems.map((item,index) => (
       <Post 
      key={index}
      item={item}
      currentPage={currentPage}
      users={users}
      />

      ))
      }
      </div>
 

     </div>
    </div>
     
   )
}

export default PostsData;