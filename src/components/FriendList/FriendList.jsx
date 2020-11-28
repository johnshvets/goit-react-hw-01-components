import PropTypes from "prop-types";
import Friend from "./Friend/Friend";

const FriendList = ({ friends } = {}) => {
  return (
    <ul className="friend-list">
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
