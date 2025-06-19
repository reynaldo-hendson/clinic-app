import React from "react";
import {View} from "react-native";
import {styles} from "./styles";
import { ActionCard } from "../actionCard";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {PatientsCard} from "@/components/homeProfessional/patientsCard";

export const QuickActions = () => {

  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
        <ActionCard
            icon="📅"
            text="Sessões"
            onClick={() => navigation.navigate('AppointmentList')}
          />
        <PatientsCard
            icon="👥"
            text="Pacientes"
            onClick={() => navigation.navigate('PatientList')}
        />

    </View>
  );
};


