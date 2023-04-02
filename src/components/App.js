import { useState } from "react";
import Tooltip from "./Tooltip";

function App() {
  // tooltip to handle hover on "Hover Over Me!" button 
  // the tooltip will show when tooltip is set to true 
  const [tooltip, setTooltip] = useState(false);
  // variable to set position 
  const position = "top";
  // function to set tooltip to true 
  const handleShowTooltip = () => {
    setTooltip(true);
  };
  // function to set tooltip to false 
  const handleHideTooltip = () => {
    setTooltip(false);
  };
  return (
    <div className="App">
      <div id="tooltip-container">
        <button
        // onMouseMove and onMouseLeave to give a hover effect 
          onMouseOver={handleShowTooltip}
          onMouseLeave={handleHideTooltip}
        >
          Hover Over Me!
        </button>
        {/* tooltip component to show on hover  */}
        <Tooltip showTooltip={tooltip} position={position} />
      </div>
    </div>
  );
}

export default App;
