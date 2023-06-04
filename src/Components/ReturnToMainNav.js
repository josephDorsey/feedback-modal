import backButton from "../assets/arrow-back.svg";

export function ReturnToMainNav(props) {
  const handleReturnToMainNav = () => {
    props.setBug(false);
    // props.setIdea(false);
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
