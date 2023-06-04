import { ReturnToMainNav } from "./ReturnToMainNav";
import { CloseFeedbackModal } from "./CloseFeedbackModal";
import { SendFeedbackButton } from "./SendFeedbackButton";
import { useState } from "react";
import bugIcon from "../assets/bug.svg";
export function Bug(props) {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("Low");
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      issue: message,
      severity: severity,
      userName: user,
    };
    console.log(submitData);
    props.setReceivedFeedback(true);
    props.setBug(false);
  };
  const handleTextChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSeverityChange = (e) => {
    setSeverity(e.target.value);
  };
  const handleUserChange = (e) => {
    setUser(e.target.value);
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
      <textarea
        value={message}
        onChange={handleTextChange}
        className="bug-text"
        placeholder="I noticed that..."
      />
      <div className="bug-labels-container">
        <div className="severity-container">
          <label>Severity: </label>
          <select value={severity} onChange={handleSeverityChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className="assigned-to-container">
          <label>Assigned to: </label>
          <input value={user} onChange={handleUserChange} />
        </div>
      </div>
      <div className="send-feedback-button__container">
        <button className="send-feedback-button">Send Feedback</button>
      </div>
      {/* <SendFeedbackButton
        setReceivedFeedback={props.setReceivedFeedback}
        setBug={props.setBug}
      /> */}
    </form>
  );
}
