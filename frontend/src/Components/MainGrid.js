import {React} from 'react'
import { Layout, Breadcrumb, Button, Radio, Row, Col, Descriptions, Tag, Divider } from 'antd';
import '../styles/header-styles.css'
import { PoweroffOutlined,DownloadOutlined,ClockCircleOutlined } from '@ant-design/icons';
import Rotation from './Rotation'
import TempBar from './TempBar'
import VertBar from './VertBar'
import { Bar } from 'react-chartjs-2';
const {  Content, Footer } = Layout;






const MainGrid = props =>{
    return(
        <Row style={{"padding-top":"40px","padding-bottom":"40px"}}>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} >

            <Row style={{"padding-bottom": "30px"}}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{"background-color": "rgba(211, 211, 211, 0.6)"}}>
                <Divider style={{"color":"black"}}>Commands</Divider>
                <Descriptions title="Container Telemetry"></Descriptions>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='small' style={{ background: "Green", borderColor: "yellow", marginRight:"15px"}}>
                ON
                </Button>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='small' style={{ background: "red", borderColor: "yellow" }}>
                OFF
                </Button> 

                <br/><br/>
                <Descriptions title="Set Time"></Descriptions>
                <Button type="primary" shape="round" icon={<ClockCircleOutlined />} size='small' style={{ background: "Blue", borderColor: "yellow", marginRight:"15px"}}>
                
                </Button>
                
                <br/><br/>
                <Descriptions title="Simulation Mode Control"></Descriptions>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='small' style={{ background: "Green", borderColor: "yellow", marginRight:"15px"}}>
                Enable
                </Button>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='small' style={{ background: "blue", borderColor: "yellow" }}>
                Activate
                </Button> 
                <br/>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='small' style={{ background: "red", borderColor: "yellow", marginLeft:"47px", marginTop:"10px"}}>
                Disable
                </Button> 

                <br/><br/>

                <Descriptions title="Science Payload 1"></Descriptions>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='small' style={{ background: "Green", borderColor: "yellow", marginRight:"15px"}}>
                ON
                </Button>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='small' style={{ background: "red", borderColor: "yellow" }}>
                OFF
                </Button> 
                <br/><br/>

                <Descriptions title="Science Payload 2"></Descriptions>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='small' style={{ background: "Green", borderColor: "yellow", marginRight:"15px"}}>
                ON
                </Button>
                <Button type="primary" shape="round" icon={<PoweroffOutlined />} size='small' style={{ background: "red", borderColor: "yellow" }}>
                OFF
                </Button> 
                </Col>
            </Row>
            
            <Row >
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{"background-color": "rgba(211, 211, 211, 0.6)"}}>
                <Tag color="geekblue" style={{marginTop:"15px", fontSize: '25px'}}>MODE : Flight</Tag> <br/>
                <Tag color="geekblue" style={{marginTop:"15px", fontSize: '25px'}}>SP1 State : Released</Tag> <br/>
                <Tag color="geekblue" style={{marginTop:"15px", fontSize: '25px'}}>SP2 State : Released</Tag> <br/>
                <Tag color="geekblue" style={{marginTop:"15px", fontSize: '25px'}}>SP1 Count : 54</Tag> <br/>
                <Tag color="geekblue" style={{marginTop:"15px", fontSize: '25px'}}>SP2 Count : 54</Tag> <br/>
                <Tag color="geekblue" style={{marginTop:"15px", fontSize: '20px'}}>Software State : SP2_RELEASE</Tag> <br/>

                </Col>
            </Row>

        </Col>



        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{"backgroundColor":"rgba(111,111,111,0.4)"}}>
        <Row style={{"margin-bottom": "30px"}}>
        {/*Altitude vs time */ }
        <Col xs={11} sm={11} md={11} lg={11} xl={11} style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px", marginTop:"10px"}}>
        <Rotation uscolor={'rgb(255, 99, 132)'} usheight = {250} uswidth={700} uslabel={"Altitude vs Time"}/>
        </Col>


        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom:"10px", marginTop:"10px"}}>
        <Row>
        {/*Voltage bar*/ }    
        <Col xs={11} sm={11} md={11} lg={11} xl={11} style={{marginRight:"10px"}}>
            <VertBar usheight = {35} uswidth={50}/>
        </Col>
        {/*Temperature bar*/ }  
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <TempBar usheight = {30} uswidth={50}   />
        </Col>
        </Row>
        
        </Col>
        </Row>



        <Row style={{"margin-bottom": "30px","background-color": "rgba(211, 211, 211, 0.6)"}}>
        {/*Telemetry TeamID, Mission Time, Packet Count */}
        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
        <Tag color="geekblue" style={{marginTop:"15px", fontSize: '25px'}}>Team ID : 2092</Tag> <br/>
                <Tag color="geekblue" style={{marginTop:"15px", fontSize: '25px'}}>Mission Time : 13:15:24</Tag> <br/>
                <Tag color="geekblue" style={{marginTop:"15px", fontSize: '25px'}}>Packet Count : 108</Tag> <br/>
        </Col>

        {/*Map */}
        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
            asdasd
        </Col>
        </Row>




        <Row style={{"margin-bottom": "30px","background-color": "rgba(211, 211, 211, 0.6)"}}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} >asdasd</Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} >asdasd</Col>
        </Row>
        </Col>


        

        <Col xs={8} sm={8} md={8} lg={8} xl={8} >


            <Row style={{"padding-bottom": "30px","background-color": "rgba(211, 211, 211, 0.6)"}}>
            
            <Divider style={{"color":"black"}}>SP 1</Divider>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <Rotation uscolor={'rgb(255, 99, 132)'} usheight = {250} uswidth={700} uslabel={"Rotation Rate"}/>
                </Col>
                
                </Row>
                <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <TempBar uscolor={'rgb(255, 99, 132)'} usheight = {100} uswidth={700}></TempBar>
                </Col>
                </Row>
                
            </Col>
                
                
                
                
            </Row>
            


            <Row style={{"background-color": "rgba(211, 211, 211, 0.6)"}}>
            
            <Divider style={{"color":"black"}}>SP 2</Divider>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <Rotation uscolor={'rgba(13, 99, 132)'} usheight = {250} uswidth={700} uslabel={"Rotation Rate"}/>
                </Col>
                </Row>
                <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                <TempBar uscolor={'rgba(13, 99, 132)'} usheight = {100} uswidth={700}></TempBar>
                </Col>
                </Row>
                
                </Col>
                
                
                
                
            </Row>

        </Col>

        
        



      </Row>


    )
}

export default MainGrid;