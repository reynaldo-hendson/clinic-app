// components/homeProfessional/todayAppointments.tsx
import React from 'react';
import {Text, View} from 'react-native';
import {Appointment} from '@/types/appointment';
import {styles} from './styles';

export default function TodayAppointments({ appointments }: Readonly<{ appointments: Appointment[] }>) {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>📋 Sessões de Hoje</Text>
                {appointments.map((item) => (
                    <Text key={item.id} style={styles.item}>
                        {item.patientName} - {item.time}
                    </Text>
                ))}
        </View>
    );
}
