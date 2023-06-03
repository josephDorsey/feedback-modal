import { useState } from "react";
export const FeedbackModal = () => {
  const [bug, setBug] = useState(false);
  const [idea, setIdea] = useState(false);
  const [other, setOther] = useState(false);
  const [mainScreen, setMainScreen] = useState(true);
  return (
    <div>
      <h3>What's on your mind?</h3>
      <div>
        <img alt="" />
        <p>Bug</p>
      </div>
      <div>
        <img alt="" />
        <p>Idea</p>
      </div>
      <div>
        <img alt="" />
        <p>Other</p>
      </div>
    </div>
  );
};
