import React, { Component } from "react";

import "./matiere.css";

class Matiere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AucunFormulePresentiel: false,
      AnuelleFormulePresentiel: false,
      trimestrielFormulePresentiel: false,
      FormatGroupe: false,
      FormatParticulier: false,
      AucunFormuleLigne: false,
      AnuelleFormuleLigne: false,
      trimestrielFormuleLigne: false,
      NoteLang : 0
    };
  }
  handleFormulePresentielClick = (e) => {
    const ID = e.target.id;
    if ( typeof ID === "undefined" || ID === "trimestrielFormulePresentiel"+this.props.lang) {
      this.setState({
        trimestrielFormulePresentiel: !this.state.trimestrielFormulePresentiel,
        AnuelleFormulePresentiel: false,
        AucunFormulePresentiel: false,
      });
    } else if ( typeof ID === "undefined" || ID === "AnuelleFormulePresentiel"+this.props.lang)  {
      this.setState({
        AnuelleFormulePresentiel: !this.state.AnuelleFormulePresentiel,
        AucunFormulePresentiel: false,
        trimestrielFormulePresentiel: false,
      });
    } else {
      this.setState({
        AucunFormulePresentiel: !this.state.AucunFormulePresentiel,
        trimestrielFormulePresentiel: false,
        AnuelleFormulePresentiel: false,
      });
    }
  };
  handleFormuleLigneClick = (e) => {
    const ID = e.target.id;
    if (typeof ID === "undefined" || ID === "trimestrielFormuleLigne"+this.props.lang) {

      this.setState({
        trimestrielFormuleLigne: !this.state.trimestrielFormuleLigne,
        AnuelleFormuleLigne: false,
        AucunFormuleLigne: false,
      });
    } else if (typeof ID === "undefined" || ID === "AnuelleFormuleLigne"+this.props.lang) {
      this.setState({
        AnuelleFormuleLigne: !this.state.AnuelleFormuleLigne,
        AucunFormuleLigne: false,
        trimestrielFormuleLigne: false,
      });
    } else {
      this.setState({
        AucunFormuleLigne: !this.state.AucunFormuleLigne,
        trimestrielFormuleLigne: false,
        AnuelleFormuleLigne: false,
      });
    }
  };
  handleFormatClick = (e) => {
    const ID = e.target.id ;

    if(typeof ID === "undefined" || ID === "FormatGroupe"+this.props.lang){
      this.setState({
        FormatGroupe: !this.state.FormatGroupe,
        FormatParticulier: false,
      });
    } else {
      this.setState({
        FormatParticulier: !this.state.FormatParticulier,
        FormatGroupe: false,
      });
    }
  };
  changeNote = (e) => {
    this.setState({
      NoteLang: e.target.value,
    });
    console.log(this.state.valuePedogogique);
  };

  render() {
    return (
      <div className="matiere-souhaite col-md-12">
        <div>
          <h5 for="inputPassword" style={{ width: "100px" }}>
            {this.props.lang} :
          </h5>
        </div>

        <div>
          <input id={'note'+ this.props.lang} onChange={this.changeNote} type="number" placeholder="10" min="0" max="20" />
        </div>

        <div>
          <label
            id={"AucunFormulePresentiel"+ this.props.lang}
            className={
              this.state.AucunFormulePresentiel ? "labelTrue" : "labelFalse"
            }
            onClick={this.handleFormulePresentielClick}
          >
            Aucun
          </label>
          <input type="hidden" name={"AucunFormulePresentiel"+ this.props.lang} value={this.state.AucunFormulePresentiel}  />
          <label
            id={"AnuelleFormulePresentiel"+ this.props.lang}
            className={
              this.state.AnuelleFormulePresentiel ? "labelTrue" : "labelFalse"
            }
            onClick={this.handleFormulePresentielClick}
          >
            Anuelle
          </label>
          <input type="hidden" name={"AnuelleFormulePresentiel"+ this.props.lang} value={this.state.AnuelleFormulePresentiel}  />
          <label
            id={"trimestrielFormulePresentiel"+ this.props.lang}
            className={
              this.state.trimestrielFormulePresentiel
                ? "labelTrue"
                : "labelFalse"
            }
            onClick={this.handleFormulePresentielClick}
          >
            trimestriel
          </label>
          <input type="hidden" name={"trimestrielFormulePresentiel"+ this.props.lang} value={this.state.trimestrielFormulePresentiel}  />
        </div>

        <div>
          <label
            id={"FormatGroupe"+ this.props.lang}
            className={this.state.FormatGroupe ? "labelTrue" : "labelFalse"}
            onClick={this.handleFormatClick} 
          >
            Groupe
          </label>
          <input type="hidden" onChange={this.props.changeFormat} name={"FormatGroupe"+ this.props.lang} value={this.state.FormatGroupe}  />
          <label
            id={"FormatParticulier"+ this.props.lang}
            className={
              this.state.FormatParticulier ? "labelTrue" : "labelFalse"
            }
            onClick={this.handleFormatClick}
          >
            Particulier
          </label>
          <input type="hidden" name={"FormatParticulier"+ this.props.lang} value={this.state.FormatParticulier}  />

        </div>

        <div>
          <label
            id={"AucunFormuleLigne"+ this.props.lang}
            className={
              this.state.AucunFormuleLigne ? "labelTrue" : "labelFalse"
            }
            onClick={this.handleFormuleLigneClick}
          >
            Aucun
          </label>
          <input type="hidden" name={"AucunFormuleLigne"+ this.props.lang} value={this.state.AucunFormuleLigne}  />

          <label
            id={"AnuelleFormuleLigne"+ this.props.lang}
            className={
              this.state.AnuelleFormuleLigne ? "labelTrue" : "labelFalse"
            }
            onClick={this.handleFormuleLigneClick}
          >
            Anuelle
          </label>
          <input type="hidden" name={"AnuelleFormuleLigne"+ this.props.lang} value={this.state.AnuelleFormuleLigne}  />

          <label
            id={"trimestrielFormuleLigne"+ this.props.lang}
            className={
              this.state.trimestrielFormuleLigne ? "labelTrue" : "labelFalse"
            }
            onClick={this.handleFormuleLigneClick}
          >
            trimestriel
          </label>
          <input type="hidden" name={"trimestrielFormuleLigne"+ this.props.lang} value={this.state.trimestrielFormuleLigne}  />

        </div>
      </div>
    );
  }
}

export default Matiere;