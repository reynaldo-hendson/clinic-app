import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from './styles';

type Props = {
  routeName: string;
  label: string;
};

export function ButtonAdd({ routeName, label }: Readonly<Props>) {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.addButtonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}