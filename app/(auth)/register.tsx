import { View, Text, StyleSheet } from 'react-native';

export default function RegisterScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Create an account to unlock personalized offers.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { marginTop: 12, fontSize: 16, textAlign: 'center' },
});
