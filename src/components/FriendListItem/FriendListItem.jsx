import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendItem}>
      <img src={avatar} alt="Avatar" width="48" className={s.avatar} />
      <div>
        <p className={s.name}>{name}</p>
        <p className={`${s.status} ${isOnline ? s.online : s.offline}`}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
};

export default FriendListItem;
