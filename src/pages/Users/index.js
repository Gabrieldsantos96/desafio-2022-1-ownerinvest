import './styles.css';
import Header from '../../components/Header';
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