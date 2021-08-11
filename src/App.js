import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "./actions";
import Cards from "./components/Cards";

function App(props) {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="App">
      <Cards />
    </div>
  );
}

export default connect(null, { getData })(App);
