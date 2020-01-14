import React, { Component } from 'react';

import Chart from 'chart.js';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: 350,
    height: 200,
    marginTop: 80,
    marginBottom: 10,
    marginleft: 30,
    //paddingLeft: 30,
    marginRight: 20,
    alignContent: "center"
  },

  title: {
    fontSize: 13,
  },
  pos: {
    marginBottom: 12,
  },
});

class Accelometer_Chart extends Component {


  constructor(props) {
    super(props);
    /*console.log('props :');
    console.log(props);
    */

    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
    })
  }

  componentDidUpdate() {


    console.log('normal procedure at Accelo chART');
    this.props.chartvalue.map(d => d.data.time !== "null" ? (



      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        data: {
          labels: this.props.chartvalue.map(d => d.data.time.split(' ').slice(4, 5).join(' ')),
          datasets: [
            {

              data: this.props.chartvalue.map(d => d.data.AX),
              backgroundColor: "#12CAD1",
              fill: false,
              borderCapStyle: 'butt',
              borderColor: "#12CAD1",
              lineTension: 0.5,
              label: 'Accelometer X',
            },
            {
              label: 'Accelometer Y',
              data: this.props.chartvalue.map(d => d.data.AY),
              backgroundColor: "#64bd80",
              fill: false,
              borderCapStyle: 'butt',
              borderColor: "#64bd80",
              lineTension: 0.5,
            },
            {
              label: 'Accelometer Z',
              data: this.props.chartvalue.map(d => d.data.AZ),
              backgroundColor: "#4a48b0",
              fill: false,
              borderCapStyle: 'butt',
              borderColor: "#4a48b0",
              lineTension: 0.5,
            }]
        },
        options: {
          fill: false,
          animation: {
            duration: 0
          }
        },
      }))
      :
      (
        this.myChart = new Chart(this.chartRef.current, {
          type: 'line',
          data: {
            labels: this.props.chartvalue.map(d => d.data.time),
            datasets: [
              {

                data: this.props.chartvalue.map(d => d.data.AX),
                backgroundColor: "#12CAD1",
                fill: false,
                borderCapStyle: 'butt',
                borderColor: "#12CAD1",
                lineTension: 0.5,
                label: 'Accelometer X',
              },
              {
                label: 'Accelometer Y',
                data: this.props.chartvalue.map(d => d.data.AY),
                backgroundColor: "#64bd80",
                fill: false,
                borderCapStyle: 'butt',
                borderColor: "#64bd80",
                lineTension: 0.5,
              },
              {
                label: 'Accelometer Z',
                data: this.props.chartvalue.map(d => d.data.AZ),
                backgroundColor: "#4a48b0",
                fill: false,
                borderCapStyle: 'butt',
                borderColor: "#4a48b0",
                lineTension: 0.5,
              }]
          },
          options: {
            fill: false,
            animation: {
              duration: 0
            }
          },
        }
        )
      )
    )
  }
  //console.log("received data:", this.props);





  render() {
    return (

      <div class="container">

        <Card className={useStyles.card}>
          <CardContent align-items="center">
            <h4 align="center"> Accelerometer  </h4>
            <br></br>
            <canvas ref={this.chartRef} />
          </CardContent>
        </Card>
      </div>

    )
  }
}

export default Accelometer_Chart;