import React from "react";

export const Loading = () => {
  return (
    <div className='position-absolute top-0 end-0 bottom-0 start-0 text-bg-dark bg-opacity-50 d-flex justify-content-center align-items-center z-3'>
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};
