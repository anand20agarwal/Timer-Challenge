import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset }, ref) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 -remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    }
  })); 

  return (
    <dialog ref={dialog} className="result-modal"> {/* Attach dialog ref here */}
      {userLost && <h2>You Lost</h2>}
      {userLost && <h2>Your Scroe : {score}</h2>}
      <p>The Target Time was <strong>{targetTime}</strong></p>
      <p>You Stopped the timer with <strong>{formattedRemainingTime} seconds Left</strong></p>
      <form method="dialog onSubmit={onReset}">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
