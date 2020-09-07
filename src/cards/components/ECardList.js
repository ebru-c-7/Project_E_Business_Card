import React from "react";

import ECardItem from "./ECardItem";

const persons = [
  {
    name: "John A. Smityson",
    position: "Senior Accountant",
    company: "Smity Co.",
    tel: "333.333.33",
    mail: "j.smity@email.com",
    location: "New York, USA",
    slogan: "let it be..",
    socialMedia: {
      twitter: "https://twitter.com/BarackObama",
      instagram: "https://www.instagram.com/barackobama/",
    },
  },
  {
    name: "John Smity",
    position: "Senior Accountant",
    company: "Smity Co.",
    tel: "333.333.33",
    mail: "j.smity@email.com",
    location: "New York, USA",
    slogan: "let it be..",
    socialMedia: {
      facebook: "https://www.facebook.com/barackobama/",
      instagram: "https://www.instagram.com/barackobama/",
    },
  },
  {
    name: "John Smity",
    position: "Senior Accountant",
    company: "Smity Co.",
    tel: "333.333.33",
    mail: "j.smity@email.com",
    slogan: "let it be..",
    socialMedia: {
      instagram: "https://www.instagram.com/barackobama/",
    },
  },
  {
    name: "John Smity",
    position: "Senior Accountant",
    company: "Smity Co.",
    tel: "333.333.33",
    mail: "j.smity@email.com",
    slogan: "let it be..",
    socialMedia: {
      twitter: "https://twitter.com/BarackObama",
      facebook: "https://www.facebook.com/barackobama/",
      instagram: "https://www.instagram.com/barackobama/",
    },
  },
  {
    name: "John Smity",
    position: "Senior Accountant",
    company: "Smity Co.",
    tel: "333.333.33",
    mail: "j.smity@email.com",
    slogan: "let it be..",
    socialMedia: {
      twitter: "https://twitter.com/BarackObama",
      facebook: "https://www.facebook.com/barackobama/",
      instagram: "https://www.instagram.com/barackobama/",
    },
  },
];
const ECardList = () => {
  let items = persons.map((person) => (
    <ECardItem key={Math.random()*1000} {...person}></ECardItem>
  ));
  return items;
};

export default ECardList;
