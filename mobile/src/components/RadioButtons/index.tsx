import React from 'react';
import { View, Image,  Text } from 'react-native';
import styles from './styles';
import { RadioButton } from 'react-native-paper';

import uauImg from '../../assets/images/uau.png';
import muitoBomImg from '../../assets/images/muito-bom.png';
import podeMelhorarImg from '../../assets/images/pode-melhorar.png';
import deuRuimImg from '../../assets/images/deu-ruim.png';

const RadioButtonComponent= () => {

  const [value, setValue] = React.useState('Uauu!');
  return (

    <View style={styles.horizontalRadioButton}>
        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
            <View style={styles.radioButtons}>
                <RadioButton value="Uauu!" color='#4949E7'/> 
                <Image source={uauImg} style={styles.smileysImg}/>
                <Text style={styles.textLabel}>Uauu!</Text>
            </View>
            <View style={styles.radioButtons}>
                <RadioButton value="Muito bom!" color='#4949E7' />
                <Image source={muitoBomImg} style={styles.smileysImg}/>   
                <Text style={styles.textLabel}>Muito bom!</Text>
            </View>
            <View style={styles.radioButtons}>
                <RadioButton value="Pode melhorar!"color='#4949E7'  />
                <Image source={podeMelhorarImg} style={styles.smileysImg}/>
                <Text style={styles.textLabel}>Pode melhorar!</Text>
            </View>
            <View style={styles.radioButtons}>
                <RadioButton value="Deu ruim!" color='#4949E7' />
                <Image source={deuRuimImg} style={styles.smileysImg}/>
                <Text style={styles.textLabel}>Deu ruim!</Text> 
            </View>
        </RadioButton.Group>
    </View>
  );
};

export default RadioButtonComponent;
   