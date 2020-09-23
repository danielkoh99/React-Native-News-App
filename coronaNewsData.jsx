import React , {useState,useEffect}from "react";
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
  Content
} from "native-base";
import * as WebBrowser from 'expo-web-browser'
import {  SafeAreaView,View,Text, Linking,ScrollView, Share,TouchableOpacity } from "react-native";

import CoronaStats from "./coronaStatsNews";


const CoronaNewsData = (props) => {
  console.log(props.data);

  return (
   <Container>
    
     {props.data.data.status === "ok" ? (
       <Content>
       <CoronaStats/>
       {props.data.data.articles.map((item,index) => (
          <Card key={index} style={{ flex: 1 , borderRadius:10}}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: item.urlToImage }} />
                <Body >
                  <Text style={{fontWeight:"bold"}} onPress={ ()=>
               
                    WebBrowser.openBrowserAsync(item.url)
                  }>
                   {item.title}
                  </Text>
               
                        
                 
                  <Text>{item.publishedAt.replace("T", " ").slice(0, -1)}</Text>
                </Body>
              </Left>
              <TouchableOpacity >
                <Button style={{borderRadius:100,marginLeft:10}} onPress={()=>{
                  Share.share({title:item.title,message: item.url})
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
              
            </CardItem>
          </Card>
        ))}
  
  </Content>
     ):(
      <Spinner style={{marginTop:"auto", marginBottom:"auto"}} color='blue' />
  )}
  </Container>
   
  );
};
export default CoronaNewsData;

