import { View, Text, Dimensions } from "react-native";
import * as Location from "expo-location";
// import * as Permissions from 'expo-permissions';
import React, { useState, useEffect } from "react";
import {
  Body,
  Thumbnail,
  Image,
  Card,
  CardItem,
  Item,
  Input,
  Spinner,
  Left,
  Container,
  Right,
  Button,
  Icon,
  Content,
} from "native-base";

const Weather = () => {
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState({
    loading: true,
    weatherData: [],
  });
  // const getLocation = async() =>{
  //   let  {status}  = await Location.requestPermissionsAsync();
  //   // console.log(status)
  //   if (status !== "granted") {
  //     setErrorMsg("Permission to access location was denied");
  //   }else{
      
  //     let location = await Location.getLastKnownPositionAsync();
  //     console.log(location)
  // setTimeout(() => {
  //   setLocation(location.coords);
  // }, 2000);
  //   } 
  // }
 
  // setInterval(getLocation(),5000)
  useEffect(() => {
  
    
   
    setTimeout( () => {
      
      fetchByGeoLoc();
      
    }, 2000);
   
  }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }
  const fetchByGeoLoc =  async() => {
    let  {status}  = await Location.requestPermissionsAsync();
    let location = await Location.getLastKnownPositionAsync();
    // console.log(status)
    if (status === "granted") {
        
    fetch(
      `https://api.weatherbit.io/v2.0/current/daily?&lat=${location.coords.latitude}&lon=${location.coords.longitude}&key=be698e9e2aa04f948441aa061b9230bd&hours=48`
    )
      .then((res) => res.json())

      .then((data) => {
          if (data.count === 1) {
            setWeather({
              loading: false,
              weatherData: data,
            });
            console.log('location found')
          } else {
            // setWeather({
            //   loading: false,
            //   weatherData: data,
            // });
            console.log('location data not yet found')
          };
       
      

        // console.log(data);
      });
      // setLocation(location);
      // console.log(location)
    
   
    }else{
      
      setErrorMsg("Permission to access location was denied");
  
    } 

  };


 
  const url = "https://www.weatherbit.io/static/img/icons/";
  return (
    <Container style={{ maxHeight: 100 }}>
    
      {weather.weatherData.count === 1 ? (
        <View>
        {/* <Text>{text}</Text> */}
          {weather.weatherData.data.map((data) => (
            <Card style={{height:50}}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{ uri: url + data.weather.icon + ".png" }}
                  />
                  <Body>
                 
                    <Text style={{fontWeight:"bold", fontSize:20}}>{data.city_name}</Text>
                    <Text note>{data.weather.description}</Text>
                  </Body>
                </Left>
                <Right>
                <Text style={{fontSize:35}}>{data.temp} &#8451;</Text>
                </Right>
              </CardItem>
              
           
              {/* <CardItem>
                <Left>
                  <Text style={{fontSize:15}}>Sunrise: {data.sunrise}</Text>
                </Left>
                <Body>
                 
                </Body>
                <Right>
                  <Text style={{fontSize:15}}>Sunset: {data.sunset}</Text>
                </Right>
              </CardItem> */}
              {/* <Button>
                    <Icon name="arrow-down-outline"/>
                  </Button> */}
            </Card>
          ))}
        </View>
      ) : (
        <Card style={{maxHeight:50}}>
          <CardItem>
          <Text style={{fontWeight:"bold", fontSize:30 }}>Searching for location...</Text>
          </CardItem>
        </Card>
      )
       
      }
    </Container>
  );
};

export default Weather;
