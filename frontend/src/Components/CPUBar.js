import {React} from 'react'
import io from 'socket.io-client';
import {useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    Line,
    LineChart,
    XAxis,
    YAxis,
    Tooltip
} from 'recharts';

const socket = io('http://localhost:4000',{
    transports: ['websocket', 'polling']
});




const CPUBar = props =>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        socket.on('cpu', (cpuPercent) =>{
                //setData((currentData) =>{[...data,cpuPercent]});
                setData(currentData =>[...currentData,cpuPercent]);
                
        });
    },[]);



    return(
        <div>
        <h1>Real Time CPU</h1>
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="name"/>
            <YAxis/>
            
            <Line  dataKey="value"  />
            
        </LineChart>
        </div>

    )

}

export default CPUBar;