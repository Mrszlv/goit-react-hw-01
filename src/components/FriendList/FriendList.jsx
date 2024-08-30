import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendListItem.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(friend =>(<li className={s.friendListItem} key={friend.id}>
<FriendListItem
avatar={friend.avatar}
name={friend.name}
isOnline={friend.isOnline}
/>
            </li>
            ))}
        </ul>
    );
};

FriendList.PropTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
id: PropTypes.number.isRequired,
    })
).isRequired,
};

export default FriendList;