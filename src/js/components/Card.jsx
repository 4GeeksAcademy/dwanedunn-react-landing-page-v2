const Card = ({ imageURL, imageAlt, cardTitle, cardContent, cardBtnText }) => {
  return (
    <>
      <div className="card">
        <img src={imageURL} className="card-img-top" alt={imageAlt} />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardContent}</p>
          <a href="#" className="btn btn-primary">
            {cardBtnText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
