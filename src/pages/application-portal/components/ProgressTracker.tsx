import Icon from '../../../components/AppIcon';
import { FormSection } from '../../../types';

interface ProgressTrackerProps {
  sections: FormSection[];
  currentSection: string;
  completionPercentage: number;
  onSectionClick: (id: string) => void;
}

const ProgressTracker = ({ sections, currentSection, completionPercentage, onSectionClick }: ProgressTrackerProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Application Progress</span>
        <span className="text-2xl font-serif font-bold text-amber-600">{completionPercentage}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 rounded-full h-2 mb-8 overflow-hidden">
        <div 
          className="h-full bg-amber-500 transition-all duration-500 ease-out" 
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>

      {/* Steps List */}
      <div className="space-y-4">
        {sections.map((section, idx) => {
          const isActive = section.id === currentSection;
          const isCompleted = section.completed;

          return (
            <div 
              key={section.id}
              onClick={() => isCompleted ? onSectionClick(section.id) : null}
              className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                isActive ? 'bg-slate-50 border border-slate-200' : 'opacity-70'
              } ${isCompleted ? 'cursor-pointer hover:bg-slate-50' : 'cursor-default'}`}
            >
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2
                ${isCompleted ? 'bg-green-500 border-green-500 text-white' : 
                  isActive ? 'border-amber-500 text-amber-500 bg-white' : 
                  'border-slate-200 text-slate-300 bg-white'}
              `}>
                {isCompleted ? <Icon name="Check" size={18} /> : <span>{idx + 1}</span>}
              </div>
              
              <div>
                <h4 className={`font-bold text-sm ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                  {section.title}
                </h4>
                <p className="text-xs text-slate-400">{section.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;