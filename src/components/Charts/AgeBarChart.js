import React from 'react';
import ReactApexChart from 'react-apexcharts';

class AgeBarChart extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state using props.series and props.categories if available, otherwise default to sample data
    this.state = {
      series: [{
        name: 'Participants',
        data: props.series || [10, 20, 30, 40, 50, 60] // Default sample data
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
          }
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
          categories: props.categories || ['18-25', '26-35', '36-45', '46-55', '56-65', '66+'], // Default categories
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
        colors: ['#f2d069'],
        legend: {
          fontSize: '10px',
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

  componentDidUpdate(prevProps) {
    // Update state if the series or categories props change
    if (prevProps.series !== this.props.series) {
      console.log('Series updated:', this.props.series);
      this.setState({
        series: [{
          name: 'Participants',
          data: this.props.series
        }]
      });
    }
    if (prevProps.categories !== this.props.categories) {
      console.log('Categories updated:', this.props.categories);
      this.setState(prevState => ({
        options: {
          ...prevState.options,
          xaxis: {
            ...prevState.options.xaxis,
            categories: this.props.categories
          }
        }
      }));
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart 
            options={this.state.options} 
            series={this.state.series} 
            type="bar" 
            height={300} 
            width={380} 
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default AgeBarChart;
