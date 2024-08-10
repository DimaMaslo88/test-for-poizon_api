import { StateType } from 'bll/store';

export const selectText = (state:StateType):string[]=>state.text.text
