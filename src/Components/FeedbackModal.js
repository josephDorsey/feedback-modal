import { useState } from "react";
import { MainNav } from "./MainNav";
import { Bug } from "./Bug";
import { Idea } from "./Idea";
import "./FeedbackModal.css";
import { ReceivedFeedback } from "./ReceivedFeedback";
export const FeedbackModal = (props) => {
  const [bug, setBug] = useState(false);
  const [idea, setIdea] = useState(false);
  const [other, setOther] = useState(false);
  const [mainNav, setMainNav] = useState(true);
  const [receivedFeedback, setReceivedFeedback] = useState(false);
  let modalView;
  if (mainNav) {
    modalView = (
      <MainNav
        setOther={setOther}
        setIdea={setIdea}
        setBug={setBug}
        setMainNav={setMainNav}
      />
    );
  }
  if (bug) {
    modalView = (
      <Bug
        setOpenFBModal={props.setOpenFBModal}
        setBug={setBug}
        setMainNav={setMainNav}
        setReceivedFeedback={setReceivedFeedback}
      />
    );
  }
  if (idea) {
    modalView = (
      <Idea
        setOpenFBModal={props.setOpenFBModal}
        setIdea={setIdea}
        setMainNav={setMainNav}
        setReceivedFeedback={setReceivedFeedback}
      />
    );
  }
  if (receivedFeedback) {
    modalView = (
      <ReceivedFeedback
        setOpenFBModal={props.setOpenFBModal}
        setReceivedFeedback={setReceivedFeedback}
        setMainNav={setMainNav}
      />
    );
  }
  return (
    <div className="feedback-modal">
      {modalView}
      {/* <Bug setBug={setBug} setMainScreen={setMainScreen} /> */}
    </div>
  );
};
