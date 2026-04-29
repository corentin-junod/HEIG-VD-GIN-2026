import './style.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import TileLayer from 'ol/layer/Tile.js';
import WMTS, {optionsFromCapabilities} from 'ol/source/WMTS.js';

const parser = new WMTSCapabilities();

fetch('https://wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml?lang=fr')
.then(response => {
  return response.text();
})
.then(text => {
  const result = parser.read(text);

  const road_tilelayer = new TileLayer({
    opacity: 1,
    source: new WMTS(optionsFromCapabilities(result, {
      layer: 'ch.swisstopo.swisstlm3d-strassen',
      matrixSet: 'EPSG:3857',
    })),
  })

  new Map({
    target: 'map',
    layers: [
      new TileLayer({
        opacity: 1,
        source: new WMTS(optionsFromCapabilities(result, {
          layer: 'ch.swisstopo.swisssurface3d-reliefschattierung-multidirektional',
          matrixSet: 'EPSG:3857',
        })),
      }),
      road_tilelayer
    ],
    view: new View({
      center: [854900, 5894900],
      zoom: 8,
    }),
  });


  const opacityInput = document.getElementById('opacity-input');

  function update(){
    road_tilelayer.setOpacity( parseFloat(opacityInput.value))
  }
  
  opacityInput.addEventListener('input', update);
  update()

});
