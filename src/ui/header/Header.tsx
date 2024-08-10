import React from 'react';
import style from 'ui/styles/header-style/header-style.module.css'

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <h1 className={style.headerText} >Typing Speed Trainer</h1>
    </div>
  );
};
