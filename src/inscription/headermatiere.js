import React, { Component } from "react";

import "./matiere.css";

class Headermatiere extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-souhaite col-md-10">
        <div className="col-md-2"></div>

        <div className="col-md-2">Note N-1</div>

        <div className="col-md-4">Formule présentiel</div>

        <div className="col-md-3">Format</div>

        <div className="col-md-4">Formule en ligne</div>
      </div>
    );
  }
}

export default Headermatiere;
