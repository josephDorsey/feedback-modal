import { CloseFeedbackModal } from "./CloseFeedbackModal";
import complete from "../assets/checkmark-circle.svg";
export function ReceivedFeedback(props) {
  const handleClick = () => {
    props.setMainNav(true);
  };
  return (
    <div className="received-feedback-container">
      <CloseFeedbackModal
        received={true}
        setOpenFBModal={props.setOpenFBModal}
      />
      <img className="ion-icon" src={complete} alt="" />
      <h3>Thanks! We received your feedback.</h3>
      <button className="add-another" onClick={handleClick}>
        Send Another?
      </button>
    </div>
  );
}
