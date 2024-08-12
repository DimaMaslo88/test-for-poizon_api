import { TextReducerType } from 'bll/types/text-reducer-type';
import { ResetTextType } from 'bll/actions/actionTextReducer';
import { textsBase } from 'bll/constans/constance';

const textReducerState ={
  texts:textsBase,
  resetText:false,
  userInput: '',
  errors: 0,
  startTime: null,
  endTime: null,
  errorMap: {},
  isModalOpen: false,
  }

;
export type TextReducerGeneralType = ResetTextType
export const TextReducer = (state: TextReducerType = textReducerState, action: TextReducerGeneralType): TextReducerType => {
  switch (action.type) {
    case 'RESET-TEXT':{
      return {...state,resetText:action.reset}
    }
    default:
      return state;
  }
};
