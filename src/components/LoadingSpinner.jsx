import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'amber' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const colorClasses = {
    amber: 'text-amber-500',
    white: 'text-white',
    black: 'text-gray-900'
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`animate-spin rounded-full ${sizeClasses[size]} border-b-2 ${colorClasses[color]}`}></div>
    </div>
  );
};

export default LoadingSpinner; 