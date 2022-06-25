export const Movie = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: img,
  } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image waves-effect waves-block waves-light">
        {img === "N/A" ? (
          `https://via.placeholder.com/295x416.png?text=${title}`
        ) : (
          <img className="activator" src={img} alt="" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year}
          <span>{type}</span>
        </p>
      </div>
    </div>
  );
};
