import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({lineData, borderColor}) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            title: {
                display: true,
                text: '',
            },
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    stepSize: 10
                }
            }
        }
    };
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
    const data = {
        labels,
        datasets: [
            {
                data: lineData,
                borderColor: borderColor,
                backgroundColor: borderColor,
                yAxisID: 'y',
            }
        ],
    };
    return (
        <Line options={options} data={data} />
    ) 
}

LineChart.propTypes = {
    lineData: PropTypes.array,
    borderColor: PropTypes.string
}

export default LineChart;