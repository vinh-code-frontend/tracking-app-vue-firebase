import type { OneToNine } from '../types/common';

export const getElColor = (
  type: 'primary' | 'info',
  config?: {
    ratio?: OneToNine;
    theme?: 'light' | 'dark';
    useVar?: boolean;
  }
) => {
  const ratio = config?.ratio;
  let theme = config?.theme;
  let useVar = config?.useVar;
  if (!theme) {
    theme = 'light';
  }
  if (!useVar) {
    useVar = true;
  }
  let color = ratio ? `--el-color-${type}-${theme}-${ratio}` : `--el-color-${type}`;
  if (useVar) {
    color = `var(${color})`;
  }
  return color;
};
