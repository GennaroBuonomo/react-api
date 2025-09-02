import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [actresses, setActresses] = useState([]);

  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
      setActresses(resp.data);
    });
  };

  useEffect(() => {
   fetchActresses();
  }, []);

  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <h1 className="d-block mx-auto text-center"><strong>Attrici</strong></h1>
        </div>
        {actresses.map((actress) => {
           const {
            id,
            name,
            image,
            birth_year,
            nationality,
            biography,
            most_famous_movies,
            awards,
          } = actress;
          return(
        <div className="col-12"  key={id}>
          <div className="card text-white bg-dark m-3 actor-card">
            <div className="card-header text-center fw-bold fs-4">{name}</div>
            <img src={image} className="card-img-top actor-img" alt={name.image}/>
            <div className="card-body text-center">
              <p>{birth_year} &nbsp; {nationality}</p>
              <p className="card-text">{biography}</p>
              <p>
                <span className="fw-bold text-danger">most_famous_movies</span><br />
                <span className="text-danger">{most_famous_movies}</span>
              </p>
              <p>
                <span className="fw-bold text-warning">awards</span><br />
                <span className="text-warning">{awards}</span>
              </p>
            </div>
          </div>
        </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default App
