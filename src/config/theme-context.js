import React from 'react'
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
// context 使用，共享那些对于一个组件树而言是“全局”的数据,避免使用props层层传递一些属性
export const ThemeContext = React.createContext(
  themes.dark // 默认值
);