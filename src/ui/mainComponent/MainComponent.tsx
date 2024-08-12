import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectResetData, selectText } from 'bll/selectors';
import style from 'ui/styles/mainContent-style/mainContent.module.css';
import { SyncOutlined } from '@ant-design/icons';
import { ToolTip } from 'ui/tooltip/toolTip';
import { resetText } from 'bll/actions/actionTextReducer';


export const MainComponent = React.memo(() => {
  const dispatch = useDispatch();
  const [time, setTime] = useState<number>(30);
  const [loading, setLoading] = useState<boolean>(false);
  const mainText = useSelector(selectText);
  const resData = useSelector(selectResetData);
  const randomTextHandler = mainText[Math.floor(Math.random() * mainText.length)];

  const resetTextHandler = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      dispatch(resetText(!resData));
    }, 500);
    return timer;
  };

  return (
    <div className={style.mainContent}>
      <div className={style.time}>
        Осталось времени : {time}
      </div>
      {loading ? <div className={style.reload}>... Сброс Текста ...</div> : <div className={style.text}>
        {randomTextHandler.text}
      </div>}

      <div className={style.resetIconContainer}>
        <ToolTip text='Перезагрузить Тест'>
          <SyncOutlined className={style.resetIcon} onClick={resetTextHandler} />
        </ToolTip>
      </div>


    </div>
  );

});


