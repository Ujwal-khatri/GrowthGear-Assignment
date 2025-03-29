import React from 'react';
import { useSelector } from 'react-redux';
import ChartComponent from './ChartComponent.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';
import ErrorMessage from './ErrorMessage.jsx';

const ResultsDisplay = () => {
  const { loading, error, result } = useSelector((state) => state.query);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!result) {
    return <div>Please submit a query to see results.</div>;
  }

  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2 headIII">Query Results</h3>
      <p>{result.message}</p>
      <ChartComponent data={result.chartData} />
    </div>
  );
};

export default ResultsDisplay;
