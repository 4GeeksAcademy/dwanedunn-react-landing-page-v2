const Card = (props) => {
   return (
      <>
         <div className="card">
            <img src={props.imageURL} className="card-img-top" alt={props.imageAlt}  />
            <div className="card-body">
               <h5 className="card-title">{props.cardTitle}</h5>
               <p className="card-text">{props.content}</p>
               <a href="#" className="btn btn-primary">
                  Find out more!
               </a>
            </div>
         </div>
      </>
   );
}

export default Card;