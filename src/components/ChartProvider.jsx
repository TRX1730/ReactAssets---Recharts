import { createContext, useContext, useState } from 'react'

const ChartContext = createContext()

export const useChart = () => {
  const context = useContext(ChartContext)
  if (!context) {
    throw new Error('useChart must be used within a ChartProvider')
  }
  return context
}

export const ChartProvider = ({ children, data }) => {
  const [chartData, setChartData] = useState(data || [])
  const [loading, setLoading] = useState(false)

  const updateChartData = (newData) => {
    setLoading(true)
    setTimeout(() => {
      setChartData(newData)
      setLoading(false)
    }, 500)
  }

  const addDataPoint = (newPoint) => {
    setChartData(prev => [...prev, newPoint])
  }

  const value = {
    chartData,
    loading,
    updateChartData,
    addDataPoint
  }

  return (
    <ChartContext.Provider value={value}>
      {children}
    </ChartContext.Provider>
  )
}