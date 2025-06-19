import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";

interface ActionCardProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

export const ActionCard = ({ icon, text, onClick }: ActionCardProps) => {
  return (
      <TouchableOpacity style={styles.card} onPress={onClick}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
  );
};
