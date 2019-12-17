import React, { Component } from 'react';

import Chart from 'chart.js';


class Accelometer_Chart extends Component {


  constructor(props) {
    super(props);
    console.log('props at Chart_insert');
    console.log(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
    })
  }

  componentDidUpdate() {
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
            backgroundColor: "#cc7ede",
            fill: false,
            borderCapStyle: 'butt',
            borderColor: "#cc7ede",
            lineTension: 0.5,
          },
          {
            label: 'Accelometer Z',
            data: this.props.chartvalue.map(d => d.data.AZ),
            backgroundColor: "#cc7e10",
            fill: false,
            borderCapStyle: 'butt',
            borderColor: "#cc7e10",
            lineTension: 0.5,
          }]
      },
      options: {
        fill: false,
        animation: {
          duration: 0
        }
      },
    });
    console.log("received data:", this.props);
  }




  render() {
    return (

      <div class="container">
        <h4 align="center"> Accelerometer data : </h4>
        <br></br>
        <canvas ref={this.chartRef} />

      </div>

    )
  }
}

export default Accelometer_Chart;