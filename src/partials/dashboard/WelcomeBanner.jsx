import React from 'react';

function WelcomeBanner() {
  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Good afternoon, John Doe. 👋</h1>
      </div>
    </div>
  );
}

export default WelcomeBanner;
