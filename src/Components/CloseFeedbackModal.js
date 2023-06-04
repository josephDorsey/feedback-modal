import closeButton from "../assets/close.svg";
export function CloseFeedbackModal(props) {
  const handleClick = () => {
    props.setOpenFBModal(false);
  };
  return (
    <div className={props.received ? "close-received" : ""}>
      <img
        src={closeButton}
        onClick={handleClick}
        className="ion-icon"
        alt=""
      />
    </div>
  );
}
