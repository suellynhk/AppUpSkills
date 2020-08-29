import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';


interface CarouselItem {
    key: any,
    index: any,
    title: string,
    image: string
  }
  

export default class SimpleCarousel extends React.Component {

 
    constructor(props:any){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
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
            }
          ]        
      }
    }

    _renderItem({item, index}:any){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}