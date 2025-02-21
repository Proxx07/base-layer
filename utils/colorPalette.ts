export const getColorForSurface = (rgb: number[]): 'white' | 'black' => {
  const [r, g, b] = rgb;
  const brightness = (299 * r + 587 * g + 114 * b) / 1000;
  return brightness < 128 ? 'white' : 'black';
};

export const getRgbValues = (rgbString: string) => {
  const regex = /\d+/g;
  const matches = rgbString.match(regex);
  return matches ? matches.map(Number) : [0, 0, 0];
};
