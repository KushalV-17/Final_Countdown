import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, remainingtime, onReset },
  ref
) {
  const userlost = remainingtime <= 0;
  const formatremainingtime = (remainingtime / 1000).toFixed(2);
  const score = Math.round((1 - remainingtime / (targetTime * 1000)) * 100);

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userlost && <h2>YOU LOST</h2>}
      {!userlost && <h2>SCORE: {score}</h2>}
      <p>
        The Target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer at <strong>{formatremainingtime} seconds.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
