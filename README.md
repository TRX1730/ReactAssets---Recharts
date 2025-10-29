
---

# 📊 React SVG Charts

A lightweight chart collection built with **pure React + SVG**, featuring Bar, Line, and Pie charts — fully customizable and dependency-free.

---

## 🚀 Features

✅ **3 Chart Types** — Bar, Line, and Pie charts
✅ **Custom Colors** — Fully customizable styling
✅ **Responsive Design** — Works on all devices
✅ **No Dependencies** — Pure SVG + CSS (no external libraries)
✅ **Easy Data Format** — Simple array of objects
✅ **Smooth Animations** — CSS transitions for better UX
✅ **Interactive** — Hover effects and visual feedback
✅ **TypeScript Ready** — Easy to add types

---

## 🧩 Components

```
src/
├── components/
│   ├── ChartProvider.jsx
│   ├── BarChart.jsx
│   ├── LineChart.jsx
│   └── PieChart.jsx
```

### Import Example

```jsx
import { ChartProvider } from './components/ChartProvider';
import { BarChart, LineChart, PieChart } from './components';
```

---

## ⚙️ Usage Example

```jsx
function Dashboard() {
  const salesData = [
    { label: 'Jan', value: 120 },
    { label: 'Feb', value: 190 },
    { label: 'Mar', value: 300 }
  ];

  return (
    <ChartProvider>
      <BarChart data={salesData} title="Sales Performance" />
      <LineChart data={salesData} title="Revenue Trend" />
      <PieChart data={salesData} title="Market Share" />
    </ChartProvider>
  );
}
```

---

## 📊 Chart Types

### **Bar Chart**

Perfect for comparing categories and values.

```jsx
<BarChart
  data={data}
  title="Sales Performance"
  options={{ colors: ['#3b82f6', '#ef4444', '#10b981'] }}
/>
```

---

### **Line Chart**

Ideal for showing trends over time.

```jsx
<LineChart
  data={data}
  title="Revenue Trend"
  options={{ color: '#8b5cf6' }}
/>
```

---

### **Pie Chart**

Great for showing proportions and percentages.

```jsx
<PieChart
  data={data}
  title="Market Share"
  options={{ colors: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'] }}
/>
```

---

## 🛠️ API Reference

### **Data Format**

All charts use the same simple data format:

```js
const data = [
  { label: 'Category 1', value: 100 },
  { label: 'Category 2', value: 200 },
  { label: 'Category 3', value: 150 }
];
```

### **Chart Props**

| Prop      | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| `data`    | Array  | Chart data (required)            |
| `title`   | String | Chart title (optional)           |
| `options` | Object | Customization options (optional) |

### **Options**

| Option   | Type   | Description                   |
| -------- | ------ | ----------------------------- |
| `colors` | Array  | Custom colors for bars/slices |
| `color`  | String | Single color for line charts  |
| `label`  | String | Dataset label                 |

---

## 🎨 Customization Examples

**Custom Colors:**

```jsx
<BarChart
  data={salesData}
  options={{
    colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
  }}
/>
```

**Company Branding:**

```jsx
<LineChart
  data={revenueData}
  options={{ color: '#your-brand-color' }}
/>
```

---

## 📈 Real-World Examples

### **Sales Dashboard**

```jsx
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
    <ChartProvider>
      <BarChart data={monthlySales} title="Monthly Sales" />
      <PieChart data={productCategories} title="Product Share" />
    </ChartProvider>
  );
}
```

---

### **Analytics Dashboard**

```jsx
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
```

---

## 🔧 Advanced Usage

### **Dynamic Data from API**

```jsx
function AnalyticsChart() {
  const { data: apiData, loading } = useApi('/api/analytics');

  if (loading) return <p>Loading chart data...</p>;

  return <LineChart data={apiData} title="API Analytics" />;
}
```

---

### **Multiple Charts Grid**

Combine multiple charts easily:

```jsx
<ChartProvider>
  <BarChart data={salesData} title="Sales" />
  <LineChart data={trendData} title="Revenue" />
  <PieChart data={shareData} title="Market Share" />
</ChartProvider>
```

---

## 🎨 Styling Tips

### **Custom Container Styling**

```css
.chart-container {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
```

### **Dark Theme Example**

```css
.dark .chart-container {
  background-color: #1f2937;
  color: #f9fafb;
}
```

---

## 📱 Mobile Responsive

Charts automatically adjust to container size.
For the best mobile experience, wrap charts in responsive containers.

---

### 🧠 Summary

* **Lightweight**: No external dependencies
* **Customizable**: Colors, titles, animations
* **Reusable**: Works with any data array
* **Pure SVG**: No canvas or external libs
