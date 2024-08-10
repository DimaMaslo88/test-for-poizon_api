import { TextReducerType } from 'bll/types/text-reducer-type';

const textReducerState = {
  text: [
    'Создать приложение  на, которое оценит скорость печати пользователя. ' +
    'Приложение должно предоставлять пользователю текст для ввода,' +
    ' показывать правильные и неправильные символы разными цветами,' +
    ' а также отображать статистику по скорости печати и числу ошибок.',
]
};

export const TextReducer = (state: TextReducerType = textReducerState, action: any):TextReducerType => {
  switch (action.type) {
    default:
      return state;
  }
};
