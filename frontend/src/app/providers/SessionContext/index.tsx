import { useState, createContext, ReactNode, useContext } from "react";

const SessionContext = createContext({});

const Provider = SessionContext.Provider

interface SessionContextInterface {
  token: string;
}

interface SessionProviderProps {
  children: ReactNode;
}


export const SessionProvider = ({ children }: SessionProviderProps) => {
  const [session, setSession] = useState<SessionContextInterface>({token: ''})

  return (
    <Provider value={{session, setSession}}>
      {children}
    </Provider>
  )
}

export const useSession = () => useContext(SessionContext)