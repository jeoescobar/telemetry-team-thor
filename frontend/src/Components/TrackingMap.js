import {React} from 'react'
import { Layout, Breadcrumb, Button, Radio, Row, Col, Descriptions, Tag, Divider } from 'antd';
import '../styles/header-styles.css'
import { RocketFilled } from '@ant-design/icons';
import { HorizontalBar } from 'react-chartjs-2';
import ReactMapGL, {Marker} from 'react-map-gl';
import { useState } from 'react';
import rocketmarker from '../img/cansatImg.png'
import gs from '../img/gs.png'
const {  Content, Footer } = Layout;

const token = 'pk.eyJ1IjoiamVvLWVzY29iYXIiLCJhIjoiY2ttejl1d2RhMGJ0dTJ1bm56Mjl4bm4xMCJ9.YQ2JJ_C16GXMGv4vuXHC1Q'

const TrackingMap = props =>{
    const [viewport, setViewport] = useState({
        width: 550,
        height: 400, 
        latitude: 19.512437395443325,
        longitude: -99.1263971539757,
        zoom: 17,
        pitch:50
      });

      const transformRequest = (url, resourceType) => {
        if (resourceType === 'Tile' && url.match('yourTileSource.com')) {
            return {
                url: url,
                headers: { 'Authorization': 'Bearer ' + 'pk.eyJ1IjoiamVvLWVzY29iYXIiLCJhIjoiY2ttejl1d2RhMGJ0dTJ1bm56Mjl4bm4xMCJ9.YQ2JJ_C16GXMGv4vuXHC1Q' }
            }
        }
        
    }
    return(
        <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={token}
      mapStyle="mapbox://styles/mapbox/satellite-v9"
    >
    <Marker key={"UPITTA"} latitude={19.512437395443325} longitude={-99.1263971539757}>
    <Button   style={{backgroundColor:'rgba(255,255,255,0)', borderColor:'rgba(255,255,255,0)'}}>
             <img src={rocketmarker} style={{height:'70px', width:'70px'}}></img>   
                </Button>
    
    </Marker> 

    <Marker key={"UPITTA"} latitude={19.5123} longitude={-99.1266}>
    <Button   style={{backgroundColor:'rgba(255,255,255,0)', borderColor:'rgba(255,255,255,0)'}}>
             <img src={gs} style={{height:'70px', width:'70px'}}></img>   
                </Button>
    
    </Marker> 

    </ReactMapGL>
    );
}
export default TrackingMap;