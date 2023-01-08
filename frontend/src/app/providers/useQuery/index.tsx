import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface QueryProviderProps {
    children: ReactNode
}

const queryClient = new QueryClient()

const QueryProvider = ({ children }: QueryProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider