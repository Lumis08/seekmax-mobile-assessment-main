import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {LoginScreenRouteProp} from '../navigation/types.navigation';
import useAuth from '../hooks/useAuth';
import ColorTheme from '../theme/color.theme';
import TextTheme from '../theme/text.theme';

function LoginScreen() {
  const {params} = useRoute<LoginScreenRouteProp>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {authenticate, data, loading, error} = useAuth();

  return (
    <SafeAreaView style={styles.loginScreen}>
      <Text style={styles.loginTitle}>Welcome to Seek Max</Text>
      <TextInput
        style={styles.loginUsernameInput}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.loginPasswordInput}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        textContentType="password"
      />
      <Button
        title={loading ? 'Logging ...' : 'Login'}
        color={ColorTheme.button}
        disabled={!username.length || !password.length || loading}
        onPress={() => authenticate(username, password)}
      />

      {!!data ? (
        <Text style={styles.loginSuccessMsg}>Login Success</Text>
      ) : null}

      {!!error ? <Text style={styles.loginFailedMsg}>Login Failed</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    padding: 16,
  },
  loginTitle: {
    textAlign: 'center',
    marginBottom: 24,
    fontSize: TextTheme.headline6.fontSize,
    fontWeight: 'bold',
    color: ColorTheme.textPrimary,
  },
  loginUsernameInput: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  loginPasswordInput: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 32,
  },
  loginSuccessMsg: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: TextTheme.caption.fontSize,
    color: ColorTheme.success,
  },
  loginFailedMsg: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: TextTheme.caption.fontSize,
    color: ColorTheme.error,
  },
});

export default LoginScreen;
