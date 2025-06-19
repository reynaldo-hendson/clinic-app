export const formatCurrency = (value: string): string => {
    const numeric = value.replace(/\D/g, ''); // remove tudo que não é número
    const number = (parseInt(numeric || '0', 10) / 100).toFixed(2); // divide por 100 para colocar vírgula
    const parts = number.split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // coloca pontos nos milhares
    return `R$ ${integerPart},${parts[1]}`;
};
