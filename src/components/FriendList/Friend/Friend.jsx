import PropTypes from "prop-types";

const Friend = ({ avatar, name, isOnline } = {}) => {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={`Avatar ${name}`} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

Friend.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
