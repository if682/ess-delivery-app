import './App.css';
import Router from './routes';
import AppBar from './components/AppBar';
import AppTheme from './providers/Theme';
import { SessionProvider } from './providers/SessionContext';
import QueryProvider from './providers/useQuery';

function App() {

  return (
    <div className='App'>
      <QueryProvider>
        <SessionProvider>
          <AppTheme>
            <AppBar/>
            <Router/>
          </AppTheme>
        </SessionProvider>
      </QueryProvider>
      
    </div>
  );
}

export default App;
