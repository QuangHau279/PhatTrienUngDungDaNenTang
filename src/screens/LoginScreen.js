import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    let valid = true;
    if (!email) {
      setEmailError('Chưa nhập email');
      valid = false;
    } else setEmailError('');
    if (!password) {
      setPasswordError('Chưa nhập mật khẩu');
      valid = false;
    } else setPasswordError('');
    if (valid) {
      navigation.navigate('HomeScreen'); 
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập email"
        value={email}
        onChangeText={setEmail}
        left={<TextInput.Icon icon="email" size={20} style={{ alignSelf: 'center' }} />}
        
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Nhập password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        left={<TextInput.Icon icon="lock" size={20} style={{ alignSelf: 'center' }} />}
        right={<TextInput.Icon 
        icon={showPassword ? "eye-off":"eye"} 
        size={20}
        style={{ alignSelf: 'center' }} 
        onPress={() => setShowPassword(!showPassword)}
         />}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Bạn Chưa Có Tài Khoản?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.link}>Quên Mật Khẩu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 10 },
  button: { backgroundColor: 'orange', padding: 12, borderRadius: 5, marginTop: 20, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { color: 'orange', marginTop: 10 },
  error: { color: 'red', alignSelf: 'flex-start', marginLeft: '10%' },
});