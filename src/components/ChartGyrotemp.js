import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Chart from 'chart.js';

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


    this.props.chartvalue.map(d => d.data.time !== "null" ? (
      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        data: {
          labels: this.props.chartvalue.map(d => (new Date(parseInt(d.data.time * 1000))).toLocaleString()),//(new Date(parseInt(d.data.time))).toLocaleString()
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
          scales: {
            xAxes: [
              {

                ticks: {
                  reverse: true,
                },

              }
            ]
          },
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
            scales: {
              xAxes: [
                {

                  ticks: {
                    reverse: true,
                  },

                }
              ]
            },
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

        <Card className={useStyles.card}>
          <CardContent align-items="center">
            <h4 align="center"> Gyroscope  </h4>
            <br></br>
            <canvas ref={this.chartRef} />

          </CardContent>
        </Card>

      </div >
    )
  }
}

export default Chart_Gyrotemp;