import Icon from '../../../components/AppIcon';
import { RecoveryMilestone } from '../types';

interface RecoveryTimelineProps {
  milestones: RecoveryMilestone[];
}

const RecoveryTimeline = ({ milestones }: RecoveryTimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-rose" />

      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative pl-20">
            <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center border-4 border-background transition-brand ${
              milestone.status === 'completed' 
                ? 'bg-success shadow-soft' 
                : milestone.status === 'current' ?'bg-primary shadow-brand animate-pulse-soft' :'bg-surface'
            }`}>
              <span className={`font-headline text-lg font-semibold ${
                milestone.status === 'completed' || milestone.status === 'current'
                  ? 'text-white' :'text-text-secondary'
              }`}>
                {milestone.day}
              </span>
            </div>

            <div className={`bg-card rounded-xl p-6 border-2 transition-brand ${
              milestone.status === 'current' ?'border-primary shadow-brand' :'border-border'
            }`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
                    Day {milestone.day}: {milestone.title}
                  </h3>
                  <p className="text-text-secondary">
                    {milestone.description}
                  </p>
                </div>
                {milestone.status === 'completed' && (
                  <div className="bg-success/10 p-2 rounded-lg">
                    <Icon name="CheckCircle2" size={24} color="var(--color-success)" />
                  </div>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <h4 className="font-medium text-text-primary text-sm mb-2">
                  Activities & Guidelines:
                </h4>
                {milestone.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="flex items-start space-x-2">
                    <Icon 
                      name="Circle" 
                      size={8} 
                      color="var(--color-primary)" 
                      className="mt-1.5" 
                    />
                    <span className="text-sm text-text-secondary flex-1">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecoveryTimeline;