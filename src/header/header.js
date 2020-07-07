
import React from 'react';

import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './header.css';



function Header() {

  return (
    <AppBar position="static" color="default">
    <Toolbar className="header">
    <Typography className="nav justify-content-end">
      <Link href="#">
      Enzo
      </Link>
      
    </Typography>
      <Typography variant="title" color="inherit">
      année scolaire 2020/2021
      </Typography>
     
<Typography className="nav justify-content-end">
      <Link  className="nav-item" href="#">
      paramétrage <i className="fa fa-share" aria-hidden="true"></i>
      </Link>
      <Link className="nav-item" href="#">
      tableau du bord <i className="fa fa-share" aria-hidden="true"></i>
      </Link>
      <Link className="nav-item" href="#">
      Déconnexion <i className="fa fa-share" aria-hidden="true"></i>
      </Link>
    </Typography>
    </Toolbar>
  </AppBar>
  );
}



export default Header;