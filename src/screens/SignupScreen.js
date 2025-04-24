import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new account!</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Mật Khẩu" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Nhập Lại Mật Khẩu" secureTextEntry value={repeatPassword} onChangeText={setRepeatPassword} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Bạn Đã Có Tài Khoản?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 10 },
  button: { backgroundColor: 'orange', padding: 12, borderRadius: 5, marginTop: 20, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { color: 'orange', marginTop: 10 },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});