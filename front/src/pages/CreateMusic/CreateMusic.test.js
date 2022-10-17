import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateMusic from '.'
import { ContextsWrapper, mockedApi } from '../../tests/utils';
afterEach(cleanup);
describe('Create Music', ()=>{
    afterEach(() => {
        mockedApi.reset();
      });
      test('falha ao criar música, campos obrigatórios vazios', async () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    
        mockedApi.onPost("/auth/login").reply(400, { "error": "Invalid credentials" });
    
        render(
          <ContextsWrapper>
            <CreateMusic />
          </ContextsWrapper>
        );
        fireEvent.click(screen.getByRole('button'));
        await waitFor(() => {
          expect(alertMock).toHaveBeenCalledTimes(1);
        });
        expect(alertMock).toHaveBeenCalledWith('*Campo obrigatório não pode ser deixado vazio*');
      });      
});