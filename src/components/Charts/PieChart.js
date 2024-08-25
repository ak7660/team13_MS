import React from 'react';
import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state using props.series if available, otherwise default to [44, 55, 13, 43, 22, 10]
    this.state = {
      series: props.series || [44, 55, 13, 43, 22],
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
        labels: ['Indian', 'Pakistani', 'Indonesian', 'Bangladeshi', 'Others'],
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

  componentDidUpdate(prevProps) {
    // Update state if the series prop changes
    if (prevProps.series !== this.props.series) {
      this.setState({
        series: this.props.series
      });
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart 
            options={this.state.options} 
            series={this.state.series} 
            type="pie" 
            width={380} 
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default PieChart;
