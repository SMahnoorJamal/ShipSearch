import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        width: '101%',
        flexDirection: 'row',
//justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        margin: 9,
        padding: 4,
        height: 45,
    //backgroundColor:'orange',
        backgroundColor:'white',
    },
    input: {
        // position: 'relative',
        backgroundColor: 'white',
        width: '84%',
        // marginTop: 9,
        // justifyContent: "center",
        // paddingVertical: 7,
        marginLeft: 8
        // alignItems:"center"

    },
    textStyle: {
        // marginLeft: '42%',
        color: '#000000',
        resizeMode: 'contain',
        height: '40%',
        width: '40%',
    },
    iconStyle: {
        color: 'grey',
        resizeMode: 'contain',
        height: '65%',
        width: '76%',
alignSelf: 'flex-end'
    }
});