import { createContext, useState } from "react";



export const SideBarContext = createContext(null)


const contextProvider = ({children})=>{
    const [sidebarOpen,setSidebarOpen] = useState(false)
    return(
    <SideBarContext.Provider value={{sidebarOpen,setSidebarOpen}}>
        {children}
    </SideBarContext.Provider>)
}

export default contextProvider