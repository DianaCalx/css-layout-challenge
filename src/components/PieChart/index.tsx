import { data } from '../../data';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { PieContent } from './PieChartComponents'
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  return (
    <PieContent>
      <Doughnut data={data}/>
    </PieContent>
  )
}

export default PieChart