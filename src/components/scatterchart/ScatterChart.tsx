import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration, ScatterController, ChartTypeRegistry } from 'chart.js/auto';

interface DataPoint {
  x: number;
  y: number;
  label: string;
}

interface ScatterChartProps {
  data: DataPoint[];
}

const ScatterChart: React.FC<ScatterChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'scatter', DataPoint[], string> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy existing chart instance
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
              label: 'Scatter Chart',
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              x: {
                type: 'linear',
                position: 'bottom'
              },
              y: {
                type: 'linear',
                position: 'left'
              }
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Cleanup on unmount
      }
    };
  }, [data]);

  return <canvas ref={chartRef} style={{ height: '300px', maxWidth: '100%' }} />;
};

export default ScatterChart;