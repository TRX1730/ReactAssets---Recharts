import { useChart } from './ChartProvider'
import { LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const LineChart = () => {
  const { chartData, loading } = useChart()

  if (loading) {
    return <div className="chart-loading">Loading chart data...</div>
  }

  return (
    <div className="chart-wrapper">
      <h2>Line Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ReLineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} name="Values" />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" strokeWidth={2} name="Sales" />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChart