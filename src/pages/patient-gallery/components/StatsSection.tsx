import Icon from '../../../components/AppIcon';

interface StatsSectionProps {
  totalTransformations: number;
  averageConfidence: number;
  procedureCount: number;
}

const StatsSection = ({ totalTransformations, averageConfidence, procedureCount }: StatsSectionProps) => {
  const stats = [
    {
      icon: 'Users',
      value: totalTransformations.toString(),
      label: 'Successful Transformations',
      color: 'text-primary'
    },
    {
      icon: 'TrendingUp',
      value: `${averageConfidence}/10`,
      label: 'Average Confidence Rating',
      color: 'text-success'
    },
    {
      icon: 'Sparkles',
      value: procedureCount.toString(),
      label: 'Different Procedures',
      color: 'text-accent'
    },
    {
      icon: 'Award',
      value: '98%',
      label: 'Patient Satisfaction',
      color: 'text-warning'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-surface rounded-2xl p-6 shadow-soft hover-lift"
        >
          <div className={`w-12 h-12 rounded-xl bg-gradient-rose flex items-center justify-center mb-4`}>
            <Icon name={stat.icon as any} size={24} className="text-primary" />
          </div>
          <div className="font-headline text-3xl font-bold text-text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-text-secondary">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;