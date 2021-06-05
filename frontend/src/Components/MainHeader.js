import {React} from 'react'
import { Layout, Menu, Image, Card} from 'antd';
import '../styles/header-styles.css'

import upiitalogo from '../img/upiitalogo.png'
import ipnlogo from '../img/ipnlogo.png'
import TeamThor1 from '../img/TeamThor1.png'
import MXN from '../img/MXN.png'

import { Table } from 'antd';
const { Header } = Layout;
const { SubMenu } = Menu;
const rightStyle = {position: 'absolute', top: 0, right: 0}

const centerStyle = {
    //position: 'relative',
    //display: 'flex',
    justifyContent: 'center',
    'padding-left': '400px',  
}

const MainHeader = props =>{
return(
      <Menu  mode="horizontal" theme="dark">
        
      <Menu.Item key="alipay" title="" style={{background: 'none'}}>
      <Image
        width={100}
        height={70}
        src={MXN}
      />
      <h style={{"color":"#0E184B"}}> . . . </h>
      <Image
        width={100}
        height={70}
        src={TeamThor1}
      />
      </Menu.Item>
      <h style={{"color":"#0E184B"}}> ......................................</h>
      <h style={{"color":"#0E184B"}}> ......................................</h>
      <h style={{"color":"#0E184B"}}> ......................................</h>
      <h style={{"color":"#0E184B"}}> ......................................</h>
      <h style={{"color":"#0E184B"}}> ......................................</h>
      <h style={{"color":"#0E184B"}}> ......................................</h>
      <h style={{"color":"#0E184B"}}> ......................................</h>
       
      <Menu.Item key="alipay1" className="modified-item" style={{"text-align": "justify-all", background: 'none'}} disabled title="" >   
        <span style={{"font-size": "50px", "color": "#D3D3D3"}}>Team Thor</span><br></br>
        <span>CanSat Competition</span>
        <span style={{"paddingLeft":"30px"}}>UPIITA - IPN</span>
      </Menu.Item>
      
      <Menu.Item key="alipay2" style={{float: 'right', background: 'none'}} title="">
      <Image
        width={90}
        height={90}
        src={upiitalogo}
      />
      <Image
        width={125}
        height={90}
        src={ipnlogo}
      />
      </Menu.Item>
      </Menu>
      )
}

export default MainHeader;