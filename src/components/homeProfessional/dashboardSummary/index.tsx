// components/homeProfessional/dashboardSummary.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function DashboardSummary({ totalPatients, totalAppointments, todayAppointments }: Readonly<{
    totalPatients: number;
    totalAppointments: number;
    todayAppointments: number;
}>) {
    return (
        <View style={styles.summaryContainer}>
            <View style={styles.card}><Text style={styles.number}>{totalPatients}</Text><Text>Pacientes</Text></View>
            <View style={styles.card}><Text style={styles.number}>{totalAppointments}</Text><Text>Total Sessões</Text></View>
            <View style={styles.card}><Text style={styles.number}>{todayAppointments}</Text><Text>Hoje</Text></View>
        </View>
    );
}
