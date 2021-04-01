import {React} from 'react'
import { Layout, Breadcrumb, Button, Radio, Row, Col, Descriptions, Tag, Divider } from 'antd';
import '../styles/header-styles.css'
import { PoweroffOutlined,DownloadOutlined,ClockCircleOutlined } from '@ant-design/icons';
import { HorizontalBar } from 'react-chartjs-2';
const {  Content, Footer } = Layout;




const TempBar = props =>{
    
  const data = {
    labels: ['Temperature'],
    datasets: [
      {
        label: 'Temperature',
        data: [350],
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