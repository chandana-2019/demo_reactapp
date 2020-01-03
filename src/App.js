import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import DBTable from './components/DBTable';
import SelectformTable from './components/SelectformTable';
import AccelometerChart from "./components/AccelometerChart"
import ChartGyrotemp from './components/ChartGyrotemp';
import TempCard from './components/TempCard';
//import TestSelectable from './components/TestSelectable';
import './App.css';


const client = new ApolloClient({ uri: 'https://azure-lora-api.azurewebsites.net/graphql?code=7aFl/fgJ3Iq0tXK8lqQbccX62yh91ETs0NvEoxscLgc/SC6WOWg3hA==', });





export default class App extends Component {


  constructor() {
    super()
    this.DBquery = this.DBquery.bind(this);
    this.state = {
      repos: [],
      chartdata: [],
      devlist: [],

    }
  }


  componentDidMount() {
    this.DBquery();
    setInterval(this.DBquery, 5000); // runs every 5 seconds.
  }

  async DBquery() {
    const client = new ApolloClient({ uri: 'https://azure-lora-api.azurewebsites.net/graphql?code=7aFl/fgJ3Iq0tXK8lqQbccX62yh91ETs0NvEoxscLgc/SC6WOWg3hA==', });
    try {
      let result1 = await client.query({
        query: gql`
        {
          getDeviceList{
                      
            dev_eui
            device_name
           }
            }`

      });
      let result2 = await client.query({
        query: gql`
            {
              getDeviceUplingData(dev_eui:"${result1.data.getDeviceList[0].dev_eui}",limit:5){
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
        devlist: result1.data.getDeviceList,
        repos: result2.data.getDeviceUplingData,
        chartdata: result2.data.getDeviceUplingData,


      })
      console.log("whats going on at query o/p:" + result1.data.getDeviceList.map(d => d.dev_eui));
      console.log("selecting  lg cloud at query o/p:" + result1.data.getDeviceList[0].dev_eui);
      //console.log("check the getDeviceList output:" + this.state.devlist.map(d => d.dev_eui));
      // console.log("check the getDeviceList output:" + this.state.devlist.map(d => d.device_name));
      console.table(this.state.devlist);
      /*
      console.log(typeof this.state.repos[0].dev_eui);
      console.log("below is the typeof device eui :" + this.state.repos[0].dev_eui);
      console.log(typeof this.state.repos[0].dev_eui);
      console.log('data at repos');
      console.log(this.state.repos);
      console.log(' check type of time data ');
      console.log(typeof this.state.repos[0].data.time);
      */
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
    /*
    console.log(' check repos ,later map it  ');
    console.log(this.state.repos);
    */

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
            < DBTable rows={this.state.devlist} />
          </div>

        </div>

        <div className="row">

          <div className="col-lg-4">

            <ChartGyrotemp chartvalue={this.state.chartdata} title={"Time"} color="#70CAD1" />
          </div>

          <div className="col-lg-4" >


            <TempCard align-items="center" tempvalue={this.state.chartdata.map(da => da.data.temp)} />


          </div>



          <div className="col-lg-4" id="acc">
            <AccelometerChart chartvalue={this.state.chartdata} title={"Time"} color="#70CAD1" />
          </div>

        </div>


      </React.Fragment>



    )

  }
}


