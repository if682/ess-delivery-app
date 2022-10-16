
import {api} from '../services/api'
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from '../contexts';

export const mockedApi = new MockAdapter(api);

export const ContextsWrapper = ({children}) => (
  <BrowserRouter>
    <AppProvider>
      {children}
    </AppProvider>
  </BrowserRouter>
)