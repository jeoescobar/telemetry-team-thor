import {React} from 'react'
import { Layout, Breadcrumb, Button, Radio, Row, Col, Descriptions, Tag, Divider } from 'antd';
import '../styles/header-styles.css'
import {myFunction} from '../split.js';
import { PoweroffOutlined,DownloadOutlind,ClockCircleOutlined, PrinterFilled } from '@ant-design/icons';
import Rotation from './Rotation'
import TempBar from './TempBar'
import VertBar from './VertBar'
import { Bar } from 'react-chartjs-2';
import TrackingMap from './TrackingMap'
import io from 'socket.io-client';
import {useEffect, useState } from 'react';

const {  Content, Footer } = Layout;
const socket = io('http://localhost:4000',{
    transports: ['websocket', 'polling']
});


//let variables = myFunction();


/*
var TEAMID = variables.TEAMID,
    MISSIONTIME=variables.MISSIONTIME,
    PACKETCOUNT=variables.PACKETCOUNT,
    PACKETTYPE=variables.PACKETTYPE,
    MODE=variables.MODE,
    SP1RELEASED=variables.SP1RELEASED,
    SP2RELEASED=variables.SP2RELEASED,
    ALTITUDE=variables.ALTITUDE,
    TEMP=variables.TEMP,
    VOLTAGE=variables.VOLTAGE,
    GPSTIME=variables.GPSTIME,
    GPSLATITUDE=variables.GPSLATITUDE,
    GPSLONGITUDE=variables.GPSLONGITUDE,
    GPSALTITUDE=variables.GPSALTITUDE,
    GPSSATS=variables.GPSSATS,
    SOFTWARESTATE=variables.SOFTWARESTATE,
    SP1PACKETCOUNT=variables.SP1PACKETCOUNT,
    SP2PACKETCOUNT=variables.SP2PACKETCOUNT,
    CMDECHO=variables.CMDECHO;
*/

 //TEAMID = variables.TEAMID,
 var    MISSIONTIME="",
    PACKETCOUNT="",
    PACKETTYPE="",
    MODE="",
    SP1RELEASED="",
    SP2RELEASED="",
    ALTITUDE="",
    
    VOLTAGE="",
    GPSTIME="",
    GPSLATITUDE="",
    GPSLONGITUDE="",
    GPSALTITUDE="",
    GPSSATS="",
    SOFTWARESTATE="",
    SP1PACKETCOUNT="",
    SP2PACKETCOUNT="",
    CMDECHO="";
    
