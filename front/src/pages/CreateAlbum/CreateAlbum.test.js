import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateAlbum from '.'
import { ContextsWrapper, mockedApi } from '../../tests/utils';
import React from "react";
afterEach(cleanup);
describe('Create Album', ()=>{
    afterEach(() => {
        mockedApi.reset();
      });
      test('falha ao criar álbum, campos obrigatórios vazios', async () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();    
        render(
          <ContextsWrapper>
            <CreateAlbum />
          </ContextsWrapper>
        );
        fireEvent.click(screen.getByRole('button'));
        await waitFor(() => {
          expect(alertMock).toHaveBeenCalledTimes(1);
        });
        expect(alertMock).toHaveBeenCalledWith('*Campo obrigatório não pode ser deixado vazio*');
      });
      test('falha ao criar álbum, campos obrigatórios vazios', async () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();    
        render(
          <ContextsWrapper>
            <CreateAlbum />
          </ContextsWrapper>
        );
        
        const nameTarget = screen.getByPlaceholderText("Nome");
        const yearTarget = screen.getByPlaceholderText("aaaa");
        fireEvent.change(nameTarget,{target:{value:"BANG"}});
        fireEvent.change(yearTarget,{target:{value:1969}});
        fireEvent.click(screen.getByRole('button'));
        await waitFor(() => {
          expect(alertMock).toHaveBeenCalledTimes(1);
        });
        expect(alertMock).toHaveBeenCalledWith("*Album precisa conter uma música*");
      });
      // test('criar álbum, sucesso', async () => {
      //   const alertMock = jest.spyOn(window, 'alert').mockImplementation();    
      //   render(
      //     <ContextsWrapper>
      //       <CreateAlbum />
      //     </ContextsWrapper>
      //   );
        
      //   const nameTarget = screen.getByPlaceholderText("Nome");
      //   const yearTarget = screen.getByPlaceholderText("aaaa");
      //   fireEvent.change(nameTarget,{target:{value:"BANG"}});
      //   fireEvent.change(yearTarget,{target:{value:1969}});
      //   fireEvent.click(screen.getByRole('button'));
      //   const setState = jest.fn();
      //   const songs = jest.spyOn(React,'useState').mockImplementation((initialState) => [initialState, setState]);
      //   await waitFor(() => {
      //     expect(alertMock).toHaveBeenCalledTimes(1);
      //   });
      //   expect(songs).toContainEqual();
      // });  
});