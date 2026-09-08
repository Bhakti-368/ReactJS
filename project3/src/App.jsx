
import React from "react";
import "./style.css";

function Project1() {
  return (
    <div className="project">
      <img
        src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80"
        alt="Terra & Co."
      />
      <div className="category">BRANDING</div>
      <h3>Terra & Co.</h3>
      <p>Brand Identity</p>
      <div className="arrow">→</div>
    </div>
  );
}

function Project2() {
  return (
    <div className="project">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
        alt="Wilder Studio"
      />
      <div className="category">WEB DESIGN</div>
      <h3>Wilder Studio</h3>
      <p>Website Design</p>
      <div className="arrow">→</div>
    </div>
  );
}

function Project3() {
  return (
    <div className="project">
      <img
        src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
        alt="Aurea Wellness"
      />
      <div className="category">PRINT DESIGN</div>
      <h3>Aurea Wellness</h3>
      <p>Print Collateral</p>
      <div className="arrow">→</div>
    </div>
  );
}

function Project4() {
  return (
    <div className="project">
      <img
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80"
        alt="Natura App"
      />
      <div className="category">UI/UX DESIGN</div>
      <h3>Natura App</h3>
      <p>Mobile Experience</p>
      <div className="arrow">→</div>
    </div>
  );
}


function Service1() {
  return (
    <li>
      <span>01</span>
      BRAND IDENTITY DESIGN
    </li>
  );
}

function Service2() {
  return (
    <li>
      <span>02</span>
      WEB & UI/UX DESIGN
    </li>
  );
}

function Service3() {
  return (
    <li>
      <span>03</span>
      PRINT & EDITORIAL DESIGN
    </li>
  );
}

function Service4() {
  return (
    <li>
      <span>04</span>
      SOCIAL MEDIA DESIGN
    </li>
  );
}

function Service5() {
  return (
    <li>
      <span>05</span>
      ART DIRECTION
    </li>
  );
}


function App() {
  return (
    <div className="portfolio">

      {/* HERO */}
      <section className="hero">

        <div className="heroText">

          <div className="smallTop">
            DESIGN
            <br />
            WITH PURPOSE.
            <br />
            DETAILS WITH SOUL.
          </div>

          <h1>PORTFOLIO</h1>

          <div className="role">
            DESIGNER • CREATOR • PROBLEM SOLVER
          </div>

          <div className="quote">
            <span>“</span>

            <p>
              I craft thoughtful digital experiences
              <br />
              and visuals that connect, inspire,
              <br />
              and leave a lasting impact.
            </p>
          </div>

          <div className="signature">
            Bhakti
          </div>

        </div>

        <div className="heroImage">
          <img
            src="https://img.magnific.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Bhakti Portfolio"
          />
        </div>

      </section>


      {/* ABOUT */}
      <section className="about">

        <div className="aboutPlant">
          ♧
        </div>

        <div className="aboutContent">

          <div className="heading">
            ABOUT ME
            <span></span>
          </div>

          <p>
            I'm Bhakti, a multidisciplinary designer
            focused on brand identity, digital design,
            and visual storytelling.
          </p>

          <p>
            I believe good design is more than visuals —
            it's about meaning, emotion,
            and connection.
          </p>

        </div>

      </section>


      {/* SELECTED WORK */}
      <section className="selectedWork">

        <div className="centerHeading">
          SELECTED WORK
        </div>

        <div className="projects">

          <Project1 />
          <Project2 />
          <Project3 />
          <Project4 />

        </div>

      </section>


      {/* APPROACH */}
      <section className="middle">

        <div className="approach">

          <div className="heading white">
            MY APPROACH
            <span></span>
          </div>

          <div className="steps">

            <div className="step">
              <div className="circle">◌</div>
              <small>01</small>
              <h4>DISCOVER</h4>
              <p>
                Understanding goals,
                audience, and context.
              </p>
            </div>


            <div className="step">
              <div className="circle">☼</div>
              <small>02</small>
              <h4>DEFINE</h4>
              <p>
                Strategic structure
                and creative direction.
              </p>
            </div>


            <div className="step">
              <div className="circle">♧</div>
              <small>03</small>
              <h4>DESIGN</h4>
              <p>
                Crafting visual
                solutions with purpose.
              </p>
            </div>


            <div className="step">
              <div className="circle">≋</div>
              <small>04</small>
              <h4>DELIVER</h4>
              <p>
                Refining, testing and
                delivering impact.
              </p>
            </div>

          </div>

        </div>


        {/* SERVICES */}
        <div className="services">

          <div className="heading">
            SERVICES
            <span></span>
          </div>

          <ul>

            <Service1 />
            <Service2 />
            <Service3 />
            <Service4 />
            <Service5 />

          </ul>

          <div className="servicePlant">
            ♧
          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact">

        <div className="contactText">

          <h2>
            LET'S
            <br />
            CREATE
            <br />
            TOGETHER
          </h2>

          <p>
            I'm always open to meaningful
            <br />
            projects and collaborations.
          </p>

          <div className="contactSignature">
            Let's build something
            <br />
            beautiful together.
          </div>

        </div>


        <div className="contactImage">

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
            alt="Workspace"
          />

        </div>


        <div className="getInTouch">

          <div className="heading">
            GET IN TOUCH
            <span></span>
          </div>

          <p>
            ✉ hello@bhakti.com
          </p>

          <p>
            ◎ www.bhakti.com
          </p>

          <p>
            ⌖ India
          </p>

          <div className="connect">
            LET'S CONNECT
          </div>

          <div className="social">
            ◎ &nbsp; Be &nbsp; in &nbsp; ◎
          </div>

        </div>

      </section>

    </div>
  );
}

export default App;

