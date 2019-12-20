import React, { Component } from 'react';

import Chart from 'chart.js';


class Chart_Gyrotemp extends Component {


  constructor(props) {
    super(props);
    /*console.log('props at Chart_Gyrotemp');
    console.log(props);
    */
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
    })
  }

  componentDidUpdate() {

    console.log('normal procedure at gyrochart');
    this.props.chartvalue.map(d => d.data.time !== "null" ? (
      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        data: {
          labels: this.props.chartvalue.map(d => d.data.time.split(' ').slice(4, 5).join(' ')),
          datasets: [
            {
              label: 'Gyro X',
              data: this.props.chartvalue.map(d => d.data.GX),
              backgroundColor: "#2a37c7",
              fill: false,
              borderCapStyle: 'butt',
              borderColor: "#2a37c7",
              lineTension: 0.5,
            },
            {
              label: 'Gyro Y',
              data: this.props.chartvalue.map(d => d.data.GY),
              backgroundColor: "#1db340",
              fill: false,
              borderCapStyle: 'butt',
              borderColor: "#1db340",
              lineTension: 0.5,
            },
            {
              label: 'Gyro Z',
              data: this.props.chartvalue.map(d => d.data.GZ),
              backgroundColor: "#6e852e",
              fill: false,
              borderCapStyle: 'butt',
              borderColor: "#6e852e",
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
      })


    ) : (
        this.myChart = new Chart(this.chartRef.current, {
          type: 'line',
          data: {
            labels: this.props.chartvalue.map(d => d.data.time),
            datasets: [
              {
                label: 'Gyro X',
                data: this.props.chartvalue.map(d => d.data.GX),
                backgroundColor: "#2a37c7",
                fill: false,
                borderCapStyle: 'butt',
                borderColor: "#2a37c7",
                lineTension: 0.5,
              },
              {
                label: 'Gyro Y',
                data: this.props.chartvalue.map(d => d.data.GY),
                backgroundColor: "#1db340",
                fill: false,
                borderCapStyle: 'butt',
                borderColor: "#1db340",
                lineTension: 0.5,
              },
              {
                label: 'Gyro Z',
                data: this.props.chartvalue.map(d => d.data.GZ),
                backgroundColor: "#6e852e",
                fill: false,
                borderCapStyle: 'butt',
                borderColor: "#6e852e",
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
        })

      )
    )
  }
  //console.log("received data:", this.props);





  render() {
    return (
      <div class="container">
        <h4 align="center"> Gyroscope  </h4>
        <br></br>
        <canvas ref={this.chartRef} />

      </div>
    )
  }
}

export default Chart_Gyrotemp;