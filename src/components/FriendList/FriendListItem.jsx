import clsx from 'clsx';
import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div className={s.friendItem}>
            <img src={avatar} alt= "Avatar" width = "48" />
            <p>{name}</p>
            <p className={clsx(isOnline===true ? s.green : s.red)}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
};

FriendListItem.PropTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;