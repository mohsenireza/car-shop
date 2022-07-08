import PropTypes from "prop-types";
import "./SelectBox.scss";

const SelectBox = ({ items, value, onClick, className }) => {
  // When an item gets clicked, then handleClick will run
  const handleClick = (item) => {
    onClick(item);
  };

  return (
    <div data-testid="selectBox" className={`selectBox ${className}`}>
      {items.map((item) => (
        <button
          key={item}
          className={`selectBox__item ${value === item ? "-active" : ""}`}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

SelectBox.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

SelectBox.defaultProps = {
  items: [],
  value: null,
  onClick: () => {},
  className: null,
};

export { SelectBox };
