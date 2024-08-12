export type ResetTextType = ReturnType<typeof resetText>
export const resetText = (reset: boolean) => {
  return {
    type: 'RESET-TEXT',
    reset,
  } as const;
};
