import React, { Component } from "react";

import axios from "axios";

import "./inscription.css";
import Matiere from "./matiere";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Headermatiere from "./headermatiere";
import Button from "@material-ui/core/Button";
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
class Inscriptionenzo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      dateNaissance: "",
      prixcalcul: 0,
      prenom: "",
      niveauscolaire: "",
      genre: "",
      enzo: true,
      farid: false,
      admin: "Enzo",
      lyndo: false,
      FormulePresentielMath: "",
      formatGroupe: true,
    };
  }

  handleClick = (e) => {
    const ID = e.target.id;
    if (typeof ID === "undefined" || ID === "Enzo") {
      this.setState({
        enzo: true,
        farid: false,
        lyndo: false,
        admin: ID,
      });
    } else if (typeof ID === "undefined" || ID === "Farid") {
      this.setState({
        enzo: false,
        farid: true,
        lyndo: false,
        admin: ID,
      });
    } else {
      this.setState({
        enzo: false,
        farid: false,
        lyndo: true,
        admin: ID,
      });
    }
  };

  AddNewInscri = () => {
    axios
      .post("http://localhost:5000/newinscription", {
        name: this.state.nom,
        dateNaissance: this.state.dateNaissance,
        niveauscolaire: this.state.niveauscolaire,
        genre: this.state.genre,
        prenom: this.state.prenom,

        prixcalcul: this.state.prixcalcul,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  changeFormat = (e) => {
    this.setState({
      formatGroupe: e.target.value,
    });
  };
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
    console.log(this.state.dateNaissance);
    console.log(this.state.genre);
    console.log(this.state.prenom);
    console.log(this.state.nom);
  };

  render() {
    var styleButton = {
      margin : '4px',
      background: '#0288d1',
    
    };
    return (
      <div>
        <form onSubmit={this.AddNewInscri}>
          <div style={{ "border-bottom": "2px solid black" }}>
            <div className="col-md-6">
              <span
                id="Enzo"
                className={this.state.enzo ? "buttonTrue" : "buttonFalse"}
                onClick={this.handleClick}
              >
                Enzo (E-16-009)
              </span>
              <span
                id="Farid"
                className={this.state.farid ? "buttonTrue" : "buttonFalse"}
                onClick={this.handleClick}
              >
                Farid (E-18-037)
              </span>
              <span
                id="Lyndo"
                className={this.state.lyndo ? "buttonTrue" : "buttonFalse"}
                onClick={this.handleClick}
              >
                Lyndo (E-20-083)
              </span>
            </div>
          </div>

          <div className="inscriptionenzo">
            <div className="col-md-4">
              <TextField
                id="Prenom"
                label="Prenom"
                value={this.state.prenom}
                onChange={this.handleChange("prenom")}
              />
            </div>
            <div className="col-md-4">
              <TextField
                id="date"
                label="date Naissance"
                type="date"
                defaultValue="2020-07-07"
                onChange={this.handleChange("dateNaissance")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="col-md-4">
              <InputLabel >
                Niveau scolaire
              </InputLabel>
              <Select
                native
                value={this.state.niveauscolaire}
                onChange={this.handleChange("niveauscolaire")}
                inputProps={{
                  id: "niveauscolaire-native-simple",
                }}
              >
                <option value="primaire" selected>
                  primaire
                </option>
                <option value="secondaire">secondaire</option>
                <option value="terminal">terminal</option>
              </Select>
            </div>
            <div className="col-md-4">
              <TextField
                id="nom"
                label="Nom"
                value={this.state.nom}
                onChange={this.handleChange("nom")}
              />
            </div>
            <div className="col-md-4">
              <FormControl>
                <InputLabel >
                  Niveau scolaire
                </InputLabel>
                <Select
                  native
                  value={this.state.genre}
                  onChange={this.handleChange("genre")}
                  inputProps={{
                    id: "genre-native-simple",
                  }}
                >
                  <option value="masculin" selected>
                    masculin
                  </option>
                  <option value="feminin">feminin</option>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="matieres col-md-10">
            <Headermatiere />
            <Matiere
              changeFormat={this.changeFormat}
              className="matiere-choisi"
              lang="Math"
            />
            <Matiere className="matiere-choisi" lang="Physique" />
            <Matiere className="matiere-choisi" lang="Français" />
            <Matiere className="matiere-choisi" lang="Anglais" />
          </div>
          
            <div className="form-group row">
            <label className="col-sm-6 col-form-label"></label>
  
              <label className="col-sm-2 col-form-label">
                cout calculé pour
              </label>
              <div className="col-sm-2">
                <TextField
                  required
                  id="standard-Code-Postal"
                  value={this.state.prixcalcul}
                  className="textfield"
                  label=""
                  onChange={this.handleChange("prixcalcul")}
                />
              </div>
              <div className="col-sm-4"></div>

            
          </div>
          <div className="row">
          <div className="col-sm-5"></div>
          

          <Button
            type="submit"
            style={{ background: "#0288d1" }}
            variant="raised"
            color="secondry"
          ><CheckOutlinedIcon />
            Je dèsinscris {this.state.admin}
          </Button>
          <Button
            type="submit"
            style={styleButton}
            variant="raised"
            color="secondry"
            className="buttonInscri"
        
          ><CheckOutlinedIcon />
            J'inscris {this.state.admin}
          </Button>

          </div>
          
        </form>
      </div>
    );
  }
}

export default Inscriptionenzo;
