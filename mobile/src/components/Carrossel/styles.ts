import {StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container: { 
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  
    carouselItemContainer:{
      alignItems: 'center',
      backgroundColor: '#333',
      borderRadius: 8,
      padding: 25,
      height: 300,
      width: 300,
    },
  
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF'
    },
  
    carouselImg:{
      marginTop: 10,
      width:'80%',
      height:'50%',
      borderRadius: 8
    },
  
  });

  export default styles;