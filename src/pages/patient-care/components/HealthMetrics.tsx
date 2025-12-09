import Icon from '../../../components/AppIcon';
import { HealthMetric } from '../types';

interface HealthMetricsProps {
  metrics: HealthMetric[];
}

const HealthMetrics = ({ metrics }: HealthMetricsProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-success';
      case 'warning': return 'text-warning';
      case 'critical': return 'text-error';
      default: return 'text-text-secondary';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-card rounded-xl p-6 border border-border hover:shadow-soft transition-brand"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-2 rounded-lg ${
              metric.status === 'normal' ? 'bg-success/10' :
              metric.status === 'warning'? 'bg-warning/10' : 'bg-error/10'
            }`}>
              <Icon 
                name="Activity" 
                size={20} 
                color={`var(--color-${metric.status})`} 
              />
            </div>
            <Icon 
              name={getTrendIcon(metric.trend)} 
              size={20} 
              color="var(--color-text-secondary)" 
            />
          </div>

          <h4 className="text-text-secondary text-sm mb-2">
            {metric.name}
          </h4>

          <div className="flex items-baseline space-x-2 mb-2">
            <span className={`font-headline text-3xl font-bold ${getStatusColor(metric.status)}`}>
              {metric.value}
            </span>
            <span className="text-text-secondary text-sm">
              {metric.unit}
            </span>
          </div>

          <p className="text-xs text-text-secondary">
            Last updated: {metric.lastUpdated.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HealthMetrics;