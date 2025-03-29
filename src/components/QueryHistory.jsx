import React from 'react';
import { useSelector } from 'react-redux';

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);

  return (
    <div className="border p-4 mt-4">
      <h3 className="font-bold mb-2 headIII">Query History</h3>
      {history.length === 0 ? (
        <p>No queries submitted yet.</p>
      ) : (
        <ul className="list-disc pl-5">
          {history.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryHistory;
