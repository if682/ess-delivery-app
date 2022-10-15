import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '.';
import { ContextsWrapper, mockedApi } from '../../tests/utils';

afterEach(cleanup);

describe('Login', () => {

  afterEach(() => {
    mockedApi.reset();
  });

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

  test('Deve mostrar uma mensagem de alerta ao login ser bem sucedido', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    mockedApi.onPost("/auth/login").reply(200, {
      artist:
      {
        artist: {
          _id: "631bef451c1fc3554b748fb2",
          image: undefined,
          name: "Juninho da Silva Sauro",
          email: "juninho@email.com",
          country: "Brasil",
          genre: "Rock",
          createdAt: "2022-09-10T01:51:45.060Z",
          __v: 0
        },
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWJlZjQ1MWMxZmMzNTU0Yjc0OGZiMiIsImlhdCI6MTY2NTg2ODQ4NywiZXhwIjoxNjY1OTU0ODg3fQ.7u2a1ww2zSZhHDWjQNc3GV-LqHvjHN4Ejo3IJ8y_TOU"
      }
    });

    render(
      <ContextsWrapper>
        <Login />
      </ContextsWrapper>
    );

    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledTimes(1);
    });

    expect(alertMock).toHaveBeenCalledWith('Login bem sucedido');
  });
});