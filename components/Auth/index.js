import * as React from 'react'
import { useState } from 'react'

const Context = React.createContext([{}, () => {}])

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState()

    return (
        <Context.Provider value = {[state, setState]}>
            {children}
        </Context.Provider>
    )
}