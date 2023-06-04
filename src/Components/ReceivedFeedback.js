import { CloseFeedbackModal } from "./CloseFeedbackModal";
export function ReceivedFeedback(props) {
  const handleClick = () => {
    props.setMainScreen(true);
  };
  return (
    <div>
      <CloseFeedbackModal />
      <img alt="" />
      <h3>Thanks! We received your feedback.</h3>
      <button onClick={handleClick}>Send Another</button>
    </div>
  );
}
