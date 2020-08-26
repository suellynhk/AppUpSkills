import React from 'react';
import { Text, View,  Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

interface CarouselItem{
  title: string,
  image: string
};

const Carrossel: React.FC<CarouselItem> = ({ title, image }) => {
  const carouselItems = [
    {
      title: 'Empatia',
      image: 'https://d1x4bjge7r9nas.cloudfront.net/wp-content/uploads/2016/04/23214423/tumblr_static_tumblr_m78u9iwzjz1rbs3w3o1_500_large.jpg'
    },
    {
      title: 'Julgamento e tomada de decisão',
      image: 'https://31.media.tumblr.com/tumblr_m6ni2bfcSY1r5snloo1_500.png'
    },
    {
      title: 'Flexibilidade cognitiva',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwKPFGmwunYTm-zTi1EZ0JXDPJjw2NkRN49Q&usqp=CAU'
    },
    {
      title: 'Resolução de problemas complexos',
      image: 'https://i.pinimg.com/originals/79/46/5f/79465f822218e5bb321c3ec7f8002dfc.jpg',
    },
    {
      title: 'Inteligência emocional',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlnlVpvT-57YfguHnL6S8z6zgCarlecZ0nHw&usqp=CAU',
    },
    {
      title: 'Gestão de pessoas',
      image: 'https://www.socialdub.com/groupspictures/44278/442782469530031392695.jpg?x2',
    },
  ];

  function renderItem({item, index} : any) {
    return(
      <View style={styles.carouselItemContainer}>(
                <Text key={index} style={styles.title}>{item.title}</Text>
                <Image style={styles.carouselImg} source={{uri:`${item.image}`}} />
      </View>
    );
  }
 
    return (
      <View style={styles.container}>
      <Carousel
        showsHorizontalScrollIndicator
        layout={'stack'}
        useScrollView={true}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        loop={true}
        layoutCardOffset={18}
        snapToAlignment={"center"}
        renderItem={renderItem}
      />
    </View>)
};

export default Carrossel;

