import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '.';
import { ContextsWrapper, mockedApi } from '../../tests/utils';

afterEach(cleanup);

describe('Login', () => {

  test('Deve mostrar uma mensagem de alerta ao login ser mal sucedido', async () => {

    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    mockedApi.onPost("/auth/login").reply(400, { "error": "Invalid credentials" });

    render(
      <ContextsWrapper>
        <Login />
      </ContextsWrapper>
    );

    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledTimes(1);
    });

    expect(alertMock).toHaveBeenCalledWith('Erro ao fazer login!');
  });
});