import { createContext, useState } from "react";

export const userContect: any = createContext(null);

const Context = ({ children }: any) => {
    const [userLoged, setUserLoged] = useState(false);
    return (
        <userContect.Provider value={{ userLoged, setUserLoged }}>
            {children}
        </userContect.Provider>
    );
};

export default Context;
