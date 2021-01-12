import React from "react";
import AppBar from "@material-ui/core/AppBar";
import LoginButton from "../../Components/LoginButton";
import LogoutButton from "../../Components/LogoutButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import HomeIcon from '@material-ui/icons/Home';
import { green } from '@material-ui/core/colors';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(12),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

function Menu() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid xs={12}>
          <AppBar>
          <Typography variant="h6" className={classes.root} align="left" >
                <Link href="#/" color="inherit" className={classes.paper}>
                {<HomeIcon fontSize="large"/>}Inicio
                </Link>
                <Link href="#/empleados" color="inherit" className={classes.paper} >
                  {<PersonPinIcon fontSize="large"/>}Empleados
                </Link>
                <Link href="#/incapacidades" color="inherit" className={classes.paper}>
                  {<LocalHospitalIcon fontSize="large"/>}Incapacidades
                </Link>
                <LoginButton />
                <LogoutButton />
              </Typography>

          </AppBar>
              
        </Grid>
      </Grid>
    </div>
  );
}

export default Menu;
