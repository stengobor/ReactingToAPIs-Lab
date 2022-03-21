import React, { useEffect, useState } from "react";
import StudioGhiblilogo from "./components/Studio_Ghibli_logo.png";

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [show, setShow] = useState(false);
  const [showPeople, setShowPeople] = useState(false);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
  }, []);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((allPeople) => setPeople(allPeople));
  }, []);

  return (
    <>
      <nav>
        <img id="logo" src={StudioGhiblilogo} />
      </nav>

      <button id="btn1" onClick={() => setShow(!show)}>
        FILMS
      </button>
      <button id="btn2" onClick={() => setShowPeople(!showPeople)}>
        PEOPLE
      </button>

      <div id="bio" class="card text-center">
        <div class="card-body">
          <h5 class="card-header">Studio Ghibli</h5>
          <p class="card-text">
            Studio Ghibli was founded in 1985 by animated film directors Isao
            Takahata and Hayao Miyazaki, and has produced twenty-two
            feature-length films. Most Studio Ghibli films ranked number one at
            the box office in Japan in the year in which they were released.
            SPIRITED AWAY, directed by Hayao Miyazaki and released in 2001, is
            the all-time highest grossing film in Japan, earning over 30 billion
            yen at the box office. Studio Ghibli films have garnered numerous
            awards and critical acclaim from film critics and animation
            specialists around the world. SPIRITED AWAY was awarded the Golden
            Bear as the Best Feature Film at the 2002 Berlin International Film
            Festival and won the 2002 Academy Award for Best Animated Feature
            Film. In October 2001, Studio Ghibli, in conjunction with The Tokuma
            Memorial Cultural Foundation for Animation, founded the Ghibli
            Museum, Mitaka, designed by Hayao Miyazaki. THE WIND RISES (2013),
            THE TALE OF THE PRINCESS KAGUYA (2013), WHEN MARNIE WAS THERE (2014)
            and THE RED TURTLE (2016), the last four films released by Studio
            Ghibli, have earned the studio four consecutive Academy Award
            nominations for Best Animated Feature Film. The studio is currently
            working on a new production.
          </p>
        </div>
      </div>
      {show ? (
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
      ) : null}
      {showPeople ? (
        <div class="container">
          <section className="row justify-content-center mt-5">
            {people.map((people) => (
              <div className="col-md-6" key={`people-card-${people.id}`}>
                <div className="card shadow my-2">
                  <div className="card-body">
                    <h4 className="card-header">{people.name}</h4>
                    <p className="card-subtitle">Gender: {people.gender}</p>
                    <p className="card-subtitle">Age: {people.age}</p>
                    <p className="card-subtitle">Eye Color: {people.eye_color}</p>
                    <p className="card-subtitle">Hair Color: {people.hair_color}</p>
                    <div className="card-footer">
                      <a
                        href="https://ghibliapi.herokuapp.com/people"
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
      ) : null}
    </>
  );
};

export default App;
