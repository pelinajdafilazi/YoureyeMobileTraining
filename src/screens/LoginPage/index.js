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
  ScrollView,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

// Utils
import { isEmpty } from '../../utils';

// Services
import { authService } from '../../services/api';

// Assets
import logo from '../../assets/logo/logo.png';

// Styles
import { styles } from './styles';
import { SCREENS } from '../../constants';

/**
 * Eye Icon for password visibility toggle
 */
const EyeIcon = ({ visible, color = '#FF7B00' }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    {visible ? (
      <G fill={color}>
        <Path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </G>
    ) : (
      <G fill={color}>
        <Path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
      </G>
    )}
  </Svg>
);

/**
 * Login Page
 */
const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedInput, setFocusedInput] = useState(null);

  // Form validation
  const validateForm = useCallback(() => {
    const newErrors = {};

    if (isEmpty(username)) {
      newErrors.username = 'Kullanıcı adı gerekli';
    }

    if (isEmpty(password)) {
      newErrors.password = 'Şifre gerekli';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [username, password]);

  /**
   * Login handler - Connects to backend API via Swagger UI
   */
  const handleLogin = useCallback(async () => {
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});

    try {
      const response = await authService.login(username, password);
      
      // Login successful - navigate to home
      // Success message can be shown on HomePage if needed
      if (response && response.accessToken) {
        navigation.replace(SCREENS.HOME);
      }
    } catch (error) {
      // Handle API errors
      // Backend returns text/plain for errors, so check error.message first
      const errorMessage = error?.message || error?.data?.message || 'Kullanıcı adı veya şifre yanlış!';
      Alert.alert("Hata", errorMessage);
      
      // Set field errors if provided by backend
      if (error?.data?.errors) {
        setErrors(error.data.errors);
      }
    } finally {
      setLoading(false);
    }
  }, [username, password, validateForm, navigation]);

  // Forgot password
  const handleForgotPassword = () => {
    Alert.alert('Şifremi Unuttum', 'Şifre sıfırlama bağlantısı gönderilecek.');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            
            {/* Logo */}
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} resizeMode="contain" />
            </View>

            {/* Form */}
            <View style={styles.form}>
              
              {/* Username */}
              <View style={styles.inputGroup}>
                <TextInput
                  style={styles.input}
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Kullanıcı Adı"
                  placeholderTextColor="#AAAAAA"
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!loading}
                  onFocus={() => setFocusedInput('username')}
                  onBlur={() => setFocusedInput(null)}
                />
                <View style={[
                  styles.inputLine,
                  focusedInput === 'username' && styles.inputLineFocused,
                  errors.username && styles.inputLineError
                ]} />
                {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
              </View>

              {/* Password */}
              <View style={styles.inputGroup}>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[styles.input, styles.passwordInput]}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Şifre"
                    placeholderTextColor="#AAAAAA"
                    secureTextEntry={!showPassword}
                    editable={!loading}
                    onFocus={() => setFocusedInput('password')}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <EyeIcon visible={showPassword} />
                  </TouchableOpacity>
                </View>
                <View style={[
                  styles.inputLine,
                  focusedInput === 'password' && styles.inputLineFocused,
                  errors.password && styles.inputLineError
                ]} />
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>

              {/* Forgot password */}
              <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={handleForgotPassword}>
                  <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={[styles.loginButton, loading && styles.loginButtonDisabled]}
              onPress={handleLogin}
              activeOpacity={0.8}
              disabled={loading}
            >
              <Text style={styles.loginButtonText}>
                {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
              </Text>
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>© 2023 YourEye All Rights Reserved.</Text>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

LoginPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    replace: PropTypes.func,
  }),
};

LoginPage.defaultProps = {
  navigation: null,
};

export default LoginPage;