const MainGrid = props =>{
    const [variables,setData] = useState({});
    const [TEAMID, setTEAMID] = useState("Team 1");
    const [TEMP, setTEMP] = useState(20);
    

    useEffect(()=>{
        socket.on('payloadContainer', (newPayload) =>{
            //setData((currentData) =>{[...data,cpuPercent]});
            //setData(currentData =>[currentData,newPayload]);
            
            //setTEAMID(TEAMID =>[...TEAMID,..."newPayload"]);
            setTEAMID(newPayload.value.teamname);
            setTEMP(newPayload.value.temperatura);
            //console.log(newPayload.value.teamname);
        });
    })



    return(
        <Row style={{"padding-top":"40px","padding-bottom":"40px"}}>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} >
            <Row style={{"padding-bottom": "30px","background-color": "rgba(14,21,53,0.7)"} }>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{"background-color": "rgba(14,21,53,0)"}}>
                <Divider style={{"font-size": "25px","color":"white"}}>Commands</Divider>
                <Divider style={{"color":"white"}}>Container Telemetry</Divider>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "Green", borderColor: "yellow", marginLeft:"75px"}}>
                ON
                </Button>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "red", borderColor: "yellow" , marginLeft:"50px"}}>
                OFF
                </Button> 

                <Divider style={{"color":"white"}}>Set Time</Divider>
                <Button type="primary" shape="round" icon={<ClockCircleOutlined />} size='large' style={{ background: "Blue", borderColor: "yellow", marginLeft:"160px"}}>
                </Button>
                
                <br/><br/>
                <Divider style={{"color":"white"}}>Simulation Mode Control</Divider>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "Green", borderColor: "yellow", marginLeft:"60px"}}>
                Enable
                </Button>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "blue", borderColor: "yellow" , marginLeft:"30px"}}>
                Activate
                </Button> 
                
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "red", borderColor: "yellow", marginLeft:"125px", marginTop:"20px"}}>
                Disable
                </Button> 

                <br/><br/>

                <Divider style={{"color":"white"}}>Science Payload 1</Divider>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "Green", borderColor: "yellow", marginLeft:"75px"}}>
                ON
                </Button>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "red", borderColor: "yellow", marginLeft:"50px"}}>
                OFF
                </Button> 
                <br/>

                <Divider style={{"color":"white"}}>Science Payload 2</Divider>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "Green", borderColor: "yellow", marginLeft:"75px"}}>
                ON
                </Button>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "red", borderColor: "yellow" ,marginLeft:"50px" }}>
                OFF
                </Button> 
                <br/><br/>
                </Col>
            </Row>
            
            <Row >
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{"background-color": "rgba(14,21,53,0.7)"}}>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px',"font-size": "25px"}}>MODE : {MODE}</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px',"font-size": "20px"}}>SP1 State : {SP1RELEASED}</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px',"font-size": "20px"}}>SP2 State : {SP2RELEASED}</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px',"font-size": "20px"}}>SP1 Count : {SP1PACKETCOUNT}</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px',"font-size": "20px"}}>SP2 Count : {SP2PACKETCOUNT}</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '20px',"font-size": "20px"}}>Software State : {SOFTWARESTATE}</Tag> <br/>

                </Col>
            </Row>

        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{"backgroundColor":"rgba(14,21,53,0.7)"}}>
        <Divider style={{"color":"white",fontSize:"25px"}}>Container Telemetry</Divider>
        <Row style={{"margin-bottom": "30px","backgroundColor":"rgba(14,21,53,0.7)"}}>
        {/*Altitude vs time */ }
        <Col xs={11} sm={11} md={11} lg={11} xl={11} style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px", marginTop:"10px"}}>
        <Rotation uscolor={'rgb(144, 12, 63)'} usheight = {250} uswidth={700} uslabel={"Altitude vs Time"}/>
        <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '20px'}}>Altitude:  {ALTITUDE}</Tag> <br/>
        </Col>


        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom:"4px", marginTop:"10px"}}>
        <Row>
        {/*Voltage bar*/ }    
        <Col xs={11} sm={11} md={11} lg={11} xl={11} style={{marginRight:"10px"}}>
            <VertBar usheight = {35} uswidth={50} uscolor={'rgb(255, 195, 0)'}/>
            <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '20px'}}>Voltage: {VOLTAGE}</Tag> <br/>
        </Col>
        {/*Temperature bar*/ }  
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <TempBar usheight = {32} uswidth={50} uscolor={'rgb(144, 12, 63)'}  tempVal = {TEMP} />
            <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '20px'}}>Temperature:  {TEMP} </Tag> <br/>
        </Col>
        </Row>
        
        </Col>
        </Row>



        <Row style={{"margin-bottom": "17px","background-color": "rgba(14,21,53,0.7)"}}>
        {/*Telemetry TeamID, Mission Time, Packet Count */}
        <Col xs={11} sm={11} md={11} lg={11} xl={11} >
        <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px', marginLeft:"175px"}} >Team ID : {TEAMID}</Tag> <br/>
        
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px', marginLeft:"125px"}}>Mission Time : {MISSIONTIME}</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px', marginLeft:"155px"}}>Packet Count : {PACKETCOUNT}</Tag> <br/>
                <br/><br/>
                <Divider style={{"color":"white",fontSize:"25px"}}>MQTT</Divider>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "Green", borderColor: "yellow", marginLeft:"140px"}}>
                ON
                </Button>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='large' style={{ background: "red", borderColor: "yellow", marginLeft:"50px"}}>
                OFF
                </Button> 
        </Col>

        {/*Map */}
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{marginLeft:"20px"}}>
            <TrackingMap/>
        </Col>
        </Row>




        <Row style={{"margin-bottom": "0px","background-color": "rgba(14,21,53,0.7)"}}>
        {/*GPS */}
        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
        <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '25px'}}>GPS Time : {GPSTIME}</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '25px'}}>GPS Latitude : {GPSLATITUDE}</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '25px'}}>GPS Longitude : {GPSLONGITUDE}</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '20px'}}>GPS Altitude : {GPSALTITUDE}</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '20px'}}>GPS Sat : {GPSSATS}
                </Tag> <br/>
        </Col>

        {/*Elevation and azimut */}
        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
        <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px'}}>Packet type : {PACKETTYPE}</Tag> <br/>
        <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px'}}>CMDECHO : {CMDECHO}</Tag> <br/>
        <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px'}}>GS to CanSat:  1000 m</Tag> <br/>
            </Col>
        </Row>
        </Col>


        

        <Col xs={8} sm={8} md={8} lg={8} xl={8} >

            {/*SP1 COLUMN */}
            <Row style={{"padding-bottom": "0px","background-color": "rgba(14,21,53,0.7)"}}>
            
            <Divider style={{"color":"white","fontSize":"25px"}}>SP 1 Telemetry</Divider>
            <Tag color="#0E1535" style={{marginTop:"0px", fontSize: '20px'}}>Altitude : 600 m</Tag> <br/>
            <Tag color="#0E1535" style={{marginTop:"0px", fontSize: '20px'}}>Rotation Rate : 60 rpm</Tag> 
            <br/><br/>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <Rotation uscolor={'rgb(0, 166, 30)'} usheight = {200} uswidth={700} uslabel={"Rotation Rate"}/>
                </Col>
                
                </Row>
                <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <TempBar uscolor={'rgb(0, 166, 30)'} usheight = {100} uswidth={700}></TempBar>
                <Tag color="#0E1535" style={{marginTop:"5px", fontSize: '20px'}}>Temperature : 350 k</Tag> <br/>
                </Col>
                </Row>
                
            </Col>
                
                
                
                
            </Row>
            


            <Row style={{"background-color": "rgba(14,21,53,0.7)"}}>
            
            <Divider style={{"color":"white","fontSize":"25px"}}>SP 2 Telemetry</Divider>
            <Tag color="#0E1535" style={{marginTop:"0px", fontSize: '20px'}}>Altitude : 600 m</Tag> <br/>
            <Tag color="#0E1535" style={{marginTop:"0px", fontSize: '20px'}}>Rotation Rate : 60 rpm</Tag> 
            <br/><br/>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <Rotation uscolor={'rgba(199, 0, 57)'} usheight = {200} uswidth={700} uslabel={"Rotation Rate"}/>
                </Col>
                </Row>
                <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <TempBar uscolor={'rgba(199, 0, 57)'} usheight = {100} uswidth={700}></TempBar>
                <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '20px'}}>Temperature : 350 k</Tag> <br/>
                </Col>
                </Row>
                
                </Col>
                    
            </Row>

        </Col>

      </Row>


    )
}

export default MainGrid;