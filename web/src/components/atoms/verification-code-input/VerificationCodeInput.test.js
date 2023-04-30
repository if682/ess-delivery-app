import { render, fireEvent} from '@testing-library/react';
import { VerificationCodeInput } from './VerificationCodeInput';

describe('VerificationCodeInput component', () => {
    const mockSetWarningMessage = jest.fn();
    const mockSetClicked = jest.fn();
    
    afterEach(() => {
        jest.clearAllMocks();
    });

  it('renders correctly', () => {
    
    const {getByTestId, getByText} = render(<VerificationCodeInput setWarningMessage={mockSetWarningMessage} setClicked={mockSetClicked} clicked={false} />);
    const verificationCodeText = getByText('Código de verificação');
    expect(verificationCodeText).toBeInTheDocument();
    const firstDigitInput = getByTestId('first_digit');
    expect(firstDigitInput).toBeInTheDocument();
    const secondDigitInput = getByTestId('second_digit');
    expect(secondDigitInput).toBeInTheDocument();
    const thirdDigitInput = getByTestId('third_digit');
    expect(thirdDigitInput).toBeInTheDocument();
    const fourthDigitInput = getByTestId('fourth_digit');
    expect(fourthDigitInput).toBeInTheDocument();
  });

  it('validates input correctly when code is correct', () => {
    const {getByTestId, rerender} = render(<VerificationCodeInput setWarningMessage={mockSetWarningMessage} setClicked={mockSetClicked} clicked={false} />)
    const firstDigitInput = getByTestId('first_digit');
    fireEvent.change(firstDigitInput, { target: { value: '1' } });
    const secondDigitInput = getByTestId('second_digit');
    fireEvent.change(secondDigitInput, { target: { value: '1' } });
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '1' } });
    rerender(<VerificationCodeInput setWarningMessage={mockSetWarningMessage} setClicked={mockSetClicked} clicked={true} />);
    //a função só foi chamada durante a atualização dos valores dos inputs
    expect(mockSetWarningMessage).toHaveBeenCalledWith(null);
    
  });

  it('set warning message to "Código de verificação incorreto" when code is incorrect', () => {
    const {getByTestId, rerender} = render(<VerificationCodeInput setWarningMessage={mockSetWarningMessage} setClicked={mockSetClicked} clicked={false} />)
    const firstDigitInput = getByTestId('first_digit');
    fireEvent.change(firstDigitInput, { target: { value: '2' } });
    const secondDigitInput = getByTestId('second_digit');
    fireEvent.change(secondDigitInput, { target: { value: '1' } });
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '1' } });
    rerender(<VerificationCodeInput setWarningMessage={mockSetWarningMessage} setClicked={mockSetClicked} clicked={true} />);
    expect(mockSetWarningMessage).toHaveBeenCalledWith('Código de verificação incorreto'.trim());
  });

  it('set warning message to "Preencha todos os campos!" when code input is null', () => {
    const {getByTestId, rerender} = render(<VerificationCodeInput setWarningMessage={mockSetWarningMessage} setClicked={mockSetClicked} clicked={false} />)
    const firstDigitInput = getByTestId('first_digit');
    fireEvent.change(firstDigitInput, { target: { value: '' } });
    const secondDigitInput = getByTestId('second_digit');
    fireEvent.change(secondDigitInput, { target: { value: '1' } });
    const thirdDigitInput = getByTestId('third_digit');
    fireEvent.change(thirdDigitInput, { target: { value: '1' } });
    const fourthDigitInput = getByTestId('fourth_digit');
    fireEvent.change(fourthDigitInput, { target: { value: '1' } });
    rerender(<VerificationCodeInput setWarningMessage={mockSetWarningMessage} setClicked={mockSetClicked} clicked={true} />);
    expect(mockSetWarningMessage).toHaveBeenCalledWith('Preencha todos os campos!'.trim());
  });
});
''