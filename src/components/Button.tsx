import { Pressable, Text, StyleSheet, type GestureResponderEvent } from 'react-native';

interface ButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export function Button({ label, onPress }: ButtonProps): JSX.Element {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#111827', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8 },
  label: { color: '#ffffff', fontWeight: '600', textAlign: 'center' },
});
