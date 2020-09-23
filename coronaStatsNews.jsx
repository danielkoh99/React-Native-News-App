import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
// import StatsCondition from './StatsCondition'

// import { PieChart } from "react-native-chart-kit";
import { Container, Content, Spinner ,Icon,Button} from "native-base";
import StatsCondition from './StatsCondition';

    export default function CoronaStats() {

    
        let [stats, setStats] = useState({
    loading:true,
    data:[]
  });
       function getAllStatistics(){
          fetch("https://disease.sh/v2/all")
          .then(res => {
            if (res.status === 200) {
              console.log(res.status);
              res.json()
              .then(res => {
                console.log(res);
                setStats({
                    loading:false,
                    data:res
                });
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
       } 
    useEffect(() => {
        setTimeout(() => {
            getAllStatistics()
        }, 500);
    
        
    }, [])  
        return (
        <StatsCondition stats={stats}/>
                
        );
      }
