import React from 'react';
import Header from './header/header';
import Administration from './administration/administration';
import Inscriptionenzo from './inscription/Inscriptionenzo';
import { MuiThemeProvider } from "@material-ui/core/styles";



import './App.css';

function App() {

  return (
    <MuiThemeProvider>
     <Header  />
     <div className="admin-inscri" >
     <div className="col-md-3">
     <Administration  />
     </div>
     <div className="col-md-9">
     <Inscriptionenzo  />
     
     </div>

     </div>
    


     </MuiThemeProvider>
  );
}

export default App;
