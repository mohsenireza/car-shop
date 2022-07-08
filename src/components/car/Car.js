import PropTypes from "prop-types";

import "./Car.scss";

const Car = ({ name, image }) => {
  return (
    <article className="car">
      <img className="car__image" src={image} alt={name} />
      <h3 className="car__name">{name}</h3>
    </article>
  );
};

Car.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export { Car };
