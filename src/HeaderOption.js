import React from 'react';
import {Avatar} from '@material-ui/core';
import './HeaderOption.css';

function HeaderOption({avatar, title, Icon, onClick}) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flwlies.com%2Farticles%2Favatar-will-reclaim-its-all-time-box-office-title-with-a-re-release-in-china%2F&psig=AOvVaw05OMgcNhctQB-RBJHKAAGu&ust=1652897864662000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDgg8SS5_cCFQAAAAAdAAAAABAD"
          className="headerOption__icon"
        >
          alok goldy
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
