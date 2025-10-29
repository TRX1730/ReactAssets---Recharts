import { useChart } from './ChartProvider'
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const BarChart = () => {
  const { chartData, loading } = useChart()

  if (loading) {
    return <div className="chart-loading">Loading chart data...</div>
  }

  return (
    <div className="chart-wrapper">
      <h2>Bar Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ReBarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" name="Values" />
          <Bar dataKey="sales" fill="#82ca9d" name="Sales" />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChart