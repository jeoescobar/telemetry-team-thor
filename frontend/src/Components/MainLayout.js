import {React} from 'react'
import { Layout, Breadcrumb, Button } from 'antd';
import '../styles/header-styles.css'
import MainHeader from './MainHeader'
import MainGrid from './MainGrid'
const {  Content, Footer } = Layout;

const MainLayout = props =>{
  
    return(
  <Layout>
    <MainHeader></MainHeader> 


    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      
      <MainGrid></MainGrid>

    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
  </Layout>
    )
    };
    export default MainLayout;
