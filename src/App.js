import { useState } from "react";
import { FeedbackModal } from "./Components/FeedbackModal";
import "./App.css";

function App() {
  const [openFBModal, setOpenFBModal] = useState(true);
  function handleFBClick() {
    if (openFBModal) {
      setOpenFBModal(false);
    } else {
      setOpenFBModal(true);
    }
  }
  return (
    <div className="App">
      <button onClick={handleFBClick}>Feedback</button>
      {openFBModal ? <FeedbackModal setOpenFBModal={setOpenFBModal} /> : ""}
    </div>
  );
}

export default App;
