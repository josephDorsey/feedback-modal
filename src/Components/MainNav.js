import bugIcon from "../assets/bug.svg";
export function MainNav(props) {
  const handleBugClick = () => {
    props.setBug(true);
    props.setIdea(false);
    props.setOther(false);
    props.setMainNav(false);
  };
  const handleIdeaClick = () => {
    props.setBug(false);
    props.setIdea(true);
    props.setOther(false);
    props.setMainNav(false);
  };
  const handleOtherClick = () => {
    props.setBug(false);
    props.setIdea(false);
    props.setOther(true);
    props.setMainNav(false);
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
