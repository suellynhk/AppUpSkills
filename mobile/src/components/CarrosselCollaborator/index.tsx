import React from 'react';
import { Text, View,  Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


interface CarouselItem {
  id: number,
  title: string,
  image: string,
}

function CarrosselColaborator()  {
  const carouselItems : CarouselItem[]= [
    {
      id: 1,
      title: 'Julgamento e tomada de decisão',
      image: 'https://i.imgur.com/Sj73uHQ.png'
    },
    {
      id: 2,
      title: 'Flexibilidade',
      image: 'https://i.imgur.com/ySF3CtB.png'
    },
    {
      id: 3,
      title: 'Resolução de problemas complexos',
      image: 'https://i.imgur.com/7qjSejG.png',
    },
    {
      id: 4,
      title: 'Inteligência emocional',
      image: 'https://i.imgur.com/SS8qiJH.png',
    },

  ];

const {navigate} = useNavigation();
function handleNavigateToMicrolearning({id}:any) { 

  if (id === 1) {
    navigate('MicrolearningJudgmentCollaborator');
  }
  if(id === 2){
    navigate('MicrolearningFlexibilityCollaborator');
  }
  if(id == 3){
    navigate('MicrolearningComplexProblemsCollaborator');
  }
  if(id == 4){
    navigate('MicrolearningEmotionalIntelligenceCollaborator');
  }
}

  function renderItem({item, index}:any) {
    return(
      <View style={styles.carouselItemContainer}>
        <Text key={index} style={styles.title}>{item.title}</Text>
        <Image style={styles.carouselImg} source={{uri:`${item.image}`}}/>
        <RectButton onPress={() => handleNavigateToMicrolearning(item)} style={styles.buttons}>
          <Text style={styles.textButton}>
             Microlearning
          </Text>
      </RectButton>
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

