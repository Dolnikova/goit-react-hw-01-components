import React from 'react';
import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  const colorStatus = isOnline ? 'green' : 'red';
  return (
    <li className="itemFriends">
      <span className={`statusFriends ${colorStatus}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="nameFriends">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
