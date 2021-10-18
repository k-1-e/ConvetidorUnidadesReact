import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Button,  } from 'react-native';

export const Convertidor = () => {
    // varaibles de estado
    const [origen, setOrigen] = useState('cm')
    const [destino, setDestino] = useState('mt')
    const [convertir, setConvertir] = useState('0')
    const [resultado, setResultado] = useState('0')

        
    
    const handleChangenConvertir = (texto: string) => {
        const numero = parseFloat(texto)
        setConvertir(numero)       
    }
    //manejador de evento del boton 
    const handleCalcular = () => {
    //centimetros
        if (origen === 'cm' && destino === 'mt' ) {
            const result = convertir / 100
            setResultado(result)
        } 
        else if (origen === 'cm' && destino === 'mm') {
            const result = convertir * 10
            setResultado(result)
        }
        else if (origen === 'cm' && destino === 'kl') {
            const result = convertir / 100000
            setResultado(result)
        }
//milometros
        else if(origen === 'mm' && destino === 'cm') {
            const result = convertir / 10.000
            setResultado(result)
        } else if (origen === 'mm' && destino === 'mt') {
            const result = convertir / 1000
            setResultado(result)
        } else if (origen === 'mm' && destino === 'km') {
            const result = convertir / 1000000
            setResultado(result)
        }

        //metros
        else if(origen === 'mt' && destino === 'cm') {
            const result = convertir * 100
            setResultado(result)
        } else if (origen === 'mt' && destino === 'mm') {
            const result = convertir * 1000
            setResultado(result)
        } else if (origen === 'mt' && destino === 'km') {
            const result = convertir / 1000
            setResultado(result)
        }

        //kilometro
        else if(origen === 'km' && destino === 'cm') {
            const result = convertir * 100000
            setResultado(result)
        } else if (origen === 'km' && destino === 'mm') {
            const result = convertir * 1000000
            setResultado(result)
        } else if (origen === 'km' && destino === 'mt') {
            const result = convertir * 1000
            setResultado(result)
        }
        

        
    }
    return(
        // asignacion de las varaibles a caja de texto
       <View>
           
            <Text>Origen {origen}</Text>
            <TextInput
            defaultValue={origen}
            style={styles.input} 
            maxLength={2}
            onChangeText={setOrigen}
            //manejador por defecto setOrigen 
            />

             <Text>Destino {destino} </Text>
            <TextInput
                 defaultValue={destino}
                 style={styles.input} 
                 onChangeText={setDestino}
             />
              <Text>Convertir</Text>
            <TextInput
            defaultValue={convertir.toString()}
            style={styles.input} 
            onChangeText={
                    (text) => handleChangenConvertir(text)} />

            <Text>Resultado</Text>
            <TextInput 
            defaultValue={resultado.toString()}
            style={styles.inputError} />

            
            <Button
                title="Calcular"
                onPress= {handleCalcular}
                //manejador por defecto del boton calcular
            />
            
       </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 3,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: 'black',
    },
    inputError:{
        borderWidth: 3,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: 'black',
    },
    
})