import { createContext } from "react";

const contextAPI = createContext();
const data = {
    name: "Vipul",
    age: 21,
}
const AppProvider = ({ children }) => {

    return <contextAPI.Provider value={data}>{children}</contextAPI.Provider>

}

export { contextAPI, AppProvider };