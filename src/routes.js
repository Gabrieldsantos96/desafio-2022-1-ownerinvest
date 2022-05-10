import { Route, Router, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Provider  from './context/userContext';

function MainRoutes() {
   return (
     <Provider>
     <Routes>
        <Route path="/" >
          <Route path='/' element={<Posts/>}/>
          <Route path='/posts' element={<Posts/>}/>
          </Route>
        <Route path="/users" element={<Users />} />

        <Route path='*' element={<h1>404 - Not Found</h1>}/>
 </Routes>
     </Provider>
 
   );
 }
 
 export default MainRoutes;