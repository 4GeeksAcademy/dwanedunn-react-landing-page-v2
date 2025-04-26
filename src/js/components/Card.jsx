const Card = (props) => {
   return (
      // style="width: 18rem;"
      <div className="card" >
         {/* "https://placehold.co/500x325"
         "500 by 325 placeholder" */}
         <img src={props.imageURL} className="card-img-top" alt={props.imageAlt}  />

         <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.content}</p>
            <a href="#" className="btn btn-primary">{props.btnText}</a>
         </div>
      </div>
   );
}

export default Card;