import { useState } from "react";
import "./FeedbackModal.css";
export const FeedbackModal = () => {
  const [bug, setBug] = useState(false);
  const [idea, setIdea] = useState(false);
  const [other, setOther] = useState(false);
  const [mainScreen, setMainScreen] = useState(true);

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
  // if (bug) {
  //   modalView = <Bug />;
  // }
  return <div className="feedback-modal">{modalView}</div>;
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
            <img alt="" />
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
