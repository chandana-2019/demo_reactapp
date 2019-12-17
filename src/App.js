import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import DBTable from './components/DBTable';
import AccelometerChart from "./components/AccelometerChart"
import ChartGyrotemp from './components/ChartGyrotemp';
import TempCard from './components/TempCard';







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
                   GX
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
      console.log('lets check data inside chartdata');
      console.table(this.state.chartdata[0].data);
      console.table(JSON.stringify(this.state.chartdata[0]));



    } catch (err) {
      console.error(err);
    }
  }


  render() {
    let temps = []
    temps = this.state.chartdata.map(da => da.data.temp)
    console.log(temps);
    return (


      <React.Fragment>

        <div className="row">

          <div className="col-md-12">


            <DBTable rows={this.state.repos} />
          </div>
        </div>

        <div className="row">

          <div className="col-lg-3" id="temptext">


            <TempCard tempvalue={this.state.chartdata.map(da => da.data.temp)} />


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


