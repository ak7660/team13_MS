import React from 'react'
import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43, 22, 10],
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
          labels: ['Indian', 'Pakistani', 'Filipino', 'Indonesian', 'Bangladeshi', "Thai"],
          legend: {
            fontSize: '12px',
            position: 'bottom',
          },
          responsive: [{
            breakpoint: 400,
            options: {
              chart: {
                width: 200
              },
              legend: {
                fontSize: '10px',
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