import React from 'react';
import { ScrollView, Text } from 'react-native';
import Boat from './components/Boats';

const AllBoats = () => {
  return (
    <ScrollView>
      <Text
      style={{ fontSize: 35, fontWeight: 'bold', textAlign: 'center' }}
      >Get A Boat - For Sale</Text>
      <Text> </Text>

      <Boat
        name="SEA RAY 500 SUNDANCER"
        description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
        icon_name="sailboat"
        poster={require('./img/sea_ray.jpg')}
      />

      <Boat
        name="FOUR WINNS HORIZON 180"
        description="A sporty look and refined details truly set the Horizon 180 above all others."
        icon_name="sailboat"
        poster={require('./img/four_winns.jpg')}
      />

      <Boat
        name="FLIPPER 640 ST"
        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
        icon_name="sailboat"
        poster={require('./img/flipper.jpg')}
      />

      <Boat
        name="PRINCESS V48"
        description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck salon model, available with the option of a climate controlled interior."
        icon_name="sailboat"
        poster={require('./img/princess.jpg')}
      />

      <Boat
        name="BAYLINER 175 BOWRIDER"
        description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
        icon_name="sailboat"
        poster={require('./img/bayliner.jpg')}
      />

      <Boat
        name="FAIRLINE TARGA 47"
        description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
        icon_name="sailboat"
        poster={require('./img/fairline.jpg')}
      />
    </ScrollView>
  );
};

export default AllBoats;