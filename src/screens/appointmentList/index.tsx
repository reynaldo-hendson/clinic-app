import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import api from '../../services/api';
import {styles} from './styles';
import {Appointment} from '@/types/appointment';
import {DatePickerInput} from "react-native-paper-dates";
import {format, parseISO} from 'date-fns';

export function AppointmentList() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [inputDate, setInputDate] = useState<Date | undefined>(undefined);

    const sortAppointmentsByTime = (list: Appointment[]) => {
        return list.sort((a: Appointment, b: Appointment) =>
            a.time.localeCompare(b.time)
        );
    };

    useEffect(() => {
        if (inputDate) {
            const formattedDate = format(inputDate, 'yyyy-MM-dd');

            api.get(`/appointments?date=${formattedDate}`)
                .then((res) => {
                    const sorted = sortAppointmentsByTime(res.data);
                    setAppointments(sorted);
                })
                .catch(() => {
                    setAppointments([]);
                    Alert.alert('Erro', 'Não foi possível carregar os agendamentos');
                });
        } else {
            setAppointments([]);
        }
    }, [inputDate]);

     return(
         <View style={styles.container}>
             <View style={styles.datePicker}>
                 <DatePickerInput
                     locale="pt"
                     label="Data"
                     value={inputDate}
                     onChange={setInputDate}
                     inputMode="start"
                 />
             </View>
             <FlatList
                 style={styles.list}
                 contentContainerStyle={{ paddingTop: 16 }}
                 data={appointments}
                 keyExtractor={(item) => item.id.toString()}
                 renderItem={({ item }) => (
                     <View style={styles.card}>
                         <Text style={styles.title}>{item.patientName}</Text>
                         <Text>Data: {format(parseISO(item.date), 'dd-MM-yyyy')}</Text>
                         <Text>Hora: {item.time}</Text>
                     </View>
                 )}
                 ListEmptyComponent={
                     inputDate ? (
                         <Text style={{ textAlign: 'center', marginTop: 32, fontSize: 16, color: '#777' }}>
                             Nenhum agendamento encontrado.
                         </Text>
                     ) : null
                 }
             />
         </View>
     );
}


    //     <View style={styles.container}>
    //
    //         <View style={styles.datePicker}>
    //             <DatePickerInput
    //                 locale="pt"
    //                 label="Data"
    //                 value={inputDate}
    //                 onChange={setInputDate}
    //                 inputMode="start"
    //             />
    //         </View>
    //
    //         <FlatList
    //             style={styles.list}
    //             data={appointments}
    //             keyExtractor={(item) => item.id.toString()}
    //             renderItem={({ item }: { item: Appointment }) => (
    //                 <View style={styles.card}>
    //                     <Text style={styles.title}>{item.patientName}</Text>
    //                     <Text>Data: {format(parseISO(item.date), 'dd-MM-yyyy')}</Text>
    //                     <Text>Hora: {item.time}</Text>
    //                 </View>
    //             )}
    //         />
    //     </View>
    // );

