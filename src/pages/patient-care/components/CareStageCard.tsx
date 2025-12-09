import { useState } from 'react';
import Icon from '../../../components/AppIcon';

import { CareStage } from '../types';

interface CareStageCardProps {
  stage: CareStage;
  isActive: boolean;
  onTaskToggle: (stageId: string, taskId: string) => void;
}

const CareStageCard = ({ stage, isActive, onTaskToggle }: CareStageCardProps) => {
  const [isExpanded, setIsExpanded] = useState(isActive);

  const completedTasks = stage.tasks.filter(task => task.completed).length;
  const progress = (completedTasks / stage.tasks.length) * 100;

  return (
    <div className={`bg-card rounded-xl border-2 transition-brand ${
      isActive ? 'border-primary shadow-brand' : 'border-border'
    }`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-start justify-between hover:bg-secondary/5 transition-brand rounded-t-xl"
      >
        <div className="flex items-start space-x-4 flex-1">
          <div className={`p-3 rounded-lg ${
            isActive ? 'bg-primary/10' : 'bg-secondary/10'
          }`}>
            <Icon 
              name={stage.icon} 
              size={24} 
              color={isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)'} 
            />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
              {stage.title}
            </h3>
            <p className="text-text-secondary text-sm mb-3">
              {stage.description}
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center text-text-secondary">
                <Icon name="Clock" size={16} className="mr-1" />
                {stage.duration}
              </span>
              <span className="text-primary font-medium">
                {completedTasks}/{stage.tasks.length} tasks completed
              </span>
            </div>
          </div>
        </div>
        <Icon 
          name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
          size={24} 
          color="var(--color-text-secondary)" 
        />
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-4">
          <div className="w-full bg-secondary/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="space-y-3">
            {stage.tasks.map((task) => (
              <div
                key={task.id}
                className={`p-4 rounded-lg border transition-brand ${
                  task.completed 
                    ? 'bg-success/5 border-success/20' :'bg-surface border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => onTaskToggle(stage.id, task.id)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-brand ${
                      task.completed
                        ? 'bg-success border-success' :'border-border hover:border-primary'
                    }`}
                  >
                    {task.completed && (
                      <Icon name="Check" size={14} color="white" />
                    )}
                  </button>
                  <div className="flex-1">
                    <h4 className={`font-medium mb-1 ${
                      task.completed ? 'text-text-secondary line-through' : 'text-text-primary'
                    }`}>
                      {task.title}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {task.description}
                    </p>
                    {task.dueDate && (
                      <p className="text-xs text-text-secondary mt-2 flex items-center">
                        <Icon name="Calendar" size={12} className="mr-1" />
                        Due: {task.dueDate.toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareStageCard;