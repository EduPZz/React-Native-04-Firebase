import React, { useState } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import estiloItemLista from './estiloItemLista';
import { LinearGradient } from 'expo-linear-gradient';

const ItemLista = ({data, detalhe}) => {

    const [item, setItem] = useState(data);

    return (
        <TouchableOpacity style={estiloItemLista.areaItens} onPress={detalhe}>

            <LinearGradient colors={['#C1BBF5', '#D5D1F8', '#D5D1F8', '#C1BBF5']}>
                <Text style={estiloItemLista.itemTitulo}> {item.titulo} </Text>
                <Text style={estiloItemLista.itemSubTitulo}> {item.autor} ({item.anoPublicacao}) </Text>
                <Text> </Text>
                {/*<Image 
                    resizeMode='contain'
                    style={estiloItemLista.itemFoto}
                    source={item.foto}
                />*/}
            </LinearGradient>

        </TouchableOpacity>
    );
}

export default ItemLista;