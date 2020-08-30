import React from 'react';
import { Text, View,  Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';


interface CarouselItem {
  index: number,
  title: string,
  image: string,
}

function CarrosselColaborator()  {
  const carouselItems : CarouselItem[]= [
    {
      index: 1,
      title: 'Julgamento e tomada de decisão',
      image: 'https://i.imgur.com/Sj73uHQ.png'
    },
    {
      index: 2,
      title: 'Flexibilidade',
      image: 'https://i.imgur.com/ySF3CtB.png'
    },
    {
      index: 3,
      title: 'Resolução de problemas complexos',
      image: 'https://i.imgur.com/7qjSejG.png',
    },
    {
      index: 4,
      title: 'Inteligência emocional',
      image: 'https://i.imgur.com/SS8qiJH.png',
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
        sliderWidth={Dimensions.get('window').width}
        itemWidth={290}
        loop={true}
        activeSlideAlignment={'center'}
        renderItem={renderItem}
      />
      </View>
    )
};

export default CarrosselColaborator;

