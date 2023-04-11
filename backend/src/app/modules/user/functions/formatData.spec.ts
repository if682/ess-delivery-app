import { formatCPF } from './formatData';

describe('Utils - formatDate', () => {
  it('should be able to format CPF with dots and dash', () => {
    const expected = '***.***.***-00';
    const cpfToTransform = '123.123.123-00';

    const response = formatCPF(cpfToTransform);

    expect(response).toBe(expected);
  });

  it('should be able to format CPF without dots and dash', () => {
    const expected = '***.***.***-00';
    const cpfToTransform = '12312312300';

    const response = formatCPF(cpfToTransform);

    expect(response).toBe(expected);
  });
});
