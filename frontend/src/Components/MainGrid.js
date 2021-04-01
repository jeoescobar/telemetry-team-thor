import {React} from 'react'
import { Layout, Breadcrumb, Button, Row, Col } from 'antd';
import '../styles/header-styles.css'

const {  Content, Footer } = Layout;

const MainGrid = props =>{
    return(
        <Row>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} >

            <Row style={{"padding-bottom": "30px"}}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{"backgroundColor":"pink"}}>
                <span>asdasdasdasd</span><br/>
                <span>asdasdasdasd</span><br/>
                <span>asdasdasdasd</span><br/>

                <span>asdasdasdasd</span><br/>
                <span>asdasdasdasd</span><br/>
                </Col>
            </Row>
            
            <Row >
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{"backgroundColor":"pink"}}>
                    asdasdasdadasda
                </Col>
            </Row>

        </Col>



        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{"backgroundColor":"red"}}>
          Col
        </Col>




        <Col xs={8} sm={8} md={8} lg={8} xl={8} >
            <Row style={{"padding-bottom": "30px"}}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{"backgroundColor":"pink"}}>
                <span>asdasdasdasd</span><br/>
                <span>asdasdasdasd</span><br/>
                <span>asdasdasdasd</span><br/>

                <span>asdasdasdasd</span><br/>
                <span>asdasdasdasd</span><br/>
                </Col>
            </Row>
            
            <Row >
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{"backgroundColor":"pink"}}>
                    asdasdasdadasda
                </Col>
            </Row>
        </Col>






      </Row>


    )
}

export default MainGrid;