import {React} from 'react'
import { Layout, Breadcrumb, Button, Radio, Row, Col, Descriptions, Tag, Divider } from 'antd';
import '../styles/header-styles.css'
import { PoweroffOutlined,DownloadOutlined,ClockCircleOutlined } from '@ant-design/icons';
import { Bar } from 'react-chartjs-2';
const {  Content, Footer } = Layout;




const VertBar = props =>{

    const data = {
        labels: ['Voltage'],
        datasets: [
          {
            label: 'Voltage',
            data: [12],
            backgroundColor: [
              'rgba(13, 99, 132)'
            ],
            borderColor: [
              'rgba(13, 99, 132, 1)'
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
            <Bar data={data} options={options} width={props.uswidth} height={props.usheight} />
        </div>
        

    )
}

export default VertBar;