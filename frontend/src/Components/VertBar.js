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
            data: [props.volVal],
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
            <Bar data={data} options={options} width={props.uswidth} height={props.usheight} options={{ scales:{yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 10
          },
        },
      ] },}}/>
        </div>
        

    )
}

export default VertBar;