import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { dark, light } from '@pancakeswap-libs/uikit'

const CACHE_KEY = 'IS_DARK'
dark.colors.text = '#ffffff'
// dark.colors.textSubtle = '#e58a4c'
dark.colors.primary = '#ffffff'
dark.colors.secondary = '#ffffff'
dark.colors.success = '#616161'

light.colors.text = '#ffffff'
// light.colors.textSubtle = '#e58a4c'
light.colors.primary = '#ffffff'
light.colors.secondary = '#ffffff'
light.colors.success = '#616161'

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null })

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
