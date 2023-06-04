export function SendFeedbackButton(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.setReceivedFeedback(true);
    props?.setBug(false);
  };
  return (
    <div className="send-feedback-button__container">
      <button onClick={handleClick} className="send-feedback-button">
        Send Feedback
      </button>
    </div>
  );
}
