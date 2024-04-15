import PropTypes from "prop-types";

const ButtonStyle1 = ({ text = "", action = null }) => {
  return (
    <div onClick={action ? action : null} className="button-style1">
      {text}
    </div>
  );
};

ButtonStyle1.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
};

export default ButtonStyle1;
