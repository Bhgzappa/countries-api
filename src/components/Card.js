import { Link } from "react-router-dom";
function Card({ name, img, population }) {
  return (
    <div className="card m-3">
      <img
        src={img}
        alt=""
        className="card-img-top img-fluid"
        style={{ height: "10rem", width: "18rem" }}
      />
      <div className="card-body">
        <Link to={`/details/${name}`} className="nav-link">
          <h4>{name}</h4>
          <h5>{population}</h5>
        </Link>
      </div>
    </div>
  );
}

export default Card;
