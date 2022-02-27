import { useState } from "react";

import Survey from "./components/Survey";

function App({match}) {

  const mainViewSize = 600;
  const gridCellSize = 70;
  const gridMargin = 5;
  const column = 16;
  const projectionNum = 150;
  // const projectionNum = 5; /// for test
  const mainViewRadius = 7.5;
  const gridCellRadius = 2;

  const urls = window.location.href.split("/");
  const labelStr = urls[urls.length - 1];

  // generate a array of projectionNum with random order
	const projectionOrder = [];
	for (let i = 0; i < projectionNum; i++) projectionOrder.push(i); 
	projectionOrder.sort(() => Math.random() - 0.5);

  const [isLabel, setIsLabel] = useState(false);

  const onChangeSelect = (e) => {
    const newIsLabel = e.target.value === "label";
    console.log(newIsLabel)
    setIsLabel(newIsLabel);
  }


  return (
    <div className="App">
      <header className="App-header">
      <div style={{display: "flex"}}>
        <h1> Preference survey </h1> 
        <select style={{height: 40, width: 100, margin: 20}} onChange={onChangeSelect}>
          <option value="nolabel" >No Label</option>
          <option value="label"  >Label</option>
        </select>
      </div>
      </header>
      <Survey 
        mainViewSize={mainViewSize}
        gridCellSize={gridCellSize}
        gridMargin={gridMargin}
        column={column}
        projectionNum={projectionNum}
        isLabel={isLabel}
        mainViewRadius={mainViewRadius}
        gridCellRadius={gridCellRadius}
        projectionOrder={projectionOrder}
      />
    </div>
  );
}

export default App;
