import React, { useState } from "react";

function MyComponent({header,value}) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
           <p id="header">{header}</p>
      {isShown && <p id="value">{value}</p>}
      <button onClick={() => setIsShown(!isShown)}>show value</button>
    </div>
  );
}
export default MyComponent;
