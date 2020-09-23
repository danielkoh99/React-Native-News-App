// import {Articles} from '../interfaces/all.interfaces'
// import { Container, Header, Title, Left, Icon, Right, Button, Body,  } from "native-base";
// import Data from './homeScreenData'
import { ScrollView,RefreshControl, Share,TouchableOpacity } from "react-native";
// import { WebView } from 'react-native-webview';
import React, {useState,useEffect,useCallback} from "react";
// import * as Font from "expo-font";
// import { Ionicons } from "@expo/vector-icons";
import CoronaStats from './StatsCondition'

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
import CoronaNewsData from "./coronaNewsData";


function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
const CoronaNews = ()=> {
 
  const [data,setData] = useState({
    loading:true,
    data:[]
  })
  const [refreshing, setRefreshing] = useState(false);


  // const [refreshing, setRefreshing] = useState(false);
 
//   const onRefresh = React.useCallback(() => {
//       setRefreshing(true);
  
//       wait(1000).then(() => setRefreshing(false));
//     }, [refreshing]);
  
//   setData({loading:false})
// }




    
  
  
 const getNews =async () =>{
   await  fetch(
      "http://newsapi.org/v2/everything?q=corona&apiKey=17b1135bbc5a451c98dc7c099df83559", 
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
     <CoronaNewsData data={data}/>
    );
  
}

export default CoronaNews