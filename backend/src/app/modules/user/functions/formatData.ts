export const formatCPF = (cpf: string) => {
  const lastDigits = cpf.substr(-2);
  return `***.***.***-${lastDigits}`;
};
