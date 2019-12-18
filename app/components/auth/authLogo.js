import React from 'react';
import {View, Image} from 'react-native';

import LogoImage from '../../assets/images/logo3.png';

const LogoComponent = ()=>(
    <View>
        <Image
            source={LogoImage}
            resizeMode={'contain'}
            style={{width: 270, height:150}}
        />
    </View>
)

export default LogoComponent;