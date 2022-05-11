import './styles.css';

function Card ({item}) {
   console.log(item);
   return (
      <div className="card">
         
         <div className='card_content'>

         <div className="card_title">
         <img src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-social-260nw-1677509740.jpg"/>
            <div className='card_title_info'>  
               <span>{item.company.name}</span><br></br>
               <strong>{item.website}</strong>
            </div>
         </div>
         <div className='card_info'>
            <span><strong>E-mail:</strong>{item.email}</span>
            <span><strong>Telefone:</strong>{item.phone}</span>
            <span><strong>Rua: </strong>{item.address.street}</span>
            <span><strong>Cidade: </strong>{item.address.city}</span>    
         </div>
         <button>Ver mais</button>

         </div>

      </div>
   )
}

export default Card;