const Card = ({ imageURL, imageAlt, title, content, btnText }) => {
  return (
    <>
      <div className="card h-100" style={{ width: "16rem" }}>
        <img src={imageURL} className="card-img-top mb-4" alt={imageAlt} />
        <div className="card-body text-center p-0 d-flex flex-column justify-content-between">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <div className="w-100 d-flex p-3 justify-content-center bg-light">
            <a href="#" className="btn btn-primary">
              {btnText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
