import { StateType } from 'bll/store';
import { TextReducerType } from 'bll/types/text-reducer-type';

export const selectText = (state:StateType):TextReducerType[]=>state.text
