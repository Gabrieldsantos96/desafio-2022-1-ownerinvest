import './styles.css';

function Post ({item,users}) {

const author = users.find((user) => user.id === item.userId);
console.log(author);

   return (
      <div className="post">
         <div className="info">
         <div className={`line ${item.completed ? "completed" : "uncompleted"}`}></div>
         <div>Título: {item.title}<br></br></div>
         <div>Responsável: {author?.name }</div>
         </div>
      </div>
   )
}

export default Post;