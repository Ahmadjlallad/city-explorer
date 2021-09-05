import React from "react";
import FormMap from "./FormMap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormMap />
      </>
    );
  }
}
export default App;
