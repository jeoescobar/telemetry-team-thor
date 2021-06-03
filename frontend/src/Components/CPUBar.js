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
    const [temperatura,setTemperatura] = useState([]);
    const [segundo,setSegundo] = useState([]);
    const [tercero,setTercero] = useState([]);
    const [ultimo,setUltimo] = useState([]);

    useEffect(()=>{
        socket.on('cpu', (cpuPercent) =>{
                //setData((currentData) =>{[...data,cpuPercent]});
                setData(currentData =>[...currentData,cpuPercent]);
                
        });

        socket.on('temper', (tempernew) =>{
            //setData((currentData) =>{[...data,cpuPercent]});
            setTemperatura(currentTemp =>[...currentTemp,tempernew]);
            
        });

        socket.on('segundo', (segnew) =>{
            //setData((currentData) =>{[...data,cpuPercent]});
            setSegundo(currentseg =>[...currentseg,segnew]);
            
        });

        socket.on('tercero', (ternew) =>{
            //setData((currentData) =>{[...data,cpuPercent]});
            setTercero(currentter =>[...currentter,ternew]);
            
        });

        socket.on('ultimo', (ultnew) =>{
            //setData((currentData) =>{[...data,cpuPercent]});
            setUltimo(currentult =>[...currentult,ultnew]);
            
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

        <LineChart width={500} height={300} data={temperatura}>
            <XAxis dataKey="name"/>
            <YAxis/>
            
            <Line  dataKey="value"  />
            
        </LineChart>

        <LineChart width={500} height={300} data={segundo}>
            <XAxis dataKey="name"/>
            <YAxis/>
            
            <Line  dataKey="value"  />
            
        </LineChart>

        <LineChart width={500} height={300} data={tercero}>
            <XAxis dataKey="name"/>
            <YAxis/>
            
            <Line  dataKey="value"  />
            
        </LineChart>

        <LineChart width={500} height={300} data={ultimo}>
            <XAxis dataKey="name"/>
            <YAxis/>
            
            <Line  dataKey="value"  />
            
        </LineChart>
        </div>

    )

}

export default CPUBar;