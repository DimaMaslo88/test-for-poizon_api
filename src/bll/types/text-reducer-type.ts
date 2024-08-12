export type TextReducerType = {
  texts: textType[];
  resetText: boolean;
  userInput: string;
  errors: number;
  startTime: number | null;
  endTime: number | null;
  errorMap: Record<number, boolean>;
  isModalOpen: boolean;
};
export type textType = {
  id: number
  text: string
}
