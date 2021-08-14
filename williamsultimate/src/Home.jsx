import React from "react";

function Home() {
  return (
    <section className="page">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid align-items-center">
            <a href="/" className="navbar-brand">Williams Ultimate</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              <span className="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-right" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="10" y1="12" x2="20" y2="12" />
                  <line x1="6" y1="18" x2="20" y2="18" />
                </svg></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="wufo">WUFO</a></li>
                <li className="nav-item"><a className="nav-link" href="lawufa">La WUFA</a></li>
                <li className="nav-item"><a className="nav-link" href="buf">BUF</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="banner"></div>

        <div className="container main">
          <div className="row justify-content-center text-center flex-column">
            <h1 className="name">Williams College Ultimate Frisbee</h1>
            <h2 className="caption-landing">The best that Williams has to offer.</h2>

            <div className="row justify-content-center mt-3">
              <div className="col-sm-6 text-center mb-3">
                <a href="wufo">
                  <img src="assets/wufopics/wufoteam.jpg" alt="WUFO" width="85%" className="img-fluid rounded"/>
                </a>
                <h3 className="mt-3"><a href="wufo" className="team-name">WUFO</a></h3>
                <a href="wufo">
                  <img src="assets/wufopics/wufo.png" alt="WUFO Logo" width="23%" claclassNamess="img-fluid"/>
                </a>
              </div>
              <div className="col-sm-6 text-center mb-3">
                <a href="lawufa">
                  <img src="assets/lawufapics/lawufateam.JPG" alt="La WUFA" width="85%" className="img-fluid rounded"/>
                </a>
                <h3 className="mt-3"><a href="lawufa" className="team-name">La WUFA</a></h3>
                <a href="lawufa">
                  <img src="assets/lawufapics/lawufa.png" alt="La WUFA Logo" width="35%" className="img-fluid"/>
                </a>
              </div>
              <div className="col-sm-6 text-center mb-3">
                <a href="buf">
                  <img src="assets/bufpics/buf.jpeg" alt="BUF" width="85%" className="img-fluid rounded"/>
                </a>
                <h3 className="mt-3"><a href="buf" className="team-name">BUF</a></h3>
              </div>
            </div>
          </div>
        </div>

      </section>
  );
}

export default Home;