import PropTypes from "prop-types";

import "./Car.scss";

const Car = ({ name, image }) => {
  return (
    <article className="car">
      <img className="car__image" src={image} />
      <span className="car__name">{name}</span>
    </article>
  );
};

Car.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export { Car };
