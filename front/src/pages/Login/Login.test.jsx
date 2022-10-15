import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '.';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from '../../contexts';
import { ContextsWrapper, mockedApi } from '../../tests/utils';
import { api } from '../../services/api';

afterEach(cleanup);

describe('Login', () => {


  test('Login mal sucedido', async () => {

    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    mockedApi.onPost("/auth/login").reply(400, { "error": "Invalid credentials" });

    const { getAllByTestId, getByText } = render(
      <ContextsWrapper>

        <Login />

      </ContextsWrapper>
    );

    // await user.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('button'));
    // setTimeout(() => { expect(alertMock).toHaveBeenCalledTimes(1);},5000)
    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledTimes(1);
    });

    expect(alertMock).toHaveBeenCalledWith('Erro ao fazer login!');
    // const elemento = await screen.findByLabelText('Email')
    // expect(elemento).toBeOnScreen()
  });
});