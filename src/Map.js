import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker, InfoBox } from 'react-google-maps';

class Map extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var posList = this.props.response;
    var center;
    if (!posList) {
      // posList = false => tạo array, set center là điểm mặc định
      posList = [];
      center = {lat: 10.800388, lng:  106.576083}
    }
    else {
      // Chọn điểm đầu tiên làm center
      const firstPos = posList[0];
      center = {lat: parseFloat(firstPos.longitude), lng: parseFloat(firstPos.laitude)}
    }
    const GoogleMapExample = withGoogleMap( props => (
      <GoogleMap
        defaultCenter = {center}
        defaultZoom = {16}>

        {posList.map((row,i) => {
          return (
            <Marker position={{lat: parseFloat(row.longitude), lng: parseFloat(row.laitude)}} />
          )})}
      </GoogleMap>
    ));
    return(
       <div id = "googlemap" style={{'display':"none"}}>
         <GoogleMapExample
           containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
           mapElement={ <div style={{ height: `100%` }} /> }
         />
       </div>
    );
    }
 };
 export default Map;
