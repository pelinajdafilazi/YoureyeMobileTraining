// src/screens/InfoPage/index.js
import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

// Constants
import { SCREENS } from '../../constants';

// Styles
import { styles } from './styles';

/**
 * Info Page
 * Onboarding information screen
 */
const InfoPage = ({ navigation }) => {
  const handleNext = useCallback(() => {
    navigation.navigate(SCREENS.LOGIN);
  }, [navigation]);

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
      <View style={styles.container}>
        {/* Dekoratif arka plan şekilleri */}
        <View style={styles.backgroundShapes}>
          <View style={[styles.shape, styles.shapeTopLeft]} />
          <View style={[styles.shape, styles.shapeCenter]} />
          <View style={[styles.shape, styles.shapeBottomRight]} />
          <View style={[styles.shape, styles.shapeBottomLeft]} />
        </View>

        {/* İçerik */}
        <View style={styles.content}>
          <Text style={styles.title}>Mevcut Kameralarınızı</Text>
          <Text style={styles.title2}>Akıllı Hale Getiriyoruz</Text>

          <Text style={styles.body}>
            İşletmenizde bulunan mevcut kameralarınızı yapay zeka
            teknolojisiyle akıllı hale getiriyoruz
          </Text>
        </View>

        {/* Alt kısım: dots + ok */}
        <View style={styles.footer}>
          <View style={styles.dotsWrapper}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={handleNext}
            activeOpacity={0.7}
          >
            <Icon name="chevron-right" size={22} style={styles.nextIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

InfoPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default InfoPage;
