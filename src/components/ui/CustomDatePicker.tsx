import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  eachDayOfInterval,
  isBefore,
  isAfter,
  startOfDay,
  setYear,
  setMonth,
  getYear,
  getMonth,
  isValid,
  parse
} from 'date-fns';
import { ArrowLeft, ArrowRight, Calendar, Search, ChevronDown, Check } from 'lucide-react';

interface CustomDatePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  minDate?: string;
  maxDate?: string;
  error?: string;
  required?: boolean;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ 
  label, 
  value, 
  onChange, 
  minDate, 
  maxDate, 
  error,
  required 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(value ? new Date(value) : new Date());
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [inputValue, setInputValue] = useState(value ? format(new Date(value), 'yyyy-MM-dd') : '');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(value ? format(new Date(value), 'yyyy-MM-dd') : '');
    if (value) setViewDate(new Date(value));
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const monthStart = startOfMonth(viewDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const selectedDate = value ? new Date(value) : null;

  const handleDateSelect = (day: Date) => {
    onChange(format(day, 'yyyy-MM-dd'));
    setIsOpen(false);
  };

  const isDayDisabled = (day: Date) => {
    const dayStart = startOfDay(day);
    if (minDate && isBefore(dayStart, startOfDay(new Date(minDate)))) return true;
    if (maxDate && isAfter(dayStart, startOfDay(new Date(maxDate)))) return true;
    return false;
  };

  const years = useMemo(() => {
    const currentYear = getYear(new Date());
    // Create a range that covers DOB (100 years ago) and Passport Expiry (25 years ahead)
    const startYear = currentYear + 25;
    const endYear = currentYear - 100;
    const range = Array.from({ length: startYear - endYear + 1 }, (_, i) => startYear - i);
    
    return range.filter(y => {
      if (minDate && y < getYear(new Date(minDate))) return false;
      if (maxDate && y > getYear(new Date(maxDate))) return false;
      return true;
    });
  }, [minDate, maxDate]);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    
    // Simple validation for YYYY-MM-DD
    const parsedDate = parse(val, 'yyyy-MM-dd', new Date());
    if (isValid(parsedDate)) {
        if (!isDayDisabled(parsedDate)) {
            onChange(val);
            setViewDate(parsedDate);
        }
    }
  };

  return (
    <div ref={containerRef} className="relative flex flex-col gap-1.5 w-full group">
      <label className="text-xs font-medium text-slate-500 ml-0.5 group-focus-within:text-blue-600 transition-colors">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className={`
        relative h-12 border-b border-slate-200 flex items-center justify-between transition-all
        ${error ? 'border-red-500' : 'group-focus-within:border-blue-600 hover:border-blue-600'}
      `}>
        <input 
          type="text"
          value={inputValue}
          onChange={handleManualInput}
          onFocus={() => setIsOpen(true)}
          className={`
            w-full bg-transparent text-sm font-semibold outline-none
            ${value ? 'text-slate-900' : 'text-slate-300'}
            placeholder:text-slate-200
          `}
          placeholder="YYYY-MM-DD"
        />
        <Calendar 
          onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
          className={`w-4 h-4 text-slate-300 transition-colors cursor-pointer ${isOpen ? 'text-blue-600' : ''}`} 
        />
      </div>

      {error && <p className="text-xs text-red-500 font-medium mt-1 animate-in slide-in-from-top-1">{error}</p>}

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 mt-4 w-72 bg-white/95 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white/50 rounded-3xl z-[150] p-5 origin-top"
          >
            {/* Header / Month-Year Toggle */}
            <div className="flex items-center justify-between mb-5">
              <button 
                type="button"
                disabled={showYearPicker || showMonthPicker}
                onClick={(e) => { e.stopPropagation(); setViewDate(subMonths(viewDate, 1)); }} 
                className={`p-2 hover:bg-slate-50 rounded-full transition-colors ${(showYearPicker || showMonthPicker) ? 'opacity-0' : ''}`}
              >
                <ArrowLeft className="text-blue-900 w-3.5 h-3.5" />
              </button>

              <div className="flex gap-1">
                <button 
                   onClick={() => { setShowMonthPicker(!showMonthPicker); setShowYearPicker(false); }}
                   className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-900 px-2 py-1 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1"
                >
                    {format(viewDate, 'MMMM')} <ChevronDown size={8} />
                </button>
                <button 
                   onClick={() => { setShowYearPicker(!showYearPicker); setShowMonthPicker(false); }}
                   className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-900 px-2 py-1 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1"
                >
                    {format(viewDate, 'yyyy')} <ChevronDown size={8} />
                </button>
              </div>

              <button 
                type="button"
                disabled={showYearPicker || showMonthPicker}
                onClick={(e) => { e.stopPropagation(); setViewDate(addMonths(viewDate, 1)); }} 
                className={`p-2 hover:bg-slate-50 rounded-full transition-colors ${(showYearPicker || showMonthPicker) ? 'opacity-0' : ''}`}
              >
                <ArrowRight className="text-blue-900 w-3.5 h-3.5" />
              </button>
            </div>

            {/* Year Picker */}
            <AnimatePresence mode="wait">
                {showYearPicker ? (
                    <motion.div 
                        key="year-picker"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto custom-scrollbar p-1"
                    >
                        {years.map(y => (
                            <button 
                                key={y}
                                onClick={() => { setViewDate(setYear(viewDate, y)); setShowYearPicker(false); }}
                                className={`text-[10px] font-bold py-2 rounded-lg transition-all ${getYear(viewDate) === y ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-blue-50 text-slate-600'}`}
                            >
                                {y}
                            </button>
                        ))}
                    </motion.div>
                ) : showMonthPicker ? (
                    <motion.div 
                        key="month-picker"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="grid grid-cols-2 gap-2 p-1"
                    >
                        {months.map((m, i) => (
                            <button 
                                key={m}
                                onClick={() => { setViewDate(setMonth(viewDate, i)); setShowMonthPicker(false); }}
                                className={`text-[9px] font-bold py-3 rounded-lg transition-all uppercase tracking-widest ${getMonth(viewDate) === i ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-blue-50 text-slate-600'}`}
                            >
                                {m.substring(0, 3)}
                            </button>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="calendar-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="grid grid-cols-7 gap-0.5 mb-1.5">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                                <div key={d} className="text-[7px] font-black text-slate-300 uppercase text-center py-2">{d}</div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-0.5">
                            {days.map((day, idx) => {
                                const isCurrentMonth = isSameMonth(day, monthStart);
                                const isSelected = selectedDate && isSameDay(day, selectedDate);
                                const isDisabled = isDayDisabled(day);
                                const isToday = isSameDay(day, new Date());

                                return (
                                <button
                                    key={idx}
                                    type="button"
                                    disabled={isDisabled}
                                    onClick={(e) => { e.stopPropagation(); handleDateSelect(day); }}
                                    className={`
                                    relative h-8 w-full rounded-lg text-[9px] font-bold transition-all flex items-center justify-center
                                    ${!isCurrentMonth ? 'text-slate-200' : (isDisabled ? 'text-slate-200' : 'text-slate-600')}
                                    ${isSelected ? 'bg-blue-600 text-white shadow-md scale-105 z-10' : (isDisabled ? '' : 'hover:bg-blue-50 hover:text-blue-900')}
                                    ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                                    `}
                                >
                                    {format(day, 'd')}
                                    {isToday && !isSelected && (
                                    <div className="absolute bottom-1 w-1 h-1 rounded-full bg-blue-400" />
                                    )}
                                </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDatePicker;
