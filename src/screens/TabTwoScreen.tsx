import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { supabase } from '../lib/supabase';

export default function TabTwoScreen() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        {user?.user_metadata?.avatar_url ? (
          <Image
            source={{ uri: user.user_metadata.avatar_url }}
            style={styles.avatar}
          />
        ) : (
          <View style={styles.avatarFallback}>
            <FontAwesome name="user" size={40} color="#fff" />
          </View>
        )}

        <Text style={styles.name}>
          {user?.user_metadata?.full_name ?? 'User'}
        </Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Orders</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Payments</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Services</Text>
        </View>
      </View>

      <View style={styles.actionCard}>
        <TouchableOpacity style={styles.actionItem}>
          <FontAwesome name="user-circle" size={22} />
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem}>
          <FontAwesome name="history" size={22} />
          <Text style={styles.actionText}>Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionItem, styles.logout]}
          onPress={logout}
        >
          <FontAwesome name="sign-out" size={22} color="#e53935" />
          <Text style={[styles.actionText, { color: '#e53935' }]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f6fa',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  avatarFallback: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#2f95dc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    color: '#666',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    elevation: 2,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
    marginTop: 4,
  },
  actionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,
    elevation: 2,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  actionText: {
    marginLeft: 15,
    fontSize: 16,
  },
  logout: {
    borderBottomWidth: 0,
  },
});
