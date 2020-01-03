import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//merge the matrial UI select form inside DBtable 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#9e9e9e',
        color: theme.palette.common.black,

    },
    body: {
        fontSize: 12,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.common.cyan,
            color: theme.palette.common.black,

        },
    },
}))(TableRow);

const useStyles = makeStyles(
    (theme => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            // backgroundColor: theme.palette.common.white,

        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    })),
    {
        root: {
            width: '100%',

        },
        tableWrapper: {
            maxHeight: '50%',

        },
    });

export default function CustomizedTables(props) {
    const classes = useStyles();
    const [dev_eui, setAge] = React.useState('');

    //const inputLabel = React.useRef(null);
    const handleChange = event => {
        console.log('Selected value:', event.target.value);
        setAge(event.target.value);
    };


    return (
        /*
         console.log('props at db table is ' + props),
         console.table(props),
        */


        <div className={classes.tableWrapper}>

            <Table className={classes.table} aria-label="customized table">
                <TableHead>

                    <TableRow>

                        <StyledTableCell >
                            <div>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-helper-label"><b>Device Name</b></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label1"
                                        id="demo-simple-select-helper1"
                                        value={dev_eui}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'ce74b3a51b94c76b'}>LG-cloud</MenuItem>
                                        <MenuItem value={'b7c9e27d3035cdb'}>lg-connectivity-TEST</MenuItem>
                                        <MenuItem value={'d9ad826ed6e99f58'}>LoRa-Node-webos</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </StyledTableCell>

                        <StyledTableCell>
                            <div>

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-helper-label"><b>Device EUI</b></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={dev_eui}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'ce74b3a51b94c76b'}>ce74b3a51b94c76b</MenuItem>
                                        <MenuItem value={'b7c9e27d3035cdb'}>b7c9e27d3035cdb5</MenuItem>
                                        <MenuItem value={'d9ad826ed6e99f58'}>d9ad826ed6e99f58</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </StyledTableCell>

                        <StyledTableCell align="center"><b>Received at</b></StyledTableCell>
                        <StyledTableCell align="center"><b>Data&nbsp;</b></StyledTableCell>
                        <StyledTableCell align="center"><b>Device Data</b></StyledTableCell>

                    </TableRow>
                </TableHead>




                <TableBody>
                    {
                        props.rows.map(row => row.data.time !== "null" ? (
                            //console.table('sensor  Data  is '),
                            //console.table('sensor  TIME is ' + row.data.time),



                            <StyledTableRow key={row.dev_eui} >

                                <StyledTableCell component="th" scope="row" align="center"> {row.device_name}           </StyledTableCell>
                                <StyledTableCell align="center"> {row.dev_eui} </StyledTableCell>
                                <StyledTableCell align="center"> {row.received_at.split(' ').slice(0, 5).join(' ')} </StyledTableCell>
                                <StyledTableCell align="left"> {JSON.stringify(row.data)} </StyledTableCell>

                                <StyledTableCell alignContents="center">

                                    <li> Device Time : {row.data.time} </li>
                                    <li>Temp:  {row.data.temp}  </li>
                                    <li> GX :  {row.data.GX} </li>
                                    <li> GY :   {row.data.GY}  </li>
                                    <li> GZ :    {row.data.GZ} </li>
                                    <li> AX : {row.data.AX}  </li>
                                    <li> AY : {row.data.AY}  </li>
                                    <li> AZ :  {row.data.AZ}  </li>
                                    <li>__typename : {row.data.__typename}  </li>
                                </StyledTableCell>
                            </StyledTableRow>
                        ) : (
                                <StyledTableRow key={row.dev_eui} >

                                    <StyledTableCell component="th" scope="row" align="center"> {row.device_name}           </StyledTableCell>
                                    <StyledTableCell align="center"> {row.dev_eui} </StyledTableCell>
                                    <StyledTableCell align="center"> {row.received_at} </StyledTableCell>
                                    <StyledTableCell align="left"> {JSON.stringify(row.data)} </StyledTableCell>

                                    <StyledTableCell alignContents="center">

                                        <li> Device Time :  Device Time is null </li>
                                        <li>Temp:  null  </li>
                                        <li> GX : null </li>
                                        <li> GY : null  </li>
                                        <li> GZ : null </li>
                                        <li> AX :null  </li>
                                        <li> AY : null  </li>
                                        <li> AZ : null </li>
                                        <li>__typename : {row.data.__typename}  </li>
                                    </StyledTableCell>
                                </StyledTableRow>

                            )






                        )
                    }


                </TableBody>


            </Table>

        </div>
    )

}