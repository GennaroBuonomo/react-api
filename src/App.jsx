import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [actresses, setActresses] = useState([]);

  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
      setActresses(resp.data.results);
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
        <div className="col-12">
          <div className="card">
            <div className="card-header text-center fw-bold fs-4">Nome</div>
            <img src="" alt="attrici" />
            <div className="card-body text-center">
              <p>1099 &nbsp; americano</p>
              <p className="card-text">Meryl Streep is considered one of the greatest actresses of her generation and has received numerous accolades for her versatile performances.</p>
              <p>
                <span className="fw-bold text-danger">most_famous_movies</span><br />
                <span className="text-danger">"The African Queen","Bringing Up Baby","On Golden Pond"</span>
              </p>
              <p>
                <span className="fw-bold text-warning">awards</span><br />
                <span className="text-warning">4 Academy Awards, 8 Golden Globe Awards</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
