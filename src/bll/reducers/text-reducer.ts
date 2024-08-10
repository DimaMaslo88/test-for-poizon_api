import { TextReducerType } from 'bll/types/text-reducer-type';

const textReducerState =
  [
    {
      id: 1,
      text: 'Создать приложение  на, которое оценит скорость печати пользователя. ' +
        'Приложение должно предоставлять пользователю текст для ввода,' +
        ' показывать правильные и неправильные символы разными цветами,' +
        ' а также отображать статистику по скорости печати и числу ошибок.',
    },
    {
      id: 2,
      text: 'Отображение текста для ввода. ' +
        'Текст можно брать из любого источника ' +
        '(например, заранее определенный массив строк).',
    },
  ]
;

export const TextReducer = (state: TextReducerType[] = textReducerState, action: any): TextReducerType[] => {
  switch (action.type) {
    default:
      return state;
  }
};
