import React from "react";

import Navbar from "../components/Navigation/Navbar";

import imgItem1 from "../../assets/business/share-with.jpg";
import imgItem2 from "../../assets/business/share.jpg";

import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="bgded overlay">
        <Navbar />
        <div id="pageintro" className="hoc clear">
          <article>
            <h3 className="heading">E-Business Cards</h3>
            <p>
              We have brought a new approach to business cards through making
              them more accessable, less costly and environment-friendly.
            </p>
            <footer>
              <a className="btn" href="/people/authenticate/signup">
                Join Us
              </a>
            </footer>
          </article>
        </div>
      </div>
      <div class="wrapper row3">
        <main class="hoc container clear">
          <div class="sectiontitle">
            <h6 class="heading font-x3">Create Your Own Portfolio</h6>
            <p>
              Do you know that not only can you create your own cards, but also
              you can add other cards to your portfolio?
            </p>
          </div>
          <div class="posts">
            <figure class="group">
              <div>
                <img src={imgItem1} alt="sharing cards" />
              </div>
              <figcaption>
                <h6 class="heading">Already a member?</h6>
                <p>
                  To start enjoying a virtual business card portfolio, login now
                  and create your card(s). {"\n\n"}
                  Don't forget to add the cards you need to your portfolio!
                </p>
                <footer>
                  <a class="btn" href="people/authenticate/login">
                    Login
                  </a>
                </footer>
              </figcaption>
            </figure>
            <figure class="group">
              <div>
                <img src={imgItem2} alt="check out members" />
              </div>
              <figcaption>
                <h6 class="heading">Check Out Our Members!</h6>
                <p>
                  You can also check out our public e-business-cards (e.b.c.) to
                  see some of our members. {"\n\n"}Don't forget that not all
                  members share their cards publicly. So, sign up today to reach
                  out to more people!
                </p>
                <footer>
                  <a class="btn" href="/ebcards">
                    View Cards
                  </a>
                </footer>
              </figcaption>
            </figure>
          </div>
          <div class="clear"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Home;
