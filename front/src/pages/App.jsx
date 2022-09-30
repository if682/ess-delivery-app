import { BrowserRouter } from "react-router-dom";
import AppProvider from '../contexts/index.jsx';
import AppRoutes from '../routes/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
