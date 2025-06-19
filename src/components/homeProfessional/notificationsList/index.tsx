import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

interface Notification {
  id: string;
  name: string;
  details: string;
  avatar: string;
}

interface NotificationItemProps {
  notification: Notification;
  onClick?: (id: string) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(notification.id);
    }
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handleClick}>
      <Image
        source={{ uri: notification.avatar }}
        style={styles.avatar}
        alt={notification.name}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{notification.name}</Text>
        <Text style={styles.details}>{notification.details}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface NotificationsListProps {
  notifications: Notification[];
  onNotificationClick?: (id: string) => void;
  children?: React.ReactNode;
}

const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications,
  onNotificationClick, children
}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Notificações recentes</Text>

        {notifications.map((notification) => (
            <NotificationItem
                key={notification.id}
                notification={notification}
                onClick={onNotificationClick}
            />
        ))}

        {children}
      </View>
  );
};

export default NotificationsList;