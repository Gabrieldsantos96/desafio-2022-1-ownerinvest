import Api from '../../../../services/api';
import useData from '../../../../hooks/useData';
import { useEffect } from 'react';
import Card from '../Card';

function UsersData () {
const {users,setUsers} = useData();

   const axiosUsers =  async () => {
      const request = await Api.get("/users");
      const { data } = request;
      setUsers(data);
   }

useEffect(() => {
axiosUsers();
},[])

   return (
      <div className="content">

<div className='content_title'><h2>Todos os users</h2></div> 
      <div className='render_data'>
         {
            users.map((item,index) => (
               <Card
               key={index}
               item={item}/>
            ))
         }
      </div>
      </div>

     
   )
}

export default UsersData;