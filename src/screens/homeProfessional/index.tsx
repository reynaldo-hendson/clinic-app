import React, { useCallback, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/homeProfessional/header";
import { Appointment } from "@/types/appointment";
import { QuickActions } from "@/components/homeProfessional/quickActions";
import NotificationsList from "../../components/homeProfessional/notificationsList";
import DashboardSummary from "../../components/homeProfessional/dashboardSummary";
import TodayAppointments from "../../components/homeProfessional/todayAppointments";
import { format } from "date-fns";
import api from "../../services/api";
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";

export function HomeProfessional() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const today = format(new Date(), "yyyy-MM-dd");
  const todayAppointments = appointments.filter((a) => a.date === today);

  const fetchData = async () => {
    try {
      const [patientsRes, appointmentsRes] = await Promise.all([
        api.get("/patients"),
        api.get(`/appointments?date=${today}`),
      ]);

      setPatients(patientsRes.data);

      const sortedAppointments = appointmentsRes.data.sort(
          (a: Appointment, b: Appointment) => a.time.localeCompare(b.time)
      );
      setAppointments(sortedAppointments);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
      setAppointments([]);
      setPatients([]);
    }
  };

  useFocusEffect(
      useCallback(() => {
        fetchData();
      }, [])
  );

  const notifications: any[] = [];

  return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Header
              userName="Thalita Emilia"
              profileImage="https://randomuser.me/api/portraits/women/71.jpg"
          />
          <QuickActions />

          <DashboardSummary
              totalPatients={patients.length}
              totalAppointments={appointments.length}
              todayAppointments={todayAppointments.length}
          />

          <NotificationsList notifications={notifications}>
            <TodayAppointments appointments={todayAppointments} />
          </NotificationsList>
        </ScrollView>
      </View>
  );
}
