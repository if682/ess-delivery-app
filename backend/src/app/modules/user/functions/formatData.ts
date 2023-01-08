export const formatCPF = (cpf: string) => {
  const [, lastDigits] = cpf.split('-');
  return `***.***.***-${lastDigits}`;
};
