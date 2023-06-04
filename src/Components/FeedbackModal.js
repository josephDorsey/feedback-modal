import { useState } from "react";
import backButton from "../assets/arrow-back.svg";
import bugIcon from "../assets/bug.svg";
import closeButton from "../assets/close.svg";
import "./FeedbackModal.css";
export const FeedbackModal = () => {
  const [bug, setBug] = useState(false);
  const [idea, setIdea] = useState(false);
  const [other, setOther] = useState(false);
  const [mainScreen, setMainScreen] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  let modalView;
  if (mainScreen) {
    modalView = (
      <FeedbackModalMainPage
        setOther={setOther}
        setIdea={setIdea}
        setBug={setBug}
        setMainScreen={setMainScreen}
      />
    );
  }
  if (bug) {
    modalView = <Bug setBug={setBug} setMainScreen={setMainScreen} />;
  }
  return (
    <div className="feedback-modal">
      {modalView}
      {/* <Bug setBug={setBug} setMainScreen={setMainScreen} /> */}
    </div>
  );
};

function FeedbackModalMainPage(props) {
  const handleBugClick = () => {
    props.setBug(true);
    props.setIdea(false);
    props.setOther(false);
    props.setMainScreen(false);
  };
  const handleIdeaClick = () => {
    props.setBug(false);
    props.setIdea(true);
    props.setOther(false);
    props.setMainScreen(false);
  };
  const handleOtherClick = () => {
    props.setBug(false);
    props.setIdea(false);
    props.setOther(true);
    props.setMainScreen(false);
  };
  return (
    <>
      <h3>What's on your mind?</h3>
      <div className="feedback-modal__options-container">
        <button onClick={handleBugClick} className="feedback-modal__button-box">
          <div>
            <img src={bugIcon} className="bug-icon" alt="" />
            <p>Bug</p>
          </div>
        </button>
        <button
          onClick={handleIdeaClick}
          className="feedback-modal__button-box"
        >
          <div>
            <img alt="" />
            <p>Idea</p>
          </div>
        </button>
        <button
          onClick={handleOtherClick}
          className="feedback-modal__button-box"
        >
          <div>
            <img alt="" />
            <p>Other</p>
          </div>
        </button>
      </div>
    </>
  );
}
function Bug(props) {
  const handleSubmit = () => {
    console.log(`Clicked`);
  };
  const handleReturnMainScreen = () => {
    props.setBug(false);
    props.setMainScreen(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="bug-nav-modal">
        <img
          src={backButton}
          onClick={handleReturnMainScreen}
          className="ion-icon"
          alt=""
        />
        <div className="bug-nav-modal__title">
          <img src={bugIcon} className="ion-icon--smaller" alt="" />
          <h3>Report an issue</h3>
        </div>
        <img
          src={closeButton}
          // onClick={}
          className="ion-icon"
          alt=""
        />
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
      <SendFeedbackButton />
    </form>
  );
}

function SendFeedbackButton() {
  return (
    <div className="send-feedback-button__container">
      <button className="send-feedback-button">Send Feedback</button>
    </div>
  );
}
