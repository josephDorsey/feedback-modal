import { ReturnToMainNav } from "./ReturnToMainNav";
import { CloseFeedbackModal } from "./CloseFeedbackModal";
import { SendFeedbackButton } from "./SendFeedbackButton";
import bugIcon from "../assets/bug.svg";
export function Bug(props) {
  const handleSubmit = () => {
    console.log(`Clicked`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="bug-nav-modal">
        <ReturnToMainNav setBug={props.setBug} setMainNav={props.setMainNav} />
        <div className="bug-nav-modal__title">
          <img src={bugIcon} className="ion-icon--smaller" alt="" />
          <h3>Report an issue</h3>
        </div>
        <CloseFeedbackModal setOpenFBModal={props.setOpenFBModal} />
      </div>
      <textarea className="bug-text" placeholder="I noticed that..." />
      <div className="bug-labels-container">
        <div className="severity-container">
          <label>Severity: </label>
          <select>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className="assigned-to-container">
          <label>Assigned to: </label>
          <input />
        </div>
      </div>
      <SendFeedbackButton
        setReceivedFeedback={props.setReceivedFeedback}
        setBug={props.setBug}
      />
    </form>
  );
}
