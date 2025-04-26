const Card = ({ imageURL, imageAlt, cardTitle, content }) => {
  return (
    <>
      <div className="card">
        <img src={imageURL} className="card-img-top" alt={imageAlt} />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">
            Find out more!
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
