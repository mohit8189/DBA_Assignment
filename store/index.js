
import React from 'react';

const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({  children, initialState, reducer  }) => {
    
  const [postState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={[postState, dispatch]}>
        {children}
    </Store.Provider>
  );
};