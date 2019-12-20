import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
//import DBTable from './components/DBTable';
import SelectformTable from './components/SelectformTable';
import AccelometerChart from "./components/AccelometerChart"
import ChartGyrotemp from './components/ChartGyrotemp';
import TempCard from './components/TempCard';
//import TestSelectable from './components/TestSelectable';






import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.DBquery = this.DBquery.bind(this);
    this.state = {
      repos: [],
      chartdata: [],
      dateString: []

    }
  }


  componentDidMount() {
    this.DBquery();
    setInterval(this.DBquery, 5000); // runs every 5 seconds.
  }

  async DBquery() {
    const client = new ApolloClient({ uri: 'https://azure-lora-api.azurewebsites.net/graphql?code=7aFl/fgJ3Iq0tXK8lqQbccX62yh91ETs0NvEoxscLgc/SC6WOWg3hA==', });
    try {
      let result = await client.query({
        query: gql`
            {
              getDeviceUplingData(dev_eui:"ce74b3a51b94c76b",limit:5){
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
      })



      this.setState({

        repos: result.data.getDeviceUplingData,
        chartdata: result.data.getDeviceUplingData,


      })
      console.log('data at repos');
      console.log(this.state.repos);
      console.log(' check type of time data ');
      console.log(typeof this.state.repos[0].data.time);
      if (this.state.repos[0].data.time == null) {
        console.log(' the time is null ');
      }
      else {
        console.log(' the time is fine ');
      }
      /* if (this.state.repos[0].data[0].time == null) {
         console.log(' the time is null ,dont proceed now ');
         console.log(typeof this.state.repos[0].data[0].time);
       }
       

      console.log(' check data ');
      console.table(this.state.chartdata[0].data);

*/




    } catch (err) {
      console.log('Something is not right, Probaly no data sent');
      console.error(err);
    }
  }


  render() {
    console.log(' check repos ,later map it  ');
    console.log(this.state.repos);

    /*
    props.rows.map(row => (
    if(this.props.schema.collectionName.length < 0)
      if (props.rows[0].data.time == null)

      */

    let temps = []
    temps = this.state.chartdata.map(da => da.data.temp)
    //console.log(temps);
    return (


      <React.Fragment>

        <div className="row">

          <div className="col-md-12">



            <SelectformTable rows={this.state.repos} />
          </div>
        </div>

        <div className="row">

          <div className="col-lg-4" id="temptext">


            <TempCard align-items="center" tempvalue={this.state.chartdata.map(da => da.data.temp)} />


          </div>

          <div className="col-lg-4">
            <ChartGyrotemp chartvalue={this.state.chartdata} title={"Time"} color="#70CAD1" />
          </div>

          <div className="col-lg-4" id="acc">
            <AccelometerChart chartvalue={this.state.chartdata} title={"Time"} color="#70CAD1" />
          </div>




        </div>


      </React.Fragment>



    )

  }
}


