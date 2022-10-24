import React, {useState} from 'react';
import {createContext} from 'react';

const LogContext = createContext('안녕하새여');

export default LogContext;

export const LogContextProvider = ({children}): React.ReactElement => {
  const [text, setText] = useState<string>('');

  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
};
