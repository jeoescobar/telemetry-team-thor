import {React} from 'react'
import { Layout, Breadcrumb, Button } from 'antd';
import '../styles/header-styles.css'
import MainHeader from './MainHeader'
import MainGrid from './MainGrid'
const {  Content, Footer } = Layout;

const MainLayout = props =>{
  
    return(
  <Layout >
    <MainHeader></MainHeader> 


    <Content className="site-layout" style={{"background-size": "contain" ,padding: '0 60px',  "background-image": "url(\"https://www.pixel4k.com/wp-content/uploads/2018/12/dark-milky-way-galaxy-4k_1546279224.jpg\")" }}>
      
      <MainGrid ></MainGrid>

    </Content>
    <Footer  style={{ textAlign: 'center', "background-color": "rgba(0,0,0,1)","color": "#D3D3D3"}}>UPIITA-IPN ©2021 Created by Team Thor</Footer>
    <>
  </>
  </Layout>
    )
    };
    export default MainLayout;
