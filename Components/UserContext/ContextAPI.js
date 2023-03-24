import { Children, useContext } from "react";
import { createContext } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
    const data = {
        name: "Vipul",
        age: 21,
    }

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
};
export { AppContext, AppProvider };