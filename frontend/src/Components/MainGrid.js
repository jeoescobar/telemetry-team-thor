import {React} from 'react'
import { Layout, Breadcrumb, Button, Radio, Row, Col, Descriptions, Tag, Divider } from 'antd';
import '../styles/header-styles.css'
import { PoweroffOutlined,DownloadOutlined,ClockCircleOutlined } from '@ant-design/icons';
import Rotation from './Rotation'
import TempBar from './TempBar'
import VertBar from './VertBar'
import { Bar } from 'react-chartjs-2';
import TrackingMap from './TrackingMap'
const {  Content, Footer } = Layout;

const MainGrid = props =>{
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
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px',"font-size": "25px"}}>MODE : Flight</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px',"font-size": "20px"}}>SP1 State : Released</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px',"font-size": "20px"}}>SP2 State : Released</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px',"font-size": "20px"}}>SP1 Count : 54</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px',"font-size": "20px"}}>SP2 Count : 54</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '20px',"font-size": "20px"}}>Software State : SP2_RELEASE</Tag> <br/>

                </Col>
            </Row>

        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{"backgroundColor":"rgba(14,21,53,0.7)"}}>
        <Divider style={{"color":"white",fontSize:"25px"}}>Container Telemetry</Divider>
        <Row style={{"margin-bottom": "30px","backgroundColor":"rgba(14,21,53,0.7)"}}>
        {/*Altitude vs time */ }
        <Col xs={11} sm={11} md={11} lg={11} xl={11} style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px", marginTop:"10px"}}>
        <Rotation uscolor={'rgb(144, 12, 63)'} usheight = {250} uswidth={700} uslabel={"Altitude vs Time"}/>
        <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '20px'}}>Altitude:  700 m</Tag> <br/>
        </Col>


        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom:"4px", marginTop:"10px"}}>
        <Row>
        {/*Voltage bar*/ }    
        <Col xs={11} sm={11} md={11} lg={11} xl={11} style={{marginRight:"10px"}}>
            <VertBar usheight = {35} uswidth={50} uscolor={'rgb(255, 195, 0)'}/>
            <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '20px'}}>Voltage:  9 V</Tag> <br/>
        </Col>
        {/*Temperature bar*/ }  
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <TempBar usheight = {32} uswidth={50} uscolor={'rgb(144, 12, 63)'}  />
            <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '20px'}}>Temperature:  350 K </Tag> <br/>
        </Col>
        </Row>
        
        </Col>
        </Row>



        <Row style={{"margin-bottom": "17px","background-color": "rgba(14,21,53,0.7)"}}>
        {/*Telemetry TeamID, Mission Time, Packet Count */}
        <Col xs={11} sm={11} md={11} lg={11} xl={11} >
        <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px', marginLeft:"175px"}}>Team ID : 2092</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px', marginLeft:"125px"}}>Mission Time : 13:15:24</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px', marginLeft:"155px"}}>Packet Count : 108</Tag> <br/>
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
        <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '25px'}}>GPS Time : 1500 s</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '25px'}}>GPS Latitude : 19.512437</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '25px'}}>GPS Longitude : -99.126397</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '20px'}}>GPS Altitude : 700 m</Tag> <br/>
                <Tag color="#0E1535" style={{marginTop:"10px", fontSize: '20px'}}>GPS Sat : 3
                </Tag> <br/>
        </Col>

        {/*Elevation and azimut */}
        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
        <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px'}}>Elevation : 9.81 °</Tag> <br/>
        <Tag color="#0E1535" style={{marginTop:"15px", fontSize: '25px'}}>Azimut : 69.20 °</Tag> <br/>
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