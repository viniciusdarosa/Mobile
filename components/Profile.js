import {View, Text, TextInput, Image} from 'react-native';

export default function Profile(){
    return(
        <view>
            <text>Meu primeiro componente</text>
        </view>
    );    
} 

export function Person(){
    return(
        <view>
            <text>Meu componente pessoa :P   </text>
        </view>
    )
}

export function Vini(){
    return(
        <view>
            <text>Sempre estamos sozinhos</text>
            <Image source={require('../Sources/logoSatc2024.svg')}/>
        </view>
    )
}