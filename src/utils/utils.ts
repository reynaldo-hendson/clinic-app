export const calcularIdade = (birthdate: string): number => {
    const birthDate = new Date(birthdate);
    const hoje = new Date();

    let idade = hoje.getFullYear() - birthDate.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = birthDate.getMonth();
    const diaAtual = hoje.getDate();
    const diaNascimento = birthDate.getDate();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
};