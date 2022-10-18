import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateMusic from '.'
import { AlbumProvider } from '../../contexts/Album';
import { ContextsWrapper, mockedApi } from '../../tests/utils';
afterEach(cleanup);
describe('Create Music', ()=>{
    afterEach(() => {
        mockedApi.reset();
      });
      test('falha ao criar música, campos obrigatórios vazios', async () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();    
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
      test('falha ao criar música, música repetida', async () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();
        const mockedSongsDB = [{
            "_id": "634ad74d61e6eb3d5238bd35",
            "name": "You",
            "url": "https://youtu.be/_4gUVl5pjps",
            "participation": "",
            "explicit": true,
            "artist":"631bef451c1fc3554b748fb2",
            "album": "63470bd00862872b23c2e495"
        }];
        
        
        render(
          <ContextsWrapper>
            <CreateMusic />
          </ContextsWrapper>
        );
        const nameTarget = screen.getByPlaceholderText("Nome");
        fireEvent.change(nameTarget,{target:{value:"You"}});
        const linkTarget = screen.getByPlaceholderText("Link");
        fireEvent.change(linkTarget,{target:{value:"https://youtu.be/_4gUVl5pjps"}});
        const participationTarget = screen.getByPlaceholderText("Participação");
        fireEvent.change(participationTarget,{target:{value:""}});
        const explicitTarget = screen.getByText("Explícito");
        fireEvent.click(explicitTarget);
        mockedApi.onGet("/songs").reply(200, {songs:mockedSongsDB});
        fireEvent.click(screen.getByText('Salvar'));
        await waitFor(() => {
          expect(alertMock).toHaveBeenCalledTimes(1);
        });
        expect(alertMock).toHaveBeenCalledWith("Esta música já existe");
      });

      test('falha ao criar música, url inválido', async () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();
        const mockedSongsDB = [{
            "_id": "634ad74d61e6eb3d5238bd35",
            "name": "You",
            "url": "https://youtu.be/_4gUVl5pjps",
            "participation": "",
            "explicit": true,
            "artist":"631bef451c1fc3554b748fb2",
            "album": "63470bd00862872b23c2e495"
        },];
        
        
        render(
          <ContextsWrapper>
            <CreateMusic />
          </ContextsWrapper>
        );
        const nameTarget = screen.getByPlaceholderText("Nome");
        fireEvent.change(nameTarget,{target:{value:"Me"}});
        const linkTarget = screen.getByPlaceholderText("Link");
        fireEvent.change(linkTarget,{target:{value:"https://youtu.be/linkInvalido"}});
        const participationTarget = screen.getByPlaceholderText("Participação");
        fireEvent.change(participationTarget,{target:{value:""}});
        const explicitTarget = screen.getByText("Explícito");
        fireEvent.click(explicitTarget);
        mockedApi.onGet("/songs").reply(200, {songs:mockedSongsDB});
        fireEvent.click(screen.getByText('Salvar'));
        await waitFor(() => {
          expect(alertMock).toHaveBeenCalledTimes(1);
        });
        expect(alertMock).toHaveBeenCalledWith("url não é válido");
      });
      test('Criar música, sucesso', async () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();
        const mockedSongsDB = [];        
        render(
          <ContextsWrapper>
            <CreateMusic />
          </ContextsWrapper>
        );
        const nameTarget = screen.getByPlaceholderText("Nome");
        fireEvent.change(nameTarget,{target:{value:"You"}});
        const linkTarget = screen.getByPlaceholderText("Link");
        fireEvent.change(linkTarget,{target:{value:"https://youtu.be/_4gUVl5pjps"}});
        const participationTarget = screen.getByPlaceholderText("Participação");
        fireEvent.change(participationTarget,{target:{value:""}});
        const explicitTarget = screen.getByText("Explícito");
        fireEvent.click(explicitTarget);
        mockedApi.onGet("/songs").reply(200, {songs:mockedSongsDB});
        fireEvent.click(screen.getByText('Salvar'));
        await waitFor(() => {
          expect(alertMock).toHaveBeenCalledTimes(1);
        });
        expect(alertMock).toHaveBeenCalledWith("música inserida com sucesso");
      });      
});