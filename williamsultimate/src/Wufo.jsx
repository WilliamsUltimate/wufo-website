import React from "react";

function Wufo() {
  return (
    <section class="page">
        <nav class="navbar navbar-expand-md fixed-top">
        <div class="container-fluid align-items-center nav-container flex-row">
            <a href="../" class="navbar-brand"><img src="../assets/wufopics/wufo.png" alt="WUFO Logo" class="wufo-logo"/> WUFO</a>
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
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="../wufo-roster">Roster</a></li>
                <li class="nav-item"><a class="nav-link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfpHO556yjFaGIwy0DJh2aiabUO44tFaCCOvLZtDWk_5tP6cQ/viewform">Join</a></li>
                <li class="nav-item"><a class="nav-link" target="_blank" href="https://forms.gle/Nf6nohrM2qUpXH3g8">Feedback Form</a></li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Explore
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="../lawufa">La WUFA</a>
                    <a class="dropdown-item" href="../buf">BUF</a>
                </div>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        <div id="photos" class="carousel slide" data-ride="carousel" data-interval="4000">

        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/wufopics/carousel/one.jpg" alt="1" class="img-fluid"/>
            </div>
            <div class="carousel-item">
            <img src="../assets/wufopics/carousel/two.jpeg" alt="2" class="img-fluid"/>
            </div>
            <div class="carousel-item">
            <img src="../assets/wufopics/carousel/three.JPG" alt="3" class="img-fluid"/>
            </div>
            <div class="carousel-item">
            <img src="../assets/wufopics/carousel/four.JPG" alt="4" class="img-fluid"/>
            </div>
            <div class="carousel-item">
            <img src="../assets/wufopics/carousel/five.JPG" alt="5" class="img-fluid"/>
            </div>
            <div class="carousel-item">
            <img src="../assets/wufopics/carousel/six.JPG" alt="6" class="img-fluid"/>
            </div>
            <div class="carousel-item">
            <img src="../assets/wufopics/carousel/seven.JPG" alt="7" class="img-fluid"/>
            </div>
        </div>

        <a class="carousel-control-prev" href="#photos" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#photos" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
        </div>

        <div class="main-text col-md-12 text-center justify-content-center">
        <h1 class="name-wufo">WUFO</h1>
        <h3 class="caption-wufo"><em>Sugar, water, purple.</em></h3>
        </div>

        <div class="container main">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-6">
            <p class="desc">
                <strong style={{color: "#5c23b4;"}}>WUFO</strong> is Williams College’s ultimate frisbee team for male and gender non-conforming students. We've been a student
                organization at Williams since 1977, and currently compete at the USAU DIII level. Recruiting takes place in the fall
                and we encourage those of any skill level to come try out &mdash; the vast majority of WUFO members had no ultimate
                experience before their first practice! <strong>Interested in joining? Click
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfpHO556yjFaGIwy0DJh2aiabUO44tFaCCOvLZtDWk_5tP6cQ/viewform" class="pagelink">here</a></strong>
                to fill out our interest form.
            </p>
            </div>
            <div class="col-md-6 text-center">
            <h5><a href="https://www.youtube.com/watch?v=o0zNmlRKwxM" class="pagelink" target="_blank">2020 Highlights <i class="fab fa-youtube fa-sm"></i></a></h5>
            <div class="embed-responsive embed-responsive-16by9 rounded">
                <video width="560" height="315" poster="../assets/thumbnail-compressed.jpg" class="embed-responsive-item" preload="auto" controls>
                <source src="../assets/WUFO2020.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
                {/* <video controls preload="auto" width="560" height="315" poster="../assets/thumbnail.png">
                <source src="../assets/WUFO2020.mp4" type="video/mp4" />
                </video> */}
            </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-md-8">
            <h3 style={{color: "#5c23b4;"}}>Upcoming Events</h3>
            <div class="list-group list-group-flush">
                <a href="https://sites.google.com/williams.edu/purplekeyfair2020/" class="list-group-item list-group-item-action" target="_blank">Sep 10 (Thurs) - Purple Key Fair</a>
                <a href="https://meet.google.com/nan-cpnz-ner" class="list-group-item list-group-item-action" target="_blank">Sep 10 (Thurs) 8–10PM EST - Google Meet Interest Meeting!</a>
            </div>
            <h3 class="mt-2" style={{color: "#5c23b4;"}}>A Look Back</h3>
            <div class="list-group list-group-flush">
                <a href="https://www.youtube.com/watch?v=nWsxtTDEk-o" class="list-group-item list-group-item-action" target="_blank">Kees Humes for Donovan 2020</a>
                <a href="https://twitter.com/wufoultimate/status/1236728966154801153?s=20" class="list-group-item list-group-item-action" target="_blank">No Sleep Till Brooklyn 2020</a>
                <a href="https://www.youtube.com/watch?v=WuOetFvj8xg" class="list-group-item list-group-item-action" target="_blank">2018-2019 Highlights</a>
                <a href="https://www.youtube.com/watch?v=FVMJDDJJTWc" class="list-group-item list-group-item-action" target="_blank">2015-2016 Highlights</a>
                <a href="https://www.youtube.com/watch?v=B6X7LjKyF6E" class="list-group-item list-group-item-action" target="_blank">2014-2015 Highlights</a>
            </div>
            </div>
            <div class="col-md-4 tweets">
            <div class="embed-responsive embed-responsive-3by6 text-center">
                <a class="embed-responsive-item twitter-timeline" data-lang="en" data-width="360" data-height="580" data-theme="light" href="https://twitter.com/wufoultimate?ref_src=twsrc%5Etfw">Tweets by wufoultimate</a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            </div>
        </div>
        </div>

    </section>
  );
}

export default Wufo;