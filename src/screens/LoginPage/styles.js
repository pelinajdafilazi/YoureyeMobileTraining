// src/screens/LoginPage/styles.js
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 40,
    justifyContent: 'center',
    minHeight: height,
  },

  /** LOGO **/
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 280,
    height: 80,
    tintColor: '#FF7B00',
  },

  /** FORM **/
  form: {
    marginBottom: 40,
    alignItems: 'center',
  },
  inputGroup: {
    marginBottom: 20,
    width: '90%',
  },
  input: {
    paddingTop: 8,
    paddingBottom: 6,
    paddingHorizontal: 0,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#333333',
    textAlign: 'left',
  },
  inputLine: {
    height: 1,
    backgroundColor: '#FF7B00',
  },
  inputLineFocused: {
    height: 2,
    backgroundColor: '#FF7B00',
    shadowColor: '#FF7B00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  inputLineError: {
    backgroundColor: '#EF4444',
  },
  errorText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#EF4444',
    marginTop: 4,
    textAlign: 'center',
  },

  /** PASSWORD **/
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  passwordInput: {
    flex: 1,
    paddingRight: 40,
  },
  eyeButton: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },

  /** FORGOT PASSWORD **/
  forgotPasswordContainer: {
    width: '90%',
    alignItems: 'flex-end',
    marginTop: 2,
  },
  forgotPassword: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#FF7B00',
    opacity: 0.7,
  },

  /** LOGIN BUTTON **/
  loginButton: {
    backgroundColor: '#FF7B00',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    shadowColor: '#FF7B00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonDisabled: {
    backgroundColor: '#CCCCCC',
    shadowOpacity: 0,
    elevation: 0,
  },
  loginButtonText: {
    fontSize: 13,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#FFFFFF',
  },

  /** FOOTER **/
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: '#FF7B00',
    opacity: 0.6,
  },
});
