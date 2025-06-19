import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";

interface PatientsCardProps {
    icon: string;
    text: string;
    onClick?: () => void;
}

export const PatientsCard = ({ icon, text, onClick }: PatientsCardProps) => {
  return (
      <TouchableOpacity style={styles.card} onPress={onClick}>
          <Text style={styles.icon}>{icon}</Text>
          <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
  );
};
