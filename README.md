src/
├── components/
│   ├── ChartProvider.jsx
│   ├── BarChart.jsx
│   ├── LineChart.jsx
│   └── PieChart.jsx


import { ChartProvider } from './components/ChartProvider';

function App() {
  return (
    <ChartProvider>
      <YourApp />
    </ChartProvider>
  );
}



import { BarChart, LineChart, PieChart } from './components';

function Dashboard() {
  const salesData = [
    { label: 'Jan', value: 120 },
    { label: 'Feb', value: 190 },
    { label: 'Mar', value: 300 }
  ];

  return (
    <div>
      <BarChart data={salesData} title="Monthly Sales" />
      <LineChart data={salesData} title="Sales Trend" />
    </div>
  );
}

🎯 Features
✅ 3 Chart Types - Bar, Line, and Pie charts
✅ Custom Colors - Fully customizable styling
✅ Responsive Design - Works on all devices
✅ No Dependencies - Pure SVG + CSS (no external libraries)
✅ Easy Data Format - Simple array of objects
✅ Smooth Animations - CSS transitions for better UX
✅ Interactive - Hover effects and visual feedback
✅ TypeScript Ready - Easy to add types

Bar Chart
Perfect for comparing categories and values


<BarChart 
  data={data} 
  title="Sales Performance"
  options={{
    colors: ['#3b82f6', '#ef4444', '#10b981']
  }}
/>

Line Chart
Ideal for showing trends over time


<LineChart 
  data={data}
  title="Revenue Trend" 
  options={{
    color: '#8b5cf6'
  }}
/>
Pie Chart
Great for showing proportions and percentages


<PieChart 
  data={data}
  title="Market Share"
  options={{
    colors: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b']
  }}
/>

🛠️ API Reference
Data Format
All charts use the same simple data format:

javascript
const data = [
  { label: 'Category 1', value: 100 },
  { label: 'Category 2', value: 200 },
  { label: 'Category 3', value: 150 }
];
Chart Props
data (Array) - Chart data (required)

title (String) - Chart title (optional)

options (Object) - Customization options (optional)

Options
colors (Array) - Custom colors for bars/slices

color (String) - Single color for line charts

label (String) - Dataset label


🎨 Customization Examples
Custom Colors:

<BarChart 
  data={salesData}
  options={{
    colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
  }}
/>
Company Branding:

<LineChart 
  data={revenueData}
  options={{
    color: '#your-brand-color'
  }}
/>



📊 Real-World Examples
Sales Dashboard:
function SalesDashboard() {
  const monthlySales = [
    { label: 'Jan', value: 12000 },
    { label: 'Feb', value: 19000 },
    { label: 'Mar', value: 15000 },
    { label: 'Apr', value: 22000 }
  ];

  const productCategories = [
    { label: 'Electronics', value: 45 },
    { label: 'Clothing', value: 25 },
    { label: 'Books', value: 15 },
    { label: 'Other', value: 15 }
  ];

  return (
    <div>
      <BarChart data={monthlySales} title="Monthly Sales" />
      <PieChart data={productCategories} title="Product Categories" />
    </div>
  );
}
Analytics Dashboard:

function AnalyticsDashboard() {
  const websiteTraffic = [
    { label: 'Mon', value: 1200 },
    { label: 'Tue', value: 1900 },
    { label: 'Wed', value: 1500 },
    { label: 'Thu', value: 2200 },
    { label: 'Fri', value: 1800 }
  ];

  return (
    <LineChart 
      data={websiteTraffic} 
      title="Weekly Traffic"
      options={{ color: '#10b981' }}
    />
  );
}


🔧 Advanced Usage
Dynamic Data from API:


function AnalyticsChart() {
  const { data: apiData, loading } = useApi('/api/analytics');
  
  if (loading) return <div>Loading chart data...</div>;
  
  return (
    <BarChart 
      data={apiData} 
      title="Real-time Analytics"
    />
  );
}


Multiple Charts Grid:

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px'
}}>
  <BarChart data={salesData} title="Sales" />
  <LineChart data={trendData} title="Trends" />
  <PieChart data={categoryData} title="Categories" />
</div>

🎨 Styling Tips
Custom Container Styling:

<div style={{ maxWidth: '500px', margin: '0 auto' }}>
  <BarChart data={data} title="Custom Sized Chart" />
</div>
Dark Theme:

<div style={{ backgroundColor: '#1f2937', padding: '20px' }}>
  <LineChart 
    data={data} 
    title="Dark Theme Chart"
  />
</div>

    
📱 Mobile Responsive
Charts automatically adjust to container size. For best mobile experience:


<div style={{ maxWidth: '100%', overflowX: 'auto' }}>
  <BarChart data={data} title="Mobile Friendly" />
</div>
