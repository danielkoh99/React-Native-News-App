// import {Articles} from '../interfaces/all.interfaces'
// import { Container, Header, Title, Left, Icon, Right, Button, Body,  } from "native-base";
// import Data from './homeScreenData'
import { ScrollView,RefreshControl, Share,TouchableOpacity } from "react-native";
// import { WebView } from 'react-native-webview';
import React, {useState,useEffect,useCallback} from "react";
// import * as Font from "expo-font";
// import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from 'expo-web-browser'
import {
  Body,
  Card,
  CardItem,
  Thumbnail,
  Spinner,
  Left,
  Container,
  Right,
  Button,
  Icon,
  Content,
  Footer,
  Text
} from "native-base";
import CoronaStats from "./coronaStatsNews";


function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
const CryptoNews = ()=> {
 
  const [data,setData] = useState({
    loading:true,
    data:[]
  })
  const [refreshing, setRefreshing] = useState(false);





    
  
  
 const getNews =async () =>{
   await  fetch(
      "http://newsapi.org/v2/everything?q=cryptocurrency&apiKey=17b1135bbc5a451c98dc7c099df83559", 
    )
      .then((res) => res.json())

      // {data.articles.map((newsData: { author: string;title:string;urlToImage:string, description:string }) =>)

      .then((data) => {
        
        if (data.status === "ok") {
          
            setData({
              loading: false,
              data: data,
              
              
            });
        

            console.log(data.status);
        } else {
          console.log("shit");
        }
      });
      
     
 }

 const onRefresh = useCallback(() => {
  setRefreshing(true);
  wait(2000).then(getNews()).then(() => setRefreshing(false));
}, [refreshing]);
   
useEffect(()=>{
    
    setTimeout(() => {
      
     getNews()
    }, 2000);

},[]) 

    return (
      <Container >
      {/* <CoronaStats/> */}
      {data.data.status === "ok" ? (
        <Content  refreshControl={
           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} title="Loading..." />
         }>
        
        {data.data.articles.map((item,index) => (
           <Card  key={index} style={{ flex: 1 , borderRadius:10}}>
             <CardItem>
               <Left>
                 <Thumbnail source={{ uri: item.urlToImage }} />
                 <Body >
                   <Text style={{fontWeight:"bold"}} onPress={ ()=>
                
                     Linking.openURL(item.url) 
                   }>
                    {item.title}
                   </Text>
                
                         
                  
                   <Text>{item.publishedAt.replace("T", " ").slice(0, -1)}</Text>
                 </Body>
               </Left>
               
               <TouchableOpacity >
                 <Button style={{borderRadius:100,marginLeft:10}} onPress={()=>{
                   Share.share({title:item.title,message:item.url})
                 }} >
                 <Icon name="share"/>
               </Button>
                 </TouchableOpacity>
             </CardItem>
             <CardItem>
               <Body>
                 
                 {/* <Image source={{uri: item.urlToImage}} style={{height: 200, width: 200, flex: 1}}/> */}
 
                 <Text>{item.description}</Text>
                
               </Body>
             </CardItem>
             <CardItem>
               <Left>
            
                 </Left>
             </CardItem>
           </Card>
         ))}
  
   </Content>
      ):(
       <Spinner style={{marginTop:"auto", marginBottom:"auto"}} color='blue' />
   )}
 
   </Container>
      // <Data data={data}/>
  
     
            
     
    );
  
}

export default CryptoNews