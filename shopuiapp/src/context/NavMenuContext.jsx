import React, {createContext, useState} from 'react'

export const NavMenuContext = createContext();

const NavMenuContextProvider = ({children}) => {

    //set state of initial navmenu value to home
    const [selectedNavMenu, setSelectedNavMenu] = useState('home')

    return (
        <NavMenuContext.Provider value={{selectedNavMenu, setSelectedNavMenu}}>
         {children}
        </NavMenuContext.Provider>
    );
}

export default NavMenuContextProvider