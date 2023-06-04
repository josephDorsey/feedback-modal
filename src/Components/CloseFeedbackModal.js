import closeButton from "../assets/close.svg";
export function CloseFeedbackModal(props) {
  const handleClick = () => {
    props.setOpenFBModal(false);
  };
  return (
    <>
      <img
        src={closeButton}
        onClick={handleClick}
        className="ion-icon"
        alt=""
      />
    </>
  );
}
