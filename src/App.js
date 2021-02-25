import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import CardModal from "./components/Modal/Modal";
import info from "./info.json";

function App() {
  //this state will be undefined until a user selects a question
  const [currCardID, setCurrCardID] = useState(undefined);

  //when a user selects view details, display by id
  const handleCardChange = function (dataID) {
    setCurrCardID(dataID);
  };
  //retrieve data if currCardID and data.id match
  const data = info.find((data) => data.id === currCardID);

  return (
    <div className="App">
      <div className="card-container">
        {info.map((data, id) => (
          <Card onCardChange={handleCardChange} key={id} data={data}>
            {" "}
          </Card>
        ))}
        {console.log(currCardID)}
      </div>

      <div className="modal-container">
        <CardModal
          //modal will always be open if card is selected, else will always be closed if no card is selected
          show={currCardID != null}
          //when modal is closed, set state to no card is selected
          onClose={() => setCurrCardID(undefined)}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
