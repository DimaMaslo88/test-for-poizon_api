import { StateType } from 'bll/store';
import { TextReducerType, textType } from 'bll/types/text-reducer-type';

export const selectText = (state:StateType):textType[]=>state.text.texts
export const selectResetData =(state:StateType):boolean=>state.text.resetText
