const Card = ({ imageURL, imageAlt, title, content, btnText }) => {
  return (
    <>
      <div className="card">
        <img src={imageURL} className="card-img-top" alt={imageAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">
            {btnText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
