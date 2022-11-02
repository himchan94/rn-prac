import React, {useState, Dispatch, SetStateAction} from 'react';
import {createContext} from 'react';

interface LogContextInterface {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const LogContext = createContext<LogContextInterface>({});

export default LogContext;

export const LogContextProvider = ({children}): React.ReactElement => {
  const [text, setText] = useState<string>('');

  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
};
