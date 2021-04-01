import {React} from 'react'
import { Layout, Breadcrumb, Button, Radio, Row, Col, Descriptions, Tag, Divider } from 'antd';
import '../styles/header-styles.css'
import { PoweroffOutlined,DownloadOutlined,ClockCircleOutlined } from '@ant-design/icons';
import { Line } from 'react-chartjs-2';
const {  Content, Footer } = Layout;





const Rotation = props =>{
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: props.uslabel,
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: props.uscolor,
            borderColor: props.uscolor,
            
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
            <Line data={data} options={options}  width={props.uswidth} height={props.usheight} />
        </div>
        

    )

}

export default Rotation;