import React from 'react';
import QueryInput from '../components/QueryInput.jsx';
import QueryHistory from '../components/QueryHistory.jsx';
import ResultsDisplay from '../components/ResultsDisplay.jsx';

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold ml-6 headline">Gen <span>AI</span> Analytics Dashboard</h1>
      <QueryInput />
      <ResultsDisplay />
      <QueryHistory />
    </div>
  );
};

export default Dashboard;
