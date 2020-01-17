import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AccelometerChart from "./AccelometerChart"
import ChartGyrotemp from './ChartGyrotemp';
import TempCard from './TempCard';


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



class DevTable extends Component {


    constructor(props) {
        super(props);
        this.DBquery = this.DBquery.bind(this);
        this.state = {
            repos: [],
            sel_value: 'ce74b3a51b94c76b',

        }
    }

    componentDidMount() {
        this.DBquery();
        setInterval(this.DBquery, 5000); // runs every 5 seconds.

    }




    async DBquery() {
        const client = new ApolloClient({ uri: 'https://azure-lora-api.azurewebsites.net/graphql?code=7aFl/fgJ3Iq0tXK8lqQbccX62yh91ETs0NvEoxscLgc/SC6WOWg3hA==', });
        try {
            let result2 = await client.query({
                query: gql`
                    {
                      getDeviceUplingData(dev_eui:"${this.state.sel_value}",limit:5){
                        received_at
                         dev_eui
                         device_name
                         sensor_code
                         data{
                           time
                           temp
                           GX
                           GY
                           GZ
                           AX
                           AY
                           AZ
                         }
                       }
                                 }`
            });

            this.setState({

                repos: result2.data.getDeviceUplingData,


            })

            //console.table("check the data with this query output:" + this.state.repos);

        } catch (err) {
            // console.log('Something is not right in second query , Probaly no data sent');
            console.error(err);

        }
    }

    handleChange = event => {
        const newValue = event.target.value
        this.setState({ sel_value: newValue })
        console.log('Selected value is :', newValue);
    };

    //datemod = new Date(unix_timestamp * 1000),




    render() {
        return (


            <React.Fragment>

                <div className={useStyles.tableWrapper}>


                    <Table className={useStyles.table} aria-label="customized table">
                        <TableHead>

                            <TableRow>

                                <StyledTableCell>
                                    <div>
                                        <FormControl className={useStyles.formControl}>
                                            <InputLabel id="demo-simple-select-helper-label"><b>Device Name</b></InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label1"
                                                id="demo-simple-select-helper1"
                                                value={this.state.sel_value}
                                                onChange={this.handleChange}
                                            >
                                                {this.props.rows.map(row => (
                                                    <MenuItem value={row.dev_eui}>{row.device_name}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </StyledTableCell>

                                <StyledTableCell>
                                    <div>

                                        <FormControl className={useStyles.formControl}>
                                            <InputLabel id="demo-simple-select-helper-label"><b>Device EUI</b></InputLabel>

                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"

                                                value={this.state.sel_value}
                                                onChange={this.handleChange}
                                            >

                                                {this.props.rows.map(row => (
                                                    <MenuItem value={row.dev_eui}>{row.dev_eui}</MenuItem>
                                                ))}
                                            </Select>

                                        </FormControl>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center"><b>Received at</b></StyledTableCell>
                                <StyledTableCell align="center"><b>Data</b></StyledTableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {

                                this.state.repos.map(row => (

                                    <StyledTableRow key={this.handleChange} >

                                        <StyledTableCell component="th" scope="row" align="center"> {row.device_name}           </StyledTableCell>
                                        <StyledTableCell align="center"> {row.dev_eui} </StyledTableCell>
                                        <StyledTableCell align="center"> {(new Date(parseInt(row.received_at))).toLocaleString()} </StyledTableCell>
                                        <StyledTableCell align="left"> {JSON.stringify(row.data)} </StyledTableCell>

                                    </StyledTableRow>
                                )
                                )

                            }
                            {/* <StyledTableRow  >
                                <StyledTableCell align="center"> {Date(parseInt(this.state.repos[0].received_at) + 19800 * 1000)} </StyledTableCell>
                                <StyledTableCell align="center"> {Date(parseInt(this.state.repos[1].received_at) + 19800 * 1000)} </StyledTableCell>
                            </StyledTableRow> */}


                        </TableBody>


                    </Table>

                </div>

                <div className="row">

                    <div className="col-lg-4">


                        <ChartGyrotemp chartvalue={this.state.repos} title={"Time"} color="#70CAD1" />
                    </div>

                    <div className="col-lg-4" >
                        <TempCard align-items="center" tempvalue={this.state.repos.map(da => da.data.temp)} />
                    </div>

                    <div className="col-lg-4" id="acc">
                        <AccelometerChart chartvalue={this.state.repos} title={"Time"} color="#70CAD1" />
                    </div>

                </div>
            </React.Fragment >
        )
    }
}

export default DevTable;