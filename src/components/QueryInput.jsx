import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitQuery } from '../redux/actions.jsx';


const businessKeywords = [
  'sales', 'revenue', 'profit', 'quarter', 'growth', 'expenses', 'cost', 'performance', 'market', 'target', 'business', 'profitability'
];

const isBusinessRelated = (query) => {
  
  return businessKeywords.some(keyword => query.toLowerCase().includes(keyword));
};

const QueryInput = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!isBusinessRelated(query)) {
      setErrorMessage('Please ask a business-related question.');
      return;
    }

    setErrorMessage(''); 
    dispatch(submitQuery(query));
    setQuery('');
  };

  return (
    <div className="mb-4 query-input ">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask your business question..."
          className="border p-2 flex-grow input"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 input-btn">
          Analize
        </button>
      </form>
      {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
      <div className="queryinput-para">
      <p className="text-sm text-gray-500 mt-1">
        Try asking: "<span> What were our sales last quarter? </span>"
      </p>
      </div>
      
    </div>
  );
};

export default QueryInput;
