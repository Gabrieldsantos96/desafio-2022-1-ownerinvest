import { Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Provider  from './context/userContext';

function MainRoutes() {
   return (
     <Provider>
     <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
 </Routes>
     </Provider>
 
   );
 }
 
 export default MainRoutes;