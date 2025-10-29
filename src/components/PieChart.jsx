import { useChart } from './ChartProvider'
import { PieChart as RePieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const PieChart = () => {
  const { chartData, loading } = useChart()

  if (loading) {
    return <div className="chart-loading">Loading chart data...</div>
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  return (
    <div className="chart-wrapper">
      <h2>Pie Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RePieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChart