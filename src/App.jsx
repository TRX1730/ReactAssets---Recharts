import { useState } from 'react'
import { ChartProvider } from './components/ChartProvider'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import './App.css'

function App() {
  const [activeChart, setActiveChart] = useState('bar')

  const chartData = [
    { name: 'Jan', value: 400, sales: 2400 },
    { name: 'Feb', value: 300, sales: 1398 },
    { name: 'Mar', value: 200, sales: 9800 },
    { name: 'Apr', value: 278, sales: 3908 },
    { name: 'May', value: 189, sales: 4800 },
  ]

  return (
    <ChartProvider data={chartData}>
      <div className="app">
        <header className="app-header">
          <h1>Chart Provider Dashboard</h1>
          <nav className="chart-nav">
            <button 
              className={activeChart === 'bar' ? 'active' : ''}
              onClick={() => setActiveChart('bar')}
            >
              Bar Chart
            </button>
            <button 
              className={activeChart === 'line' ? 'active' : ''}
              onClick={() => setActiveChart('line')}
            >
              Line Chart
            </button>
            <button 
              className={activeChart === 'pie' ? 'active' : ''}
              onClick={() => setActiveChart('pie')}
            >
              Pie Chart
            </button>
          </nav>
        </header>

        <main className="chart-container">
          {activeChart === 'bar' && <BarChart />}
          {activeChart === 'line' && <LineChart />}
          {activeChart === 'pie' && <PieChart />}
        </main>
      </div>
    </ChartProvider>
  )
}

export default App