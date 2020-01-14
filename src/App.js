import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import DevTable from './components/DevTable';
import './App.css';



export default class App extends Component {

  constructor() {
    super()
    this.DBquery = this.DBquery.bind(this);
    this.state = {
      devlist: [],
      sel_value: '',
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

      this.setState({
        devlist: result1.data.getDeviceList,
      })
      /*
     console.log("check the getDeviceList output:" + this.state.devlist.map(d => d.dev_eui));
      
     // validate if  time is not null 
         if (this.state.repos[0].data.time == null) {
        console.log(' the time is null ');
      }
      else {
        console.log(' the time is fine ');
      }
      */

    } catch (err) {
      console.log('Something is not right, Probaly no data sent');
      console.error(err);
    }
  }


  render() {
    return (

      <React.Fragment>
        <div className="row">
          <div className="col-md-12">

            <DevTable
              rows={this.state.devlist}
            />

          </div>

        </div>

      </React.Fragment>



    )

  }
}


