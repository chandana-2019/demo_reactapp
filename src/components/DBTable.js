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

  const [, setOpt] = React.useState('');
  const classes = useStyles();

  const handleChange = event => {
    console.log('Selected value at DB table is :', event.target.value);
    setOpt(event.target.value);
  };

  return (
    <div className={classes.tableWrapper}>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>

          <TableRow>
            <StyledTableCell>Device Name
            <form>
                <select value={props.rows.map(r => (r.dev_eui))}
                  onChange={handleChange}>
                  {props.rows.map(row => (
                    <option value={row.dev_eui}>{row.device_name} </option>
                  ))}
                </select>
              </form>
            </StyledTableCell>
            <StyledTableCell align="center">Device EUI
            <form>
                <select value={props.rows.map(r => (r.dev_eui))} onChange={handleChange}>
                  {props.rows.map(row => (
                    <option value={row.dev_eui}>{row.dev_eui} </option>
                  ))}
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

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}