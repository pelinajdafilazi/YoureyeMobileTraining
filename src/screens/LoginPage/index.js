// src/screens/LoginPage/index.js
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';

// Utils
import { isValidEmail, isEmpty } from '../../utils';

// Theme
import { colors } from '../../theme';

// Styles
import { styles } from './styles';

/**
 * Login Page
 * User authentication screen
 */
const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate form
  const validateForm = useCallback(() => {
    const newErrors = {};

    if (isEmpty(email)) {
      newErrors.email = 'E-posta gerekli';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Geçerli bir e-posta girin';
    }

    if (isEmpty(password)) {
      newErrors.password = 'Şifre gerekli';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [email, password]);

  // Handle login
  const handleLogin = useCallback(async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // TODO: Implement actual login with authService
      console.log('Login with:', email, password);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Navigate to home on success
      // navigation.replace(SCREENS.HOME);
      Alert.alert('Başarılı', 'Giriş yapıldı!');
    } catch (error) {
      Alert.alert('Hata', error.message || 'Giriş yapılamadı');
    } finally {
      setLoading(false);
    }
  }, [email, password, validateForm]);

  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={colors.background} 
      />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Giriş Yap</Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-posta</Text>
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                value={email}
                onChangeText={setEmail}
                placeholder="ornek@mail.com"
                placeholderTextColor={colors.textMuted}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!loading}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Şifre</Text>
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                value={password}
                onChangeText={setPassword}
                placeholder="Şifreniz"
                placeholderTextColor={colors.textMuted}
                secureTextEntry
                editable={!loading}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
          </View>

          <TouchableOpacity
            style={[styles.primaryButton, loading && styles.primaryButtonDisabled]}
            onPress={handleLogin}
            activeOpacity={0.8}
            disabled={loading}
          >
            <Text style={styles.primaryButtonText}>
              {loading ? 'Giriş yapılıyor...' : 'Giriş yap'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

LoginPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }),
};

LoginPage.defaultProps = {
  navigation: null,
};

export default LoginPage;
