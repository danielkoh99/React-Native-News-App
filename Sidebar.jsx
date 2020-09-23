import React from 'react';
// import { View, Text,RefreshControl } from 'react-native';
import { Content,Container , Header, Body,Title, Right, Icon, Button,List, ListItem, Item, Input, Text, Footer, FooterTab} from "native-base";
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,

} from '@react-navigation/drawer';
import HomeScreen from './homeScreen';
import CoronaNews from './coronaNews';
import {StatusBar} from 'react-native'
import CryptoNews from './CryptoNews'
import CoronaStats from './coronaStatsNews'
import TechNews from './Technology';
import BusinessNews from './Business';
import SportsNews from './Sports'
// import gasPrices from './weatherData';
import Weather from './weatherData';

function Feed({navigation}) {
  
    return (
     <Container>
         <StatusBar hidden/>
      <Header style={{backgroundColor:"darkblue"}}   >
     
      <Body>
      
            <Title style={{fontWeight:"bold", marginLeft:10}} >Top News</Title>
          </Body>

          
        
          <Right>
            
            <Button 
           
             onPress={() => navigation.toggleDrawer()}
            transparent>
        <Icon name='menu' />
              
            </Button>
          </Right>
         
        </Header>
        
 
      
        
 <HomeScreen/>


  {/* <Footer>
        <FooterTab  style={{backgroundColor:"darkblue"}}>
          <Button>
            <Icon name="search"></Icon>
            <Text>Search</Text>
          </Button>
          <Button >
            <Icon name="search"></Icon>
          </Button>
          <Button>
            <Icon name="search"></Icon>
          </Button>
        </FooterTab>
      </Footer> */}
 </Container>
    );
  }


  // function CustomDrawerContent(props) {
  //   return (
  //     <DrawerContentScrollView {...props}>
  //       {/* <Header searchBar rounded>
  //          <Item>
  //           <Icon name="ios-search" />
  //           <Input placeholder="Search" />
  //         </Item>
  //         <Button transparent>
  //           <Text>Search</Text>
  //         </Button>
  //         </Header>
  //       */}
  //       <DrawerItemList {...props} />
        
  //       <DrawerItem
  //         label="Help"
  //         onPress={() => Linking.openURL('https://mywebsite.com/help')}
  //       />
  //     </DrawerContentScrollView>
  //   );
  // }
  function Corona({navigation}) {
    return (
      <Container>
      <Header  style={{backgroundColor:"darkblue"}} androidStatusBarColor="black">
      
        <Body>
            
            <Title style={{fontWeight:"bold",marginLeft:10}} >CoronaNews</Title>
          </Body>
          <Right>
            
            <Button 
           
             onPress={() => navigation.toggleDrawer()}
            transparent>
        <Icon name='menu' />
              
            </Button>
          </Right>
        </Header>
        
      
     <CoronaNews/>
     
    </Container>
    );
  }
  function Crypto({navigation}) {
    return (
      <Container>
      <Header  style={{backgroundColor:"darkblue"}} androidStatusBarColor="black">
      
        <Body>
            
            <Title style={{fontWeight:"bold",marginLeft:10}} >CryptoNews</Title>
          </Body>
          <Right>
            
            <Button 
           
             onPress={() => navigation.toggleDrawer()}
            transparent>
        <Icon name='menu' />
              
            </Button>
          </Right>
        </Header>
        
        {/* <CoronaStats/> */}
     <CryptoNews/>
     
    </Container>
    );
  }
  // function FuelMap({navigation}) {
  //   return (
  //     <Container>
  //     <Header  style={{backgroundColor:"darkblue"}} androidStatusBarColor="black">
      
  //       <Body>
            
  //           <Title style={{fontWeight:"bold",marginLeft:10}} >Fuel Map</Title>
  //         </Body>
  //         <Right>
            
  //           <Button 
           
  //            onPress={() => navigation.toggleDrawer()}
  //           transparent>
  //       <Icon name='menu' />
              
  //           </Button>
  //         </Right>
  //       </Header>
        
       
  //    <GasPrices/>
     
  //   </Container>
  //   );
  // }
  
  function Sports({navigation}) {
    return (
      <Container>
      <Header  style={{backgroundColor:"darkblue"}} androidStatusBarColor="black">
      
        <Body>
            
            <Title style={{fontWeight:"bold",marginLeft:10}} >Sports</Title>
          </Body>
          <Right>
            
            <Button 
           
             onPress={() => navigation.toggleDrawer()}
            transparent>
        <Icon name='menu' />
              
            </Button>
          </Right>
        </Header>
        
        {/* <CoronaStats/> */}
     <SportsNews/>
     
    </Container>
    );
  }
  
  function Technology({navigation}) {
    return (
      <Container>
      <Header  style={{backgroundColor:"darkblue"}} androidStatusBarColor="black">
      
        <Body>
            
            <Title style={{fontWeight:"bold",marginLeft:10}} >Technology</Title>
          </Body>
          <Right>
            
            <Button 
           
             onPress={() => navigation.toggleDrawer()}
            transparent>
        <Icon name='menu' />
              
            </Button>
          </Right>
        </Header>
        
        {/* <CoronaStats/> */}
     <TechNews/>
     
    </Container>
    );
  }
  
  function Business({navigation}) {
    return (
      <Container>
      <Header  style={{backgroundColor:"darkblue"}} androidStatusBarColor="black">
      
        <Body>
            
            <Title style={{fontWeight:"bold",marginLeft:10}} >Business</Title>
          </Body>
          <Right>
            
            <Button 
           
             onPress={() => navigation.toggleDrawer()}
            transparent>
        <Icon name='menu' />
              
            </Button>
          </Right>
        </Header>
        
        {/* <CoronaStats/> */}
     <BusinessNews/>
     
    </Container>
    );
  }
  
  
  
  const Drawer = createDrawerNavigator();
  
  function MyDrawer() {
    return (
        <Drawer.Navigator
         drawerType="slide"
          minSwipeDistance={30} 
          drawerPosition="right"
      
          edgeWidth={30}
          drawerStyle={{width:200}}
          drawerContentOptions={{
            activeBackgroundColor:"lightblue",
            labelStyle:{color:"black",fontSize:20, marginTop:5},
            
          }}
          // drawerContent={(props)=><CustomDrawerContent {...props}/>}
          >
         
            <Drawer.Screen  name="Home" component={Feed} />
            
 {/* <Drawer.Screen name="Weahter" component={Weather}/> */}

            <Drawer.Screen name="Coronanews" component={Corona} />

            <Drawer.Screen name="Cryptonews" component={Crypto}/>

            <Drawer.Screen name="Business" component={Business}/>

            <Drawer.Screen name="Technology" component={Technology}/>
            
            <Drawer.Screen name="Sports" component={Sports}/>

           
            
      
        
       
      </Drawer.Navigator>
    );
  }
  export default function Home (){
      return(
          
      <NavigationContainer >
      
        <MyDrawer />
        
      </NavigationContainer>
    
      )
  }

