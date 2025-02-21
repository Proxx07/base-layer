export const textWithoutEmoji = (string: string) => {
  const regex = /\p{Extended_Pictographic}/gu;
  return string.replace(regex, ' ');
};
