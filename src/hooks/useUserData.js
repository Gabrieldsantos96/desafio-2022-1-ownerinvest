import { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';

export function useUserData(){
    const navigate = useNavigate();

    const [posts,setPosts] = useState([]);
    const [users,setUsers] = useState([]);
    
    return {
      navigate,
      users,
      setUsers,
      posts,
      setPosts
      }

   
   }
