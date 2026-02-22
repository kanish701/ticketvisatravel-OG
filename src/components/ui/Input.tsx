import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    description, 
    className = '', 
    containerClassName = '', 
    labelClassName = '',
    required,
    ...props 
  }, ref) => {
    return (
      <div className={`w-full ${containerClassName}`}>
        {/* Label */}
        {label && (
          <label className={`block text-sm font-medium text-slate-700 mb-1.5 ${labelClassName}`}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Field */}
        <div className="relative">
          <input
            ref={ref}
            className={`
              w-full px-4 py-3 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400
              transition-all duration-200 outline-none
              disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
              ${error 
                ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                : 'border-slate-200 hover:border-slate-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10'
              }
              ${className}
            `}
            {...props}
          />
        </div>

        {/* Description & Error Message */}
        {description && !error && (
          <p className="text-xs text-slate-500 mt-1.5">{description}</p>
        )}
        {error && (
          <p className="text-xs text-red-500 font-medium mt-1.5 animate-in slide-in-from-top-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;