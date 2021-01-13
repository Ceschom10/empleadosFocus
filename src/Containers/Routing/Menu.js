import React from "react";
import AppBar from "@material-ui/core/AppBar";
import LoginButton from "../../Components/LoginButton";
import LogoutButton from "../../Components/LogoutButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import HomeIcon from '@material-ui/icons/Home';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(14),
  },
  paper: {
    padding: theme.spacing(1),
  },
  fondo: {
    background: "SteelBlue"
  }
}));

function Menu() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1} >
        <Grid xs={12} sm={6}>
          <AppBar className={classes.fondo}>
          <Typography variant="h5" className={classes.root} align="left" >
                <Link href="#/" color="inherit" className={classes.paper}>
                Inicio{<HomeIcon />}
                </Link>
                <Link href="#/empleados" color="inherit" className={classes.paper} >
                  Empleados{<PersonPinIcon />}
                </Link>
                <Link href="#/incapacidades" color="inherit" className={classes.paper}>
                Incapacidades{<LocalHospitalIcon />}
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
