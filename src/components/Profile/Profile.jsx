import s from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({name, tag, location, image, stats}) => {
return (
    <div className={s.profile}>
  <div >
    <img className={s.imgProfile}
    src={image}
    alt="User avatar"
    />
<div className={s.textProfile}>
    <p>{name}</p>
    <p className={s.paragraphProfile}>@{tag}</p>
    <p className={s.paragraphProfile}>{location}</p>
</div>
  </div>

  <ul className={s.listProfile}>
    <li className={s.itemProfile}>
    <span>Followers</span>
    <span>{stats.followers}</span>
    </li>
    <li className={s.itemProfile}>
    <span>Views</span>
    <span>{stats.views}</span>
    </li>
    <li className={s.itemProfile}>
    <span>Likes</span>
    <span>{stats.likes}</span>
    </li>
  </ul>
</div>

);
};
Profile.PropTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired
};

export default Profile;