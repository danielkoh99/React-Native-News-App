import React from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Container, Content, Spinner ,Icon,Button} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
// import CoronaNewsData from "./coronaNewsData";
// import CoronaNews from './coronaNews'
// import { PieChart} from "react-native-svg-charts";
// import { Circle, G, Line,pieCentroid,labelCentroid } from 'react-native-svg'

let deviceWidth = Dimensions.get("window").width;

export default function StatsCondition({ stats }) {
  console.log(stats.data);
  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    

  };
 
  return (
    <Container style={{maxHeight:280}}>
      {stats.loading === false ? (
        <Content>
          <Text
            style={{ marginLeft: "auto", marginRight: "auto", fontWeight: "bold",fontSize:20 }}
          >
            Total cases: {stats.data.cases}
          </Text>
          <TouchableOpacity>
          <PieChart
         
            data={[
              {
                cases: stats.data.active,
                name: "Active",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
                color: "red",
              },
              {
                cases: stats.data.deaths,
                name: "Deaths",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
                color: "black",
              },
              {
                cases: stats.data.recovered,
                name: "Recovered",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
                color: "green",
              },
            ]}
            width={deviceWidth - 50}
            height={230}
            chartConfig={chartConfig}
            accessor="cases"
            // backgroundColor="blue"
            
            paddingLeft="18"
          />
          </TouchableOpacity>
{/*          
          <Text style={{ marginLeft: "auto", marginRight: "auto", fontWeight: "bold",fontSize:30 }}>
          Scroll down to see news
          </Text>
          
          <Icon type="Entypo" name="arrow-with-circle-down" style={{fontSize:100, marginLeft:"auto",marginRight:"auto",marginTop:150}}/>
       */}
        </Content>
       
      ) : (
        <Spinner
          style={{ marginTop: "auto", marginBottom: "auto" }}
          color="blue"
        />
      )}
      
    </Container>
  );
}
