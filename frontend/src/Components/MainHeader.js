import {React} from 'react'
import { Layout, Menu, Image} from 'antd';
import '../styles/header-styles.css'

import upiitalogo from '../img/upiitalogo.png'
import ipnlogo from '../img/ipnlogo.png'
import TeamThor1 from '../img/TeamThor1.png'

import { Table } from 'antd';
const { Header } = Layout;


const { SubMenu } = Menu;

const centerStyle = {
    //position: 'relative',
    //display: 'flex',
    justifyContent: 'center',
    'padding-left': '400px',
    

  }

  const rightStyle = {position: 'absolute', top: 0, right: 0}
const MainHeader = props =>{

    return(
        
        <Menu  mode="horizontal" theme="dark">
        
        <Menu.Item key="alipay" title="">
            
        <Image
      width={90}
      height={60}
      src={TeamThor1}
    />
        </Menu.Item>
        
       
        <Menu.Item key="alipay" className="modified-item" style={centerStyle} disabled title="">
            
        <span style={{"font-size": "50px", "color": "#D3D3D3"}}>Team Thor</span><br></br>
        <span>CanSat Competition</span>
        <span style={{"paddingLeft":"30px"}}>UPIITA - IPN</span>
        </Menu.Item>
        
        
        
  



        <Menu.Item key="alipay" style={{float: 'right'}} title="">
        <Image
      width={90}
      height={60}
      src={ipnlogo}
    />
        </Menu.Item>

        <Menu.Item key="mail" style={{float: 'right'}}>
        <Image
      width={60}
      height={60}
      src={upiitalogo}
    />
        </Menu.Item>
      </Menu>

    )
}

export default MainHeader;