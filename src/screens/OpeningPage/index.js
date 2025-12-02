// src/screens/OpeningPage/index.js
import React, { useCallback } from 'react';
import { View, Pressable, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

// Components
import Logo from '../../components/Logo';

// Constants
import { SCREENS } from '../../constants';

// Styles
import { styles } from './styles';

/**
 * Opening Page
 * Initial splash/landing screen of the app
 */
const OpeningPage = ({ navigation }) => {
  const handleContinue = useCallback(() => {
    navigation.navigate(SCREENS.INFO);
  }, [navigation]);

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
      <Pressable style={styles.container} onPress={handleContinue}>
        <View style={styles.topSection}>
          <Logo size={300} />
        </View>
      </Pressable>
    </>
  );
};

OpeningPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OpeningPage;
