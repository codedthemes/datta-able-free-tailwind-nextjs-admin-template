'use client';

// next
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// chart-options
const chartOptions = {
  series: [{ name: 'Market Days ', data: [10, 60, 45, 72, 45, 86], color: '#fff' }],
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 6,
      hover: {
        size: 5
      }
    },
    stroke: {
      curve: 'straight',
      width: 6
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    tooltip: {
      x: {
        show: false
      },
      marker: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        style: {
          colors: '#fff'
        }
      }
    }
  }
};

// ==============================|| DEFAULT - EARNING CHART ||============================== //

export default function EarningChart() {
  return (
    <div className="card bg-primary-500 mb-4">
      <div className="card-header !border-b-0">
        <h5 className="text-white">Earnings</h5>
      </div>
      <div className="card-body" style={{ padding: '0 25px' }}>
        <div className="earning-text mb-4">
          <h3 className="mb-3 font-light text-white">
            $ 4295.36 <i className="ph ph-arrow-up"></i>
          </h3>
          <span className="block text-white uppercase">Total Earnings</span>
        </div>
        <div className="WidgetlineChart2 ChartShadow">
          <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="line" height={210} />
        </div>
      </div>
    </div>
  );
}
