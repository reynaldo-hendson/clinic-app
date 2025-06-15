import Routes from "@/routes/routes";
import { registerTranslation } from 'react-native-paper-dates';

registerTranslation('pt', {
    save: 'Salvar',
    selectSingle: 'Selecionar data',
    selectMultiple: 'Selecionar datas',
    selectRange: 'Selecionar período',
    notAccordingToDateFormat: (inputFormat: string) =>
        `Use o formato: ${inputFormat}`,
    mustBeHigherThan: (date: string) => `A data deve ser depois de ${date}`,
    mustBeLowerThan: (date: string) => `A data deve ser antes de ${date}`,
    mustBeBetween: (startDate: string, endDate: string) =>
        `A data deve estar entre ${startDate} e ${endDate}`,
    dateIsDisabled: 'Data desativada',
    previous: 'Anterior',
    next: 'Próximo',
    typeInDate: 'Digite a data',
    pickDateFromCalendar: 'Escolha a data no calendário',
    close: 'Fechar',
    hour: 'Hora',
    minute: 'Minuto',
});


const App = () => {
    return <Routes/>;
}
export default App;