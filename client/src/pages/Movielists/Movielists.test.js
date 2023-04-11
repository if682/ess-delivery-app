import { render, fireEvent, waitFor, getByText } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { jest } from '@jest/globals';
import '@testing-library/jest-dom';
import Movielists from '.';

describe('Feature: listar todas as listas de filmes do usuário', () => {
    localStorage.setItem('userId', 'a843b525-c1b6-401d-a857-d3d66c231be6');
    let createListField, createListButton;
    const mockLog = jest.spyOn(console, 'log');
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => { });

    beforeEach(() => {
        mockLog.mockClear();
        const { getByTestId } = render(
            <Router>
                <Movielists />
            </Router>
        );

        createListField = getByTestId('createListField');
        createListButton = getByTestId('createListButton');
    });

    test('Cenário: carregamento das listas do usuário [bem-sucedido]', async () => {
        await waitFor(() => {
            expect(mockLog).toHaveBeenCalledWith("As listas foram carregadas.");
        });
    });

    test('Cenário: criação de lista [bem sucedido]', async () => {
        fireEvent.change(createListField, { target: { value: 'create-test' } });
        fireEvent.click(createListButton);

        await waitFor(() => {
            expect(mockLog).toHaveBeenCalledWith('A lista foi criada.');
        });
    });

    test('Cenário: criação de lista [nome vazio - malsucedido]', async () => {
        fireEvent.change(createListField, { target: { value: '' } });
        fireEvent.click(createListButton);

        await waitFor(() => {
            expect(mockAlert).toHaveBeenCalledWith("Lista com nome vazio.");
        });
    });

    test('Cenário: criação de lista [nome com caracteres proibidos - malsucedido]', async () => {
        fireEvent.change(createListField, { target: { value: 'Listinha%' } });
        fireEvent.click(createListButton);

        await waitFor(() => {
            expect(mockAlert).toHaveBeenCalledWith("O nome da lista não pode conter &,%,$ ou @.");
        });
    });

    test('Cenário: criação de lista [nome com mais de 80 caracteres - malsucedido])', async () => {
        fireEvent.change(createListField, { target: { value: 'Listinha muito grande para ser criada, pois ultrapassa o limite de 80 caracteres.' } });
        fireEvent.click(createListButton);

        await waitFor(() => {
            expect(mockAlert).toHaveBeenCalledWith("O nome da lista não pode ter mais de 80 caracteres.");
        });
    });
});
