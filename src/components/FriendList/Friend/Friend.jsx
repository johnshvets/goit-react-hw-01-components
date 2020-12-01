import PropTypes from "prop-types";
import s from "./Friend.module.css";

const Friend = ({ avatar, name, isOnline } = {}) => {
  return (
    <li className={s.item}>
      <span className={`${s.status} ${isOnline && s.statusOn}`}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={`Avatar ${name}`}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
