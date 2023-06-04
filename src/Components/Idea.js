import { ReturnToMainNav } from "./ReturnToMainNav";
import { CloseFeedbackModal } from "./CloseFeedbackModal";
// import { SendFeedbackButton } from "./SendFeedbackButton";
import { useState } from "react";
import ideaIcon from "../assets/bulb.svg";

export function Idea(props) {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    props.setReceivedFeedback(true);
    props.setIdea(false);
    const webhookUrl =
      "https://discord.com/api/webhooks/1114978093363376188/dePKncAXDT2I1lcieL45PGCaNWocjc2EjqyjUI48kFIaf1ILJjvLkmjH501TGg3cMY1s";
    const webhookBody = {
      embeds: [
        {
          title: "Feedback Type: Idea 💡",
          fields: [
            {
              name: "Idea",
              value: message,
            },
            {
              name: "User",
              value: user === "" ? "Anonymous" : user,
            },
          ],
        },
      ],
    };
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookBody),
    });
    if (response.ok) {
      alert("I have received your message");
    } else {
      alert("There was an error! Try again later!");
    }
  }
  const handleTextChange = (e) => {
    setMessage(e.target.value);
  };
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="idea-nav-modal">
        <ReturnToMainNav
          idea={props.idea}
          setIdea={props.setIdea}
          setMainNav={props.setMainNav}
        />
        <div className="idea-nav-modal__title">
          <img src={ideaIcon} className="ion-icon--smaller" alt="" />
          <h3>Share your idea</h3>
        </div>
        <CloseFeedbackModal setOpenFBModal={props.setOpenFBModal} />
      </div>
      <textarea
        value={message}
        onChange={handleTextChange}
        className="idea-text"
        placeholder="I think that..."
      />
      <div className="assigned-to-container">
        <label>Assigned to: </label>
        <input value={user} onChange={handleUserChange} />
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
