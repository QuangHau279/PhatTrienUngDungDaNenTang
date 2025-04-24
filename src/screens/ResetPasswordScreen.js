import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đặt Lại Mật Khẩu</Text>
      <TextInput style={styles.input} placeholder="Enter email" value={email} onChangeText={setEmail} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gửi Tới Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Quay Lại Trang Đăng Nhập</Text>
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
});