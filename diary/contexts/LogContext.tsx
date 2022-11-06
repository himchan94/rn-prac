import React, {useState, Dispatch, SetStateAction} from 'react';
import {createContext} from 'react';
import uuidv4 from 'uuidv4';

type Log = {
  id: string;
  title: string;
  body: string;
  date: string;
};
interface LogContextInterface {
  logs: Log[];
  onCreate: () => void;
}

interface LGPInterfaceProps {
  children: React.ReactElement;
}

const example = () => {
  return Array.from({length: 10})
    .map((_, index) => ({
      id: uuidv4(),
      title: `LOG ${index}`,
      body: `LOG ${index}`,
      date: new Date().toISOString(),
    }))
    .reverse();
};

const LogContext = createContext<LogContextInterface | {}>({});

export default LogContext;

export const LogContextProvider = ({children}: LGPInterfaceProps) => {
  const [logs, setLogs] = useState<Log[]>(example());

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };

    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
};
