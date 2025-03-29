export const SUBMIT_QUERY = 'SUBMIT_QUERY';
export const QUERY_SUCCESS = 'QUERY_SUCCESS';
export const QUERY_FAILURE = 'QUERY_FAILURE';

export const submitQuery = (query) => (dispatch) => {
  dispatch({ type: SUBMIT_QUERY, payload: query });
  
  
  setTimeout(() => {
    
    if (Math.random() < 0.9) {
      const result = {
        message: `Results for "${query}"`,
        chartData: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [
            {
              label: 'Sales',
              data: [15, 25, 35, 45],
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        },
      };
      dispatch({ type: QUERY_SUCCESS, payload: result });
    } else {
      dispatch({
        type: QUERY_FAILURE,
        payload: 'Failed to process query. Please try again.',
      });
    }
  }, 2000);
};
