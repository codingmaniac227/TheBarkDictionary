import React from 'react';
import {Outlet} from "react-router-dom";

export const DogContext = React.createContext(null)


const Webpage = () => {

    const [dogID, setDogID] = React.useState(null);


    return (
        <>
            <DogContext.Provider value={{ dogID, setDogID }}>
                <span>The Bark Dictionary</span>
                <Outlet />
            </DogContext.Provider>
        </>
    );
};

export default Webpage;