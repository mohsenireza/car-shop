import { useState } from "react";

import "./App.scss";
import data from "./data/data.json";
import { SelectBox, Car } from "./components";

const App = () => {
  // selectedType and selectedPart keep track of selected type and part
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);

  // Get all available types to render in the UI
  const types = data.types.map((type) => type.name);

  // Get all parts of the selected type to render in the UI
  const selectedTypeObject = data.types.find(
    (type) => type.name === selectedType
  );
  const parts = selectedType
    ? selectedTypeObject.parts.map((part) => part.name)
    : [];

  // Get cars based on the selected type and part to render in the UI
  const cars =
    selectedType && selectedPart
      ? selectedTypeObject.parts.find((part) => part.name === selectedPart).cars
      : [];

  // When a type gets clicked, then selectedType in state gets updated and selectedPart in state gets reset
  const handleTypeClick = (type) => {
    setSelectedType(type);
    setSelectedPart(null);
  };

  // When a part gets clicked, then selectedPart in state gets updated
  const handlePartClick = (part) => {
    setSelectedPart(part);
  };

  return (
    <div className="carShop">
      <SelectBox
        items={types}
        value={selectedType}
        onClick={handleTypeClick}
        className="carShop__selectBox"
      />
      <SelectBox
        items={parts}
        value={selectedPart}
        onClick={handlePartClick}
        className="carShop__selectBox"
      />
      {cars.map((car) => (
        <Car key={car.name} name={car.name} image={car.image} />
      ))}
    </div>
  );
};

export default App;
