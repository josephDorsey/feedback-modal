import { ReturnToMainNav } from "./ReturnToMainNav";
import { CloseFeedbackModal } from "./CloseFeedbackModal";
// import { SendFeedbackButton } from "./SendFeedbackButton";
import { useState } from "react";
import otherIcon from "../assets/mail.svg";

export function Other(props) {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    props.setReceivedFeedback(true);
    props.setOther(false);
    const webhookUrl =
      "https://discord.com/api/webhooks/1114978093363376188/dePKncAXDT2I1lcieL45PGCaNWocjc2EjqyjUI48kFIaf1ILJjvLkmjH501TGg3cMY1s";
    const webhookBody = {
      embeds: [
        {
          title: "Feedback Type: Other ✉️",
          fields: [
            {
              name: "Other",
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
      <div className="other-nav-modal">
        <ReturnToMainNav
          other={props.other}
          setOther={props.setOther}
          setMainNav={props.setMainNav}
        />
        <div className="other-nav-modal__title">
          <img src={otherIcon} className="ion-icon--smaller" alt="" />
          <h3>Tell me anything</h3>
        </div>
        <CloseFeedbackModal setOpenFBModal={props.setOpenFBModal} />
      </div>
      <textarea
        value={message}
        onChange={handleTextChange}
        className="other-text"
        placeholder="I think that..."
        required
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
