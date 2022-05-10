import './styles.css';
import {useEffect,useState} from 'react';
import Api from '../../../../services/api';

function Post ({item,currentPage}) {
   const [author,setAuthor] = useState();
const axiosAuthor = async () => {
   const request = await Api.get(`/users/${item.userId}`);
   const { data } = request;
   setAuthor(data.name);
}

   useEffect(() => {
   axiosAuthor();
   },[])

   useEffect(() => {
      axiosAuthor();
      },[currentPage])

   return (
      <div className="post">
         <div className="info">
         <div className={`line ${item.completed ? "completed" : "uncompleted"}`}></div>
         <div>Título: {item.title}<br></br></div>
         <div>Responsável: {author}</div>
         </div>
      </div>
   )
}

export default Post;