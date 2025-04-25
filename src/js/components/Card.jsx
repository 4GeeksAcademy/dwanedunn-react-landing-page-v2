const Card = () => {
   return (
      <div className="card" style="width: 18rem;">

         <img src="https://placehold.co/500x325" class="card-img-top" alt="500 by 325 placeholder"/>

         <div className="card-body">
            <h5 className="card-title">Card title</h5>
          
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur quas labore qui incidunt.</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
         </div>
      </div>
   );
}

export default Card;