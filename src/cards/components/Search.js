import React, {useState} from "react";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = (props) => {
  const [search, setSearch] = useState({ filter: "name", keyword: null });

  const searchChangeHandler = (event, target) => {
    let oldState = { ...search };
    oldState[target] = event.target.value;
    setSearch(oldState);
  };

  return (
    <Navbar fixed="bottom" bg="light" variant="light" expand="sm" className="navbar-mobile">
      <Navbar.Collapse
        className="justify-content-center navbar-foot"
        id="search-bar"
      >
        <Form inline onSubmit={(e)=>props.search(e, search)}>
          <Form.Control
            className="filter-mobile"
            as="select"
            name="filter"
            onChange={(e) => searchChangeHandler(e, "filter")}
          >
            <option value="name">Name</option>
            <option value="position">Position</option>
            <option value="company">Company</option>
            <option value="location">Location</option>
          </Form.Control>
          <Form.Control
            type="text"
            placeholder="Search"
            className="mr-sm-2 navbar-input search-mobile"
            onChange={(e) => searchChangeHandler(e, "keyword")}
          />
          <Button
            type="submit"
            className="button-search"
            variant="outline-success"
            style={{ margin: "0 0.5rem" }}
          >
            <i className="fas fa-search"></i>
          </Button>
          <Button 
            className="button-filter"
            onClick={props.clear} 
            variant="outline-danger">
            <i className="fas fa-times"></i>
          </Button>
        </Form>
      </Navbar.Collapse>
      <Navbar.Toggle aria-controls="search-bar" />
    </Navbar>
  );
};

export default Search;
