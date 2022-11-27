import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export function FriendListItem({ friend: { name, avatar, isOnline, id } }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline  ? s.active : s.disactive}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
