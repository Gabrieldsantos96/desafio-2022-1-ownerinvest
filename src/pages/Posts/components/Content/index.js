import './styles.css';
import useData from '../../../../hooks/useData';
import {useEffect,useState} from 'react';
import Api from '../../../../services/api';
import Pagination from '../Pagination';
import Post from '../Post';

function PostsData () {

  const {posts,setPosts} = useData();

  const [itemsPerPage,setItemsPerPage] = useState(15);
  const [currentPage,setCurrentPage] = useState(0);

  const pages = Math.ceil(posts.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems =  posts.slice(startIndex,endIndex);

  const axiosPosts = async () => {
    const request = await Api.get('/todos');
    const { data } = request;
    console.log(data);
    setPosts(data);
  }

  useEffect(() => {
  axiosPosts();
  },[])

   return (
     <div className="content">

     <Pagination
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}/>

    <div>
    <div className='posts_title'><h2>Todos os posts</h2></div> 
      <div className='render_posts'>
       
        
      {
      currentItems.map((item,index) => (
        
      <Post 
      key={index}
      item={item}
      />

      ))
      }
      </div>
 

     </div>
    </div>
     
   )
}

export default PostsData;