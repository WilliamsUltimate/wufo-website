import React from "react";

function Buf() {
  return (
    <section class="page">
        <nav class="navbar navbar-expand-md fixed-top">
        <div class="container-fluid align-items-center nav-container flex-row">
            <a href="../" class="navbar-brand">BUF</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span class="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-right" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="10" y1="12" x2="20" y2="12" />
                <line x1="6" y1="18" x2="20" y2="18" />
                </svg></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Explore
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="../pages/wufo">WUFO</a>
                    <a class="dropdown-item" href="../pages/wufa">La WUFA</a>
                </div>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        <div id="photos" class="carousel slide" data-ride="carousel" data-interval="4000">

        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/bufpics/carousel/one.jpeg" alt="1" class="img-fluid"/>
            </div>

        </div>

        </div>

        <div class="main-text col-md-12 text-center justify-content-center">
        <h1 class="name-wufo">BUF</h1>
        <h3 class="caption-wufo"><em>Bears, beets, Battlestar Galactica.</em></h3>
        </div>

        <div class="container main">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-8">
            <p class="desc">
                <strong style="color: #5c23b4;">BUF</strong> (aka B-team, aka the Narwhals, aka the Williams
                Chipotle Club) is WUF's low-commitment, high-fun, mixed (or all-gender) team. Unlike the A-teams,
                we do not hold tryouts, and all of our events are always open to everyone! We are a great option
                for people who love playing ultimate, and want to keep practicing and getting better, but don't
                necessarily want to make such an intense time commitment as those hardos on the A-teams. We are
                also a great option for people who didn't make the A-team, but still want to be part of the
                organization in some (super fun) way. In a normal year, we hold practices about twice a week,
                and attend a few (incredibly fun and chill) daylong tournaments on weekends. These days we've
                also been solving zoom crossword puzzles, and playing lots of highly competitive skribbl. We
                can't wait to get back to campus and meet a new cohort of freshmen narwhals! Contact
                <strong><a href="mailto:em19@williams.edu" class="pagelink">Eli Miller (em19&#64;williams.edu)</a></strong> or
                <strong><a href="mailto:mns4@williams.edu)" class="pagelink">Maya Spalding-Fecher (mns4&#64;williams.edu)</a></strong>
                for more info.
            </p>
            </div>
            <div class="col-md-4 tweets">
            <div class="embed-responsive embed-responsive-3by6 text-center">
                <a class="twitter-timeline" data-width="420" data-height="360" href="https://twitter.com/BufoAdventures?ref_src=twsrc%5Etfw">Tweets by BufoAdventures</a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            </div>
            <div class="row justify-content-center align-items-center morepics">
            <div class="col-md-6">
                <img src="../assets/bufpics/two.png" alt="Group Pic" width="600" class="img-fluid rounded gallery"/>
            </div>
            <div class="col-md-6">
                <img src="../assets/bufpics/four.png" alt="Practice Shot" width="600" class="img-fluid rounded gallery"/>
            </div>
            </div>
        </div>
        </div>

    </section>
  );
}

export default Buf;