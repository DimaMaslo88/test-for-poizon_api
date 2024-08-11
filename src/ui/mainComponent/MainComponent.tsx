import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectText } from 'bll/selectors';
import style from 'ui/styles/mainContent-style/mainContent.module.css'
import { SyncOutlined } from '@ant-design/icons';

export const MainComponent = React.memo(() => {
  const [time,setTime] = useState<number>(30)
  const mainText = useSelector(selectText);
  const randomText = mainText[Math.floor(Math.random() * mainText.length)];
  console.log(randomText);
  return (
    <div className={style.mainContent}>
      <div className={style.time}>
        Осталось времени : {time}
      </div>
      <div className={style.text}>
        {randomText.text}
      </div>
      <div className={style.resetIconContainer}>
        <SyncOutlined className={style.resetIcon} />
      </div>


    </div>
  );

});


