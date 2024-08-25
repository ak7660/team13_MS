import React from 'react';
import ReactApexChart from 'react-apexcharts';

class AgeBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Participants',
        data: [20, 12, 5, 8, 10, 8] // Example data for different age groups
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          width: 500,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['18-25', '26-35', '36-45', '46-55', '56-65', '66+'],
          title: {
            text: 'Age Groups'
          }
        },
        yaxis: {
          title: {
            text: 'Number of Participants'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return `${val} participants`;
            }
          }
        },
        legend: {
          fontSize: '10px', // Adjust the font size of the legend
          position: 'bottom'
        },
        responsive: [{
          breakpoint: 400,
          options: {
            chart: {
              width: 300
            },
            legend: {
              fontSize: '10px',
              position: 'bottom'
            }
          }
        }]
      }
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} width={380} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default AgeBarChart;
