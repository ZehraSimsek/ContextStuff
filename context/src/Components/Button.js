import React from 'react'
import {useTheme} from '../Context/ThemeContext.js'

function Button() {
  const {theme , setTheme} = useTheme();
  return (
    <div>
      change
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Click</button>
    </div>
  )
}

export default Button