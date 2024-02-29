import { createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const [isSidebaropen, setIssidebaropen]  = useState(false);

    const [pageID, setPageId] = useState(null);

    const openSidebar = ( ) =>{
        setIssidebaropen(true);
    }

    const closeSidebar = () =>{
        setIssidebaropen(false);
    }

    return <AppContext.Provider value={
        {isSidebaropen,
         setIssidebaropen,
         openSidebar,
         closeSidebar, 
         setPageId,
         pageID}
        }>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
};