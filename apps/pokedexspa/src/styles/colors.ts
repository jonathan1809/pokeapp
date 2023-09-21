
export const colors = {
  white: '#ffffff',
  black: '#000000',
  'blue500': '#2196f3',
  'blue50': '#e3f2fd',
  'blue100': '#bbdefb',
  'blue200': '#90caf9',
  'blue300': '#64b5f6',
  'blue400': '#42a5f5',
  'blue600': '#1e88e5',
  'blue700': '#1976d2',
  'blue800': '#1565c0',
  'blue900': '#0d47a1'
}

export type ColorName = keyof typeof colors

export const getColor = (colorName: ColorName, opacity?: number) => {
  if (!opacity) { return colors[colorName] }
  let hexOpacity = Math.round(Math.max(0, Math.min(opacity, 1)) * 255).toString(16)
  if (hexOpacity.length === 1) {
    hexOpacity = `0${hexOpacity}`
  }
  return `${colors[colorName]}${hexOpacity}`
}
