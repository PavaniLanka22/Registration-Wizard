function ProgressBar({ step }) {
  const progress = (step / 3) * 100;

  return (
    <div className="progress-container">
      <p className="step-text">Step {step} of 3</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;