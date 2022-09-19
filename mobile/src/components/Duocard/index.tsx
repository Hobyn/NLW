import React from 'react';
import { styles } from './styles';
import {GameController} from 'phosphor-react-native'
import {View, TouchableOpacity, Text} from 'react-native'
import { DuoInfo } from '../DuoInfo';
import { THEME } from '../../theme';


export interface DuoCardProps {

   id: string;
   name:string; 
   useVoiceChannel: boolean;
   weekDays: string;
   yearsPlaying: number;
   hourStart: string
   hourEnd: string
}


interface Props {
  data: DuoCardProps;
  onConnect: () => void
}

export function Duocard( {data, onConnect}:Props) {
  return (
    <View style= {styles.container}>
      
      
      <DuoInfo 
        label="Nome"
        value={data.name}
      />
      
      <DuoInfo 
        label="Tempo de jogo"
        value={`${data.yearsPlaying}anos`} 
      />
      
      <DuoInfo 
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      
      <DuoInfo 
        label="Chamada de áudio"
        value={data.useVoiceChannel ? "sim" : "não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />
      
      <TouchableOpacity 
       style={styles.button} 
       onPress={onConnect}
      >

        <GameController 
        color={THEME.COLORS.TEXT}
        size={20}
        />

      </TouchableOpacity>
     


    </View>
  );
}