import React, { useState, useEffect } from "react";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
  }, []);

  return (
    <>
      <div class="container">
        <section className="row justify-content-center mt-5">
          {films.map((films) => (
            <div className="col-md-6" key={`films-card-${films.id}`}>
              <div className="card shadow my-2">
                <img src={films.image} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-header">{films.title}</h4>
                  <p className="card-subtitle">Director: {films.director}</p>
                  <p className="card-subtitle">Producer: {films.producer}</p>
                  <p className="card-subtitle">
                    Released in: {films.release_date}
                  </p>
                  <p className="card-subtitle">
                    Rotten Tomatoes Score: {films.rt_score}
                  </p>
                  <div className="card-footer">
                    <p className="card-subtitle">{films.description}</p>
                    <a
                      href="https://ghibliapi.herokuapp.com/films"
                      class="card-link"
                    >
                      API Resource Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Films;
