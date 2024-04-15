import PropTypes from "prop-types";

const ButtonStyle2 = ({ text = "", action = null }) => {
  return (
    <div onClick={action ? action : null} className="button-style2">
      {text}
    </div>
  );
};

ButtonStyle2.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
};

export default ButtonStyle2;
