import Survey from "./components/Survery";
import { useLocation } from "react-router-dom";

function App({match}) {

  const mainViewSize = 600;
  const gridCellSize = 70;
  const gridMargin = 5;
  const column = 16;
  const projectionNum = 150;
  const mainViewRadius = 7.5;
  const gridCellRadius = 2;

  const urls = window.location.href.split("/");
  const labelStr = urls[urls.length - 1];
  const isLabel = labelStr === "label";



  return (
    <div className="App">
      <header className="App-header">
      <h1> Preference survey </h1> 
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
      />
    </div>
  );
}

export default App;
