import {React} from 'react'
import { Layout, Breadcrumb, Button, Radio, Row, Col, Descriptions, Tag, Divider } from 'antd';
import '../styles/header-styles.css'
import { PoweroffOutlined,DownloadOutlined,ClockCircleOutlined } from '@ant-design/icons';
import { HorizontalBar } from 'react-chartjs-2';
import io from 'socket.io-client';
import {useEffect, useState } from 'react';

const {  Content, Footer } = Layout;

const socket = io('http://localhost:4000',{
    transports: ['websocket', 'polling']
});



const TempBar = props =>{
    
  const [temperatura,setTemperatura] = useState({
    labels: ['Temperature'],
    datasets: [
      {
        label: 'Temperature',
        data: 0,
        backgroundColor: [
          props.uscolor
        ],
        borderColor: [
          props.uscolor
        ],
        borderWidth: 1,
      },
    ],
  }
  );  

  useEffect(()=>{
    socket.on('temper', (tempernew) =>{
      //setData((currentData) =>{[...data,cpuPercent]});
      
      const nuevoTemperatura = {
        labels: ['Temperature'],
        datasets: [
          {
            label: 'Temperature',
            data: tempernew.value,
            backgroundColor: [
              props.uscolor
            ],
            borderColor: [
              props.uscolor
            ],
            borderWidth: 1,
          },
        ],
      }





      setTemperatura(currentTemp =>[currentTemp,nuevoTemperatura]);
      
  });
  },[]);


  console.log(temperatura);

  const data = {
    labels: ['Temperature'],
    datasets: [
      {
        label: 'Temperature',
        data: 0,
        backgroundColor: [
          props.uscolor
        ],
        borderColor: [
          props.uscolor
        ],
        borderWidth: 1,
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }



    return(
        <div style={{backgroundColor:"#FFF"}}>
            <HorizontalBar data={data} options={options} width={props.uswidth} height={props.usheight}/>
        </div>
        

    )

}

export default TempBar;