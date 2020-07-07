import React, { Component } from "react";

import "./home.css";
import axios from "axios";

import TextField from '@material-ui/core/TextField';
import InputMask from "react-input-mask";
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
class Administration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      RueNumber: "",
      prenom: "",
      RueName: "",
      codePostal: "",
      fixe: 0,
      phone: 0,
      codeFamilly: "",
      checkedLegal: false,
      checkedPedogogique: false,
      PrixTotal: "",
      PrixApplique: 0,
    };
  }
  changePrenon = (e) => {
    this.setState({
      prenom: e.target.value,
    });
  };
  changeCodePostal = (e) => {
    this.setState({
      codePostal: e.target.value,
    });
  };
  changeCIN = (e) => {
    this.setState({
      cin: e.target.value,
    });
  };
  changeNameRue = (e) => {
    this.setState({
      RueName: e.target.value,
    });
  };
  changeRueNumber = (e) => {
    this.setState({
      RueNumber: e.target.value,
    });
  };
  changePrixTotal = (e) => {
    this.setState({
      PrixTotal: e.target.value,
    });
  };
  changePrixApplique = (e) => {
    this.setState({
      PrixApplique: e.target.value,
    });
  };
  changeCodeFamilly = (e) => {
    this.setState({
      codeFamilly: e.target.value,
    });
  };
  handlecheckedPedogogique = (event) => {
    this.setState({ checkedPedogogique: event.target.checked });
    console.log(event.target.checked);
  };
  handlecheckedLegal = (event) => {
    this.setState({ checkedLegal: event.target.checked });
    console.log(event.target.checked);
  };
  changeName = (e) => {
    this.setState({
      nom: e.target.value,
    });
    console.log(this.state.valuePedogogique);
  };
  changePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
    console.log(this.state.value);
  };
  changeFixe = (e) => {
    this.setState({
      fixe: e.target.value,
    });
    console.log(this.state.fixe);
  };
  AddData = () => {
    
    axios
      .post("http://localhost:5000/validationadministration", {
        name: this.state.nom,
        prenom: this.state.prenom,
        RueNumber: this.state.RueNumber,
        RueName: this.state.RueName,
        phone: this.state.phone,
        codePostal: this.state.codePostal,
        adresse: this.state.adresse,
        fixe: this.state.fixe,
        codeFamilly: this.state.codeFamilly,
        "reference Legal": this.state.checkedLegal,
        "reference Pedogogique": this.state.checkedPedogogique,
        PrixTotal: this.state.PrixTotal,
        PrixApplique: this.state.PrixApplique,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="formSignIn">
        <form onSubmit={this.AddData}>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              code famile
            </label>
            <div className="col-sm-8">
              <InputMask
                {...this.props}
                mask="a-99-9999"
                placeholder="F-20-2014"
                onChange={this.changeCodeFamilly}
              />
            </div>
          </div>
          
          <div className="bloc-familly">
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-4 col-form-label">
                Nom
              </label>
              <div className="col-sm-8">
              <TextField required id="standard-name" className="textfield" label="" onChange={this.changeName} value={this.state.nom} />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-4 col-form-label">
                Prenom
              </label>
              
              <div className="col-sm-8">
              <TextField required id="standard-prenom" className="textfield" label="" onChange={this.changePrenon} value={this.state.prenom} />
              </div>
               
            </div>
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-4 col-form-label">
                Mobile <i className="fas fa-mobile"></i>
              </label>
              <div className="col-sm-8">
                <InputMask
                  {...this.props}
                  mask="99 999 999"
                  placeholder="20 120 120"
                  onChange={this.changePhone}
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-4 col-form-label">
                Fixe <i className="fas fa-phone"></i>
              </label>
              <div className="col-sm-8">
                <InputMask
                  {...this.props}
                  mask="99 999 999"
                  placeholder="75 705 705"
                  onChange={this.changeFixe}
                />
              </div>
            </div>
            <div className="bloc-adresse">
              <div className="form-group row">
              <label for="inputPassword" className="col-sm-6 col-form-label">
              Numéro de rue
              </label>
              <div className="col-sm-6">
              <TextField required id="standard-RueNumber" className="textfield NumeroRue" label="" onChange={this.changeRueNumber} value={this.state.RueNumber} />
              </div>
                
              </div>
              <div className="form-group row">
              <label for="inputPassword" className="col-sm-5 col-form-label">
            Nom de rue
              </label>
              <div className="col-sm-7">
              <TextField required id="standard-RueNumber" className="textfield NumeroRue" label="" onChange={this.changeNameRue} value={this.state.RueName} />
              </div>
                
              </div>
              
              <div className="form-group row">
              <label className="col-sm-5 col-form-label">
              Code Postal
              </label>
              <div className="col-sm-7">
              <TextField required id="standard-Code-Postal" className="textfield" label="" onChange={this.changeCodePostal}  />
              </div>
                
              </div>
              
               
            </div>
            
            <div className="form-group row">
              <label  className="col-sm-8 col-form-label">
                
              Referent Péogogique
              </label>

              <div className="col-sm-4">
              <Switch
              value={this.state.checkedPedogogique}
          checked={this.state.checkedPedogogique}
          onChange={this.handlecheckedPedogogique}
          aria-label="checkedA"
        />
              
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-8 col-form-label">
                
                Referent Legal
              </label>

              <div className="col-sm-4">
              <Switch
              value={this.state.checkedLegal}
          checked={this.state.checkedLegal}
          onChange={this.handlecheckedLegal}
          aria-label="checkedA"
        />
              
              </div>
            </div>
          </div>
          <div className="form-group row">
              <label className="col-sm-6 col-form-label">
              Prix total calculé
              </label>
              <div className="col-sm-6">
              <TextField required id="standard-PrixTotal" className="textfield" label="" onChange={this.changePrixTotal}  />
              </div>
                
              </div>
              <div className="form-group row">
              <label className="col-sm-6 col-form-label">
              Prix appliqué
              </label>
              <div className="col-sm-6">
              <TextField required id="standard-PrixApplique" className="textfield" label="" onChange={this.changePrixApplique}  />
              </div>
                
              </div>
          
              <Button type="submit" style={{ "background" : '#0288d1' }} variant="raised" color="secondry" >
              Validation
            administration
      </Button>
        
        </form>
      </div>
    );
  }
}

export default Administration;
