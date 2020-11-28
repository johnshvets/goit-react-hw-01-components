import PropTypes from "prop-types";
import s from "./Profile.module.css";

const defaultImg =
  "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg";

const Profile = ({ name, tag, location, avatar = defaultImg, stats } = {}) => {
  return (
    <section className={s.container}>
      <div className={s.profile}>
        <div>
          <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
          <p className={s.name}>{name}</p>
          <p>{`@${tag}`}</p>
          <p>{location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.item}>
            <span>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li className={s.item}>
            <span>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li className={s.item}>
            <span>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;
