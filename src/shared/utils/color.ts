import type { OneToNine } from '@/shared/types';

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

export const getValue = (type: string) => {
  const getCssVarValue = (prefix: string, type: string) => getComputedStyle(document.documentElement).getPropertyValue(`--el-${prefix}-${type}`);

  return getCssVarValue('border-radius', type);
};
