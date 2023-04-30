import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { EditEmailPopup } from '../components/EditEmail/EditEmailPopup';

describe('EditEmailPopup', () => {
  let onHideMock, props;

  //Cria um mock para a função onHide do popup e o props que é vinculado a ele 
  beforeEach(() => {
    onHideMock = jest.fn();
    props = {
      name: 'test',
      email: 'teste@example.com',
      password: 'passwd',
      client_id: 2,
      currentClients: [{id: 1, name: 'monalisa', email: 'mona@hotmail.com', password: "senha"}],
      onHide: onHideMock,
      show: true
    };
  });

  //Verifica se o popup é renderizado corretamente
  it('should render the component', () => {
    const { getByText, getByPlaceholderText} = render(<EditEmailPopup {...props} />);

    //checa se o texto "Alterar e-mail", a caixa de texto com placeholder "Novo e-mail"
    //e os botões "cancelar" e "salvar" constam no html do componente
    expect(getByText('Alterar e-mail')).toBeInTheDocument();
    expect(getByPlaceholderText('Novo e-mail')).toBeInTheDocument();
    expect(getByText('Cancelar')).toBeInTheDocument();
    expect(getByText('Salvar')).toBeInTheDocument();
  });

  //Verifica se a função mock de onHide é chamada quando o botão de cancelar é clicado
  it('should call onHide when cancel button is clicked', () => {
    const { getByText } = render(<EditEmailPopup {...props} />);
    fireEvent.click(getByText('Cancelar'));
    expect(onHideMock).toHaveBeenCalled();
  });

  //Verifica se o popup exibe uma mensagem de erro se o e-mail fornecido não possui um formato válido
  it('should show the warning message "O e-mail fornecido possui um formato inválido" if email is not valid', async () => {
    const { getByText, getByPlaceholderText, getByTestId} = render(<EditEmailPopup {...props} />);

    //Clica em salvar quando o e-mail dado não está no padrão "/\S+@\S+\.\S+/"
    const emailInput = getByPlaceholderText('Novo e-mail');
    const firstDigitInput = getByTestId('first_digit');
    fireEvent.change(firstDigitInput, { target: { value: '1' } });
    const secondDigitInput = getByTestId('second_digit');
    fireEvent.change(secondDigitInput, { target: { value: '1' } });
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '1' } });
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.click(getByText('Salvar'));

    //checa se a mensagem de erro "O e-mail fornecido possui um formato inválido" consta no popup
    await waitFor(() => expect(getByText('O e-mail fornecido possui um formato inválido')).toBeInTheDocument());
  });

  //Verifica se o popup exibe a mensagem de erro "Esse e-mail já está sendo usado" quando o e-mail fornecido já está vinculado à outra conta
  it('should show the warning message "Esse e-mail já está sendo usado" if email is already in use', async () => {
    const { getByText, getByPlaceholderText, getByTestId} = render(<EditEmailPopup {...props} />);

    //Clica em salvar após fornecer um e-mail já registrado no site
    const emailInput = getByPlaceholderText('Novo e-mail');
    const firstDigitInput = getByTestId('first_digit');
    fireEvent.change(firstDigitInput, { target: { value: '1' } });
    const secondDigitInput = getByTestId('second_digit');
    fireEvent.change(secondDigitInput, { target: { value: '1' } });
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '1' } });
    fireEvent.change(emailInput, { target: { value: 'mona@hotmail.com' } });
    fireEvent.click(getByText('Salvar'));

    //checa se a mensagem de erro "Esse e-mail já está sendo usado" consta no popup
    await waitFor(() => expect(getByText('Esse e-mail já está sendo usado')).toBeInTheDocument());
  });

  //Verifica se o popup exibe a mensagem de erro "Esse campo é de preenchimento obrigatório!" quando se clica em salvar mas nenhum e-mail foi dado
  it('should show the warning message "Esse campo é de preenchimento obrigatório!" if email is null', async () => {
    const { getByText, getByTestId} = render(<EditEmailPopup {...props} />);

    //clica em salvar com a caixa de texto vazia
    const firstDigitInput = getByTestId('first_digit');
    fireEvent.change(firstDigitInput, { target: { value: '1' } });
    const secondDigitInput = getByTestId('second_digit');
    fireEvent.change(secondDigitInput, { target: { value: '1' } });
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '1' } });
    fireEvent.click(getByText('Salvar'));

    //checa se a mensagem de erro "Esse campo é de preenchimento obrigatório!" consta no popup
    await waitFor(() => expect(getByText('Esse campo é de preenchimento obrigatório!')).toBeInTheDocument());
  });

  //Verifica se o popup exibe uma mensagem de erro quando o código de verificação fornecido está errado
  it('should show the warning message "Código de verificação incorreto" if the input code is incorrect', async () => {
    const { getByText, getByTestId} = render(<EditEmailPopup {...props} />);

    //clica em salvar quando o código de verificação fornecido está incorreto
    const firstDigitInput = getByTestId('first_digit');
    fireEvent.change(firstDigitInput, { target: { value: '1' } });
    const secondDigitInput = getByTestId('second_digit');
    fireEvent.change(secondDigitInput, { target: { value: '1' } });
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '2' } });
    fireEvent.click(getByText('Salvar'));

    //checa se a mensagem de erro "Código de verificação incorreto"
    await waitFor(() => expect(getByText('Código de verificação incorreto')).toBeInTheDocument());
  });

  //Verifica se o popup exibe uma mensagem de erro quando há inputs vazios para o código de verificação
  it('should show the warning message "Preencha todos os campos!" if there is a null digit input', async () => {
    const { getByText, getByTestId} = render(<EditEmailPopup {...props} />);
     
     //clica em salvar com caixas de texto que recebem os dígitos do código de verificação vazias
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '2' } });
    fireEvent.click(getByText('Salvar'));

    //checa se a mensagem de erro "Preencha todos os campos!" consta no popup
    await waitFor(() => expect(getByText('Preencha todos os campos!')).toBeInTheDocument());
  });

  //Verifica se ocorre uma chamada para a db para atualizar o e-mail do usuário
  it('should call the API and set a new token if email is valid and not already in use', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ id: 2, name: 'test', email: 'newemail@example.com', password: 'passwd' })
      })
    );
    const { getByText, getByPlaceholderText, getByTestId} = render(<EditEmailPopup {...props} />);
     
     //clica em salvar com o código de verificação correto e um e-mail válido
    const emailInput = getByPlaceholderText('Novo e-mail');
    const firstDigitInput = getByTestId('first_digit');
    fireEvent.change(firstDigitInput, { target: { value: '1' } });
    const secondDigitInput = getByTestId('second_digit');
    fireEvent.change(secondDigitInput, { target: { value: '1' } });
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '1' } });
    fireEvent.change(emailInput, { target: { value: 'newemail@example.com' } });
    fireEvent.click(getByText('Salvar'));

    //checa se o método fetch é chamado para fazer a atualização e se os parâmetros passados condizentes com os dados fornecidos nos inputs
    await waitFor(() => expect(fetch).toHaveBeenCalledWith('http://localhost:3001/clients/2', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'test', email: 'newemail@example.com', password: 'passwd' })
    }));
  });
})
