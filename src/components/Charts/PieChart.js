import React from 'react'
import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43, 22],
        options: {
          plotOptions: {
            pie: {
              customScale: 1.0
            },
            

          },
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 400,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380}/>
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

export default PieChart;