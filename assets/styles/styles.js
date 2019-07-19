import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    txt: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
      padding: 20,
      alignContent: 'center',
      },
  
    btn:{
      marginTop:10    
    },
  
    img:{
      
      width: 'auto',
      flex:1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  
    },
  
    inner:{
      flex: 1,
      width:'100%',
      height:'100%',
      backgroundColor: 'rgba(175,175,175,0.2)'  
      
    },
  
    userback:{
      flex: 2,
      maxWidth: '85%',
      
     },
  
     head:{
       fontSize: 90,
       fontFamily: 'freescpt',
       textAlign: 'center',
       color: 'black'
     }
    
  })