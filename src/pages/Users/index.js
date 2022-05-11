import './styles.css';
import Header from '../../shared/Header';
import UsersData from './components/UsersData';

function Users () {
   return (
      <div className='container'>
         <Header/>
         <UsersData/>
      </div>
   )
}

export default Users;