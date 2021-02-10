import React from "react";

import "../Navigation/Navigation.css";

const Intro = (props) => {
  return (
          <div id="pageintro" className="hoc clear">
            <article>
              <h3 className="heading">E-Business Cards</h3>
              <p>
                We have brought a new approach to business cards through making
                them more accessable, less costly and environment-friendly.
              </p>
              {!props.isLogin && <footer>
                <a className="btn" href="/people/authenticate/signup">
                  Join Us
                </a>
              </footer>} 
            </article>
          </div>
        );
};

export default Intro;
