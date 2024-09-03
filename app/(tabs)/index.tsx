import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header com ícones */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* Logo e Título */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>SENAI</Text>
        <Text style={styles.subtitle}>Patrimônios em ordem</Text>
      </View>

      {/* Campos de Email e Senha */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="email" size={20} color="#888" style={styles.icon} />
          <TextInput placeholder="Insira seu email" style={styles.input} />
        </View>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="lock" size={20} color="#888" style={styles.icon} />
          <TextInput placeholder="Insira sua senha" secureTextEntry style={styles.input} />
          <TouchableOpacity>
            <Ionicons name="eye-off" size={20} color="#888" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão de Entrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: '#8B0000',
    borderRadius: 10,
    padding: 15,

  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
