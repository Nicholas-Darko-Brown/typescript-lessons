import React, { createContext, useContext } from 'react'

const AppContext = createContext({
    authenticated: true,
    lang: 'en',
    theme: 'dark'
})

const Sample6 = () => {
  const appContext = useContext(AppContext)

  return (
    <div>
        <h3>Sample6 {appContext.lang} </h3>
    </div>
  )
}

export default Sample6