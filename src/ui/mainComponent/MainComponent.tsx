import React from 'react';
import { useSelector } from 'react-redux';
import { selectText } from 'bll/selectors';
import { TextReducerType } from 'bll/types/text-reducer-type';

export const MainComponent = React.memo(() => {
  const mainText = useSelector(selectText);

  return (
    <div>
      {mainText.map(
        ({id,text}: TextReducerType) => (
          <div key={id}>
            {text}
          </div>
        )
      )}
    </div>
  );

});


