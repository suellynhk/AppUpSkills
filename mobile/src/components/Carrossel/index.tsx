import React from 'react';
import { Text, View,  Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

interface CarouselItem {
  index: number,
  title: string,
  image: string,
}

function Carrossel()  {
  const carouselItems : CarouselItem[]= [
    {
      index: 1,
      title: 'Julgamento e tomada de decisão',
      image: 'https://i.imgur.com/oLRUR6n.png'
    },
    {
      index: 2,
      title: 'Flexibilidade',
      image: 'https://i.imgur.com/VHqRMH5.png'
    },
    {
      index: 3,
      title: 'Resolução de problemas complexos',
      image: 'https://i.imgur.com/tjKU4pE.png',
    },
    {
      index: 4,
      title: 'Inteligência emocional',
      image: 'https://i.imgur.com/KMtRE6S.png',
    },
    {
      index: 5,
      title: 'Gestão de pessoas',
      image: 'https://i.imgur.com/RnUGTxb.png',
    }
  ];

  function renderItem({item, index}:any) {
    return(
      <View style={styles.carouselItemContainer}>
        <Text key={index} style={styles.title}>{item.title}</Text>
        <Image style={styles.carouselImg} source={{uri:`${item.image}`}}/>
      </View>
    );
  }
 
    return (
      <View style={styles.container}>
      <Carousel
        showsHorizontalScrollIndicator
        inactiveSlideScale={0.92}
        inactiveSlideOpacity={0.5}
        useScrollView={true}
        data={carouselItems}
        sliderWidth={350}
        itemWidth={260}
        loop={true}
        activeSlideAlignment={'center'}
        renderItem={renderItem}

      />
      </View>
    )
};

export default Carrossel;

