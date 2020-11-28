import PropTypes from "prop-types";
import Friend from "./Friend/Friend";
import s from "./Friend/Friend.module.css";

const FriendList = ({ friends } = {}) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default FriendList;
