import './styles.css';
import useData from '../../hooks/useData';

function Header () {
const {navigate} = useData();

   return (
      <div className="header">
        <ul>
           <li onClick={() => navigate('/posts')}>Posts</li>
           <li onClick={() => navigate('/users')}>Users</li>
        </ul>
      </div>
   )
}

export default Header;