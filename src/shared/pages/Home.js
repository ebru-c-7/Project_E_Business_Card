import React from "react";

// import Navbar from "../components/Navigation/Navbar";

import imgItem1 from "../../assets/business/share-with.jpg";
import imgItem2 from "../../assets/business/share.jpg";

import "./Home.css";

const Home = (props) => { 
  return (
    <React.Fragment>
      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="sectiontitle">
            <h6 className="heading font-x3">Create Your Own Portfolio</h6>
            <p>
              Do you know that not only can you create your own cards, but also
              you can add other cards to your portfolio?
            </p>
          </div>
          <div className="posts">
            <figure className="group">
              <div>
                <img src={imgItem1} alt="sharing cards" />
              </div>
              <figcaption>
                <h6 className="heading">Already a member?</h6>
                <p>
                  To start enjoying a virtual business card portfolio, login now
                  and create your card(s). {"\n\n"}
                  Don't forget to add the cards you need to your portfolio!
                </p>
                {!props.isLogin && <footer>
                  <a className="btn" href="people/authenticate/login">
                    Login
                  </a>
                </footer>}
              </figcaption>
            </figure>
            <figure className="group">
              <div>
                <img src={imgItem2} alt="check out members" />
              </div>
              <figcaption>
                <h6 className="heading">Check Out Our Members!</h6>
                <p>
                  You can also check out our public e-business-cards (e.b.c.) to
                  see some of our members. {"\n\n"}Don't forget that not all
                  members share their cards publicly. So, sign up today to reach
                  out to more people!
                </p>
                <footer>
                  <a className="btn" href="/ebcards">
                    View Cards
                  </a>
                </footer>
              </figcaption>
            </figure>
          </div>
          <div className="clear"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Home;
