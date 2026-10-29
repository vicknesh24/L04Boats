import React from 'react';

import { View, Text, Image } from 'react-native';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';






const Boat = ({ name, description, icon_name, poster }) => {

  return (

    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}>
        <FontAwesome6 name={icon_name} size={30} color="#B23B23" />
        {name}


      </Text>
      <text>
        {description}
        </text> 

      <Image source={poster} style={{ width: 400, height: 500 }} />

 
        

        

       

    </View>

  );

};



export default Boat;

