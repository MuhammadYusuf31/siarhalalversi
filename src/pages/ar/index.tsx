import * as React from 'react';
import { useSearchParams } from 'next/navigation';
// import {lookAt} from '@/pages/ar/component/look-at';

type ent = {
  lat: any,
  lon: any,
  id: string,
  look_at: string,
  model: string,
  scale: any
}

export default function ArPage() {
  let get, latlon
  let lat,lon
  // let latitude, longitude, id, target, model
  // let Lat = []
  // let Lon = []
  // if (typeof window !== 'undefined') {
  //   Lat = JSON.parse(localStorage.getItem("lat")|| '{}')
  //   Lon = JSON.parse(localStorage.getItem("lon")|| '{}')
  // }
  const seachParams = useSearchParams()
  get = seachParams.get('str')
  console.log(get)
  latlon = JSON.parse(get)
  // // if (data !== null) latlon = JSON.parse(data)

  // // console.log(lat[length-1])

  lat = -7.0
  lon = 102.0
  console.log(latlon)

  let list = []
  // let scene = document.querySelector('a-scene');
  if(latlon != null){
    lat = latlon.lat;
    lon = latlon.lon;
  }
  
  console.log(lat);
  console.log(lon);
  
 

  for (let i = lat.length-1; i > -1; i--) {
      let latitude = lat[i];
      let longitude = lon[i];
      console.log(latitude);
      console.log(longitude);
      let id = 'target'+i
      let target, model 
      let scale = '1 1 1'
      if (i != lat.length-1) {
        target = '#target'+(i+1)
        model = '#arrow'
        list.push(
          <a-entity gps-new-entity-place={'latitude:'+latitude+'; longitude:'+longitude} id={id} look-at={target} gltf-model={model} animation-mixer='loop-repeat' scale={scale}>
            </a-entity>
        )
      }
      else {
        target = '[gps-new-camera]'
        model = '#location'
        list.push(
          <a-entity gps-new-entity-place={'latitude:'+latitude+'; longitude:'+longitude} id={id} look-at={target} gltf-model={model} animation-mixer='loop-repeat' scale={scale}>
            <a-entity material='color: red' geometry='primitive: box' look-at={target} animation-mixer='loop-repeat' scale={scale}>
            </a-entity>
          </a-entity>
        )
      }
      
       
      
      // let model = document.createElement('a-entity');
      // model.setAttribute('gps-new-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
      // // model.setAttribute('material', { color: 'blue' } );
      // model.setAttribute('look-at', '[gps-new-camera]');
      // let id = 'target'+i;
      // let target = '#target'+(i+1);
      // model.setAttribute('id', id);
      // if (i != lat.length-1) {
      //     model.setAttribute('look-at', target);
      //     console.log(id);
      //     console.log(target);
      //     model.setAttribute('gltf-model', '#arrow');
      // } 
      // else{
      //     model.setAttribute('gltf-model', '#location');
      // }
      // model.setAttribute('animation-mixer', 'loop: repeat');
      // model.setAttribute('scale', '0.6633601288757837 0.6633601288757837 0.6633601288757837');
      // model.addEventListener('loaded', () => {
      //     window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
      // });
      // scene.appendChild(model);
  };


  return (
    <a-scene
      vr-mode-ui='enabled: false' 
      arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false' 
      renderer='antialias: true; alpha: true'>
        <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>
        <a-assets>
          <a-asset-item id="arrow" src="assets/direction.glb"></a-asset-item>
          <a-asset-item id="location" src="/assets/location.gltf"></a-asset-item>
        </a-assets>
      {list} 
	  </a-scene>
  );
}
