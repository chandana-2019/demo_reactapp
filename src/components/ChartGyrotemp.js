import React, { Component } from 'react';

import Chart from 'chart.js';


class Chart_Gyrotemp extends Component {


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
            label: 'Gyro X',
            data: this.props.chartvalue.map(d => d.data.GX),
            backgroundColor: "#2a37c7",
            //fill: false,
            lineTension: 0.5,
          },
          {
            label: 'Gyro Y',
            data: this.props.chartvalue.map(d => d.data.GY),
            backgroundColor: "#1db340",
            //fill: false,
            lineTension: 0.5,
          },
        ]
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
        <br></br>
        <h4> Gyroscope data : </h4>
        <canvas ref={this.chartRef} />
      </div>
    )
  }
}

export default Chart_Gyrotemp;