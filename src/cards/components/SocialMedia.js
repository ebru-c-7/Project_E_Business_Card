import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = (props) => {
  return (
    <React.Fragment>
      {props.media.twitter && (
        <a
          className="social"
          target="blank"
          rel="noopener noreferrer"
          href={props.media.twitter}
        >
          <FontAwesomeIcon style={{ fontSize: "1.3rem" }} icon={faTwitter} />
        </a>
      )}
      {props.media.facebook && (
        <a
          className="social"
          target="blank"
          rel="noopener noreferrer"
          href={props.media.facebook}
        >
          <FontAwesomeIcon style={{ fontSize: "1.3rem" }} icon={faFacebook} />
        </a>
      )}
      {props.media.instagram && (
        <a
          className="social"
          target="blank"
          rel="noopener noreferrer"
          href={props.media.instagram}
        >
          <FontAwesomeIcon style={{ fontSize: "1.3rem" }} icon={faInstagram} />
        </a>
      )}
    </React.Fragment>
  );
};

export default SocialMedia;
