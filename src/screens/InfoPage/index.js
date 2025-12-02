// src/screens/InfoPage/index.js
import React, { useCallback, useState, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StatusBar, 
  FlatList, 
  Dimensions 
} from 'react-native';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

// Constants
import { SCREENS } from '../../constants';

// Styles
import { styles } from './styles';

const { width } = Dimensions.get('window');

/**
 * WiFi Signal Icon Component
 */
const WifiSignalIcon = ({ size = 120, color = 'rgba(230, 100, 0, 0.5)' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3C7.46 3 3.34 4.78 0.29 7.67C-0.1 8.04 -0.1 8.64 0.29 9.01C0.68 9.38 1.3 9.38 1.69 9.01C4.35 6.49 7.98 4.97 12 4.97C16.02 4.97 19.65 6.49 22.31 9.01C22.7 9.38 23.32 9.38 23.71 9.01C24.1 8.64 24.1 8.04 23.71 7.67C20.66 4.78 16.54 3 12 3Z"
      fill={color}
    />
    <Path
      d="M12 7C8.95 7 6.16 8.17 4.05 10.1C3.66 10.47 3.66 11.07 4.05 11.44C4.44 11.81 5.06 11.81 5.45 11.44C7.18 9.85 9.47 8.97 12 8.97C14.53 8.97 16.82 9.85 18.55 11.44C18.94 11.81 19.56 11.81 19.95 11.44C20.34 11.07 20.34 10.47 19.95 10.1C17.84 8.17 15.05 7 12 7Z"
      fill={color}
    />
    <Path
      d="M12 11C10.35 11 8.85 11.63 7.76 12.67C7.37 13.04 7.37 13.64 7.76 14.01C8.15 14.38 8.77 14.38 9.16 14.01C9.87 13.33 10.88 12.97 12 12.97C13.12 12.97 14.13 13.33 14.84 14.01C15.23 14.38 15.85 14.38 16.24 14.01C16.63 13.64 16.63 13.04 16.24 12.67C15.15 11.63 13.65 11 12 11Z"
      fill={color}
    />
    <Path
      d="M12 15C10.9 15 10 15.9 10 17C10 18.1 10.9 19 12 19C13.1 19 14 18.1 14 17C14 15.9 13.1 15 12 15Z"
      fill={color}
    />
  </Svg>
);

// Onboarding verileri
const ONBOARDING_DATA = [
  {
    id: '1',
    title: 'Mevcut Kameralarınızı',
    title2: 'Akıllı Hale Getiriyoruz',
    body: 'İşletmenizde bulunan mevcut güvenlik kameralarınızı yapay zeka teknolojisiyle donatarak akıllı bir güvenlik sistemine dönüştürüyoruz. Ek donanım maliyeti olmadan.',
  },
  {
    id: '2',
    title: 'Gerçek Zamanlı',
    title2: 'Analiz ve Takip',
    body: 'Yapay zeka destekli görüntü işleme sistemimiz ile anlık hareket analizi, nesne tanıma ve akıllı takip özellikleri sunuyoruz. Şüpheli durumları anında tespit edin.',
  },
  {
    id: '3',
    title: 'Güvenliğiniz',
    title2: 'Bizim Önceliğimiz',
    body: 'En son yapay zeka teknolojileri ile işletmenizin güvenliğini 7/24 koruma altına alıyoruz. Anlık bildirimler ve detaylı raporlarla her şeyden haberdar olun.',
  },
];

/**
 * Info Page
 * Onboarding information screen with swipeable pages
 */
const InfoPage = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // Sayfa değiştiğinde
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  // İleri butonu
  const handleNext = useCallback(() => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate(SCREENS.LOGIN);
    }
  }, [currentIndex, navigation]);

  // Her sayfa içeriği
  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width }]}>
      <View style={styles.textGroup}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title2}>{item.title2}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    </View>
  );

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
          <View style={styles.shapeTopLeft} />
          <View style={styles.shapeTopRight} />
          <View style={styles.shapeMidRight} />
          <View style={styles.shapeBottomLeft} />
          <View style={styles.shapeBottomRight} />
        </View>

        {/* WiFi/Sinyal İkonu */}
        <View style={styles.wifiIconContainer}>
          <WifiSignalIcon size={140} color="rgba(230, 100, 0, 0.5)" />
        </View>

        {/* Kaydırılabilir içerik */}
        <View style={styles.content}>
          <FlatList
            ref={flatListRef}
            data={ONBOARDING_DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            bounces={false}
          />
        </View>

        {/* Alt kısım: dots + ok */}
        <View style={styles.footer}>
          <View style={styles.dotsWrapper}>
            {ONBOARDING_DATA.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentIndex === index && styles.dotActive,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={handleNext}
            activeOpacity={0.7}
          >
            <Text style={styles.nextArrow}>›</Text>
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
