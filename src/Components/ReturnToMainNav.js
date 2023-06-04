import backButton from "../assets/arrow-back.svg";

export function ReturnToMainNav(props) {
  const handleReturnToMainNav = () => {
    if (props.bug) {
      props.setBug(false);
    }
    if (props.idea) {
      props.setIdea(false);
    }
    if (props.other) {
      props.setOther(false);
    }
    // props.setOther(false);
    props.setMainNav(true);
  };
  return (
    <>
      <img
        src={backButton}
        onClick={handleReturnToMainNav}
        className="ion-icon"
        alt=""
      />
    </>
  );
}
