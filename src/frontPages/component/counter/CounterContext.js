import React, {createContext} from 'react';


const CounterContext = createContext()

const CounterProvider= ({children}) => {



    return (
        <CounterContext.Provider value={}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContext;