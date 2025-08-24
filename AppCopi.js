import { useState } from 'react';

import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

console.log(width, height);

export default function App(){

    // estado de React
    const [userName, setUserName] = useState("MicJ025");

    //array 
    const myPlayList = [
        {"id": 1, 'value': "Cansiones para hacer Ejercicio"},
        {"id": 2, 'value': "Pop Music"},
        {"id": 3, 'value': "Mis Rocks"},
        {"id": 4, 'value': "Cansiones para oir en el bus"},
        {"id": 5, 'value': "Cansiones Engish"},
    ]

    //variable 
    const name = "MichaelJackson";
    
    //funciones
    function ChangeName(){
        // alert("Nuevo nombre")
        setUserName(name)
    }
    const getItem = ({item}) =>{
        alert(item.value);
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.box2}>
                    <View style={styles.viewImg}>
                        <Image
                        // source={require('./assets/images/j0432621_400x400.png')}
                        source={{uri: 'https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/www.slantmagazine.com/wp-content/uploads/2023/08/michaeljackson.jpg'}}
                        style={{ width: 100, height: 100 }}
                    />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.txtUser}>{userName}</Text>
                        <Text ><Text style={{fontWeight: 'bold'}}>100k</Text> Seguidores - Siguiendo 43</Text>
                    </View>
                    
                </View>
                <TouchableOpacity
                onPress={() => ChangeName()} 
                style={styles.btn}>
                    <Text style={styles.txtBtn}>Editar Perfil</Text>
                </TouchableOpacity>

               <View style={styles.viewPlayL}>
                 <Text style={styles.txtUser}>PlayLists</Text>
                 {/* <ScrollView>
                    {
                        myPlayList.map((item, index)=> (
                                <Text style={{fontSize: 19}}
                                key={index}>{item.value}</Text>
                        ))
                    }
                 </ScrollView> */}
                 
                 <FlatList
                    data={myPlayList}
                    renderItem={({item})=>(
                        <TouchableOpacity 
                           onPress={() => getItem({item})}
                           style={{margin: 7, borderBottomWidth: 1}}
                        >
                            <Text>{item.value}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => item.id.toString()}
                 />                 
               </View>
            </View>

        </SafeAreaView>
    )
}

//estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // borderWidth: 16,
        // borderColor: 'green'
    },
    card:{
        borderWidth: 0.5,
        borderColor: '#ecf0edff',
        marginTop: 30,
        // width: '90%',
        // height: '40%',
        width: width*0.9,
        height: height*0.4,
        elevation: 5,
        shadowColor: '#000',
        borderRadius: 5,
        overflow: 'hidden'

    },
    box2: {
        flexDirection: 'row',
        // borderWidth: 5,
        // borderColor: '#aa0f0fff',
        // width: '70%',
        // height: '20%',
        padding: 7,
        marginTop: 10,
        marginLeft: 12
        
    },
    viewImg:{
        borderWidth:2,
        borderRadius: 50,
        overflow: 'hidden',
        borderColor: '#13099cff'
    },
    txtUser:{
        fontSize: 25,
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 15
    },
    btn: {
        // flex: 1,
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: 'darkblue',
        width: 180,
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20,
        justifyContent: 'center'
    },
    txtBtn:{
        fontSize: 17,
        color: 'white',
        textAlign: 'center'
    },
    viewPlayL:{
        borderWidth: 1,
        borderColor: 'green'
    }
})