import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="p-4 bg-red-200 text-red-800">
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;
