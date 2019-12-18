import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';
//import TableContainer from '@material-ui/core/TableContainer';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,

  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    width: '100%',

  },
  tableWrapper: {
    maxHeight: '50%',

  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  return (
    <div className={classes.tableWrapper}>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>

          <TableRow>
            <StyledTableCell>Device Name
            <form>
                <select value={props.row}>
                  <option value="ce74b3a51b94c76b">LG-cloud</option>
                  <option value="b7c9e27d3035cdb">lg-connectivity-TEST</option>
                  <option value="d9ad826ed6e99f58">LoRa-Node-webos</option>
                </select>
              </form>
            </StyledTableCell>
            <StyledTableCell align="center">Device EUI
            <form>
                <select value={props.row}>
                  <option value="ce74b3a51b94c76b">ce74b3a51b94c76b</option>
                  <option value="b7c9e27d3035cdb">b7c9e27d3035cdb5</option>
                  <option value="d9ad826ed6e99f58">d9ad826ed6e99f58</option>
                </select>
              </form>
            </StyledTableCell>
            <StyledTableCell align="center">Received at</StyledTableCell>
            <StyledTableCell align="center">Data&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => (
            <StyledTableRow key={row.dev_eui}>
              <StyledTableCell component="th" scope="row">  {row.device_name}           </StyledTableCell>
              <StyledTableCell align="center">               {row.dev_eui}             </StyledTableCell>
              <StyledTableCell align="center">               {row.received_at}           </StyledTableCell>
              <StyledTableCell align="left">               {JSON.stringify(row.data)}  </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}