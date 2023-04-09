import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { EditEmailPopup } from './EditEmailPopup';

describe('EditEmailPopup', () => {
  let onHideMock, props;

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

  it('should render the component', () => {
    const { getByText, getByPlaceholderText} = render(<EditEmailPopup {...props} />);
    expect(getByText('Alterar e-mail')).toBeInTheDocument();
    expect(getByPlaceholderText('Novo e-mail')).toBeInTheDocument();
    expect(getByText('Cancelar')).toBeInTheDocument();
    expect(getByText('Salvar')).toBeInTheDocument();
  });

  it('should call onHide when cancel button is clicked', () => {
    const { getByText } = render(<EditEmailPopup {...props} />);
    fireEvent.click(getByText('Cancelar'));
    expect(onHideMock).toHaveBeenCalled();
  });

  it('should show the warning message "O e-mail fornecido possui um formato inválido" if email is not valid', async () => {
    const { getByText, getByPlaceholderText, getByTestId} = render(<EditEmailPopup {...props} />);
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
    await waitFor(() => expect(getByText('O e-mail fornecido possui um formato inválido')).toBeInTheDocument());
  });

  it('should show the warning message "Esse e-mail já está sendo usado" if email is already in use', async () => {
    const { getByText, getByPlaceholderText, getByTestId} = render(<EditEmailPopup {...props} />);
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
    await waitFor(() => expect(getByText('Esse e-mail já está sendo usado')).toBeInTheDocument());
  });

  it('should show the warning message "Esse campo é de preenchimento obrigatório!" if email is null', async () => {
    const { getByText, getByTestId} = render(<EditEmailPopup {...props} />);
    const firstDigitInput = getByTestId('first_digit');
    fireEvent.change(firstDigitInput, { target: { value: '1' } });
    const secondDigitInput = getByTestId('second_digit');
    fireEvent.change(secondDigitInput, { target: { value: '1' } });
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '1' } });
    fireEvent.click(getByText('Salvar'));
    await waitFor(() => expect(getByText('Esse campo é de preenchimento obrigatório!')).toBeInTheDocument());
  });

  it('should show the warning message "Código de verificação incorreto" if the input code is incorrect', async () => {
    const { getByText, getByTestId} = render(<EditEmailPopup {...props} />);
    const firstDigitInput = getByTestId('first_digit');
    fireEvent.change(firstDigitInput, { target: { value: '1' } });
    const secondDigitInput = getByTestId('second_digit');
    fireEvent.change(secondDigitInput, { target: { value: '1' } });
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '2' } });
    fireEvent.click(getByText('Salvar'));
    await waitFor(() => expect(getByText('Código de verificação incorreto')).toBeInTheDocument());
  });

  it('should show the warning message "Preencha todos os campos!" if there is a null digit input', async () => {
    const { getByText, getByTestId} = render(<EditEmailPopup {...props} />);
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '2' } });
    fireEvent.click(getByText('Salvar'));
    await waitFor(() => expect(getByText('Preencha todos os campos!')).toBeInTheDocument());
  });

  it('should call the API and set a new token if email is valid and not already in use', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ id: 2, name: 'test', email: 'newemail@example.com', password: 'passwd' })
      })
    );
    const { getByText, getByPlaceholderText, getByTestId} = render(<EditEmailPopup {...props} />);
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
    await waitFor(() => expect(fetch).toHaveBeenCalledWith('http://localhost:3001/clients/2', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'test', email: 'newemail@example.com', password: 'passwd' })
    }));
  });
})  