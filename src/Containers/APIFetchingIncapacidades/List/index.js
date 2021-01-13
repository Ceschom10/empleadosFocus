import React, { useCallback, useContext, useEffect } from "react";
import { db } from "../../../Firebase/firebase";
import RowIncapacidades from "./RowIncapacidades";
import { UsersContext } from "../../APIFetching/Context";
import { makeStyles } from "@material-ui/core";

import { withStyles, } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'SteelBlue',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 10,
  },
}))(TableCell);


const useStyles = makeStyles((theme) => ({
  
  button:{
      margin: theme.spacing(1),
      width: 110,
  },
}));


function ListIncapacidades() {
  const {
    incapacidades: [incapacidades, setIncapacidades],
    currentIncapacidades: [currentIncapacidades, setCurrentIncapacidades],
  } = useContext(UsersContext);

  const fetchUsers = useCallback(async () => {
    db.collection("incapacidades").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      docs.sort((a, b) =>
        a.codigo > b.codigo ? 1 : a.codigo < b.codigo ? -1 : 0
      );
      //console.log(docs);
      setIncapacidades(docs);
    });
  }, [setIncapacidades]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const classes = useStyles();

  return (
    <div className="App-box">
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cod.</StyledTableCell>
            <StyledTableCell >F. ingreso</StyledTableCell>
            <StyledTableCell >Unidad</StyledTableCell>
            <StyledTableCell >Doctor</StyledTableCell>
            <StyledTableCell >Inicio Inc</StyledTableCell>
            <StyledTableCell >Fin Inc</StyledTableCell>
            <StyledTableCell >Cobertura</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {incapacidades.map((incapacidad) => {
            //{console.log(users)}
            //{console.log(user);}
            return (
              <RowIncapacidades incapacidad={incapacidad} key={incapacidad.id}>
                {incapacidad}
              </RowIncapacidades>
            );
          })}
        </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}

export default ListIncapacidades;
