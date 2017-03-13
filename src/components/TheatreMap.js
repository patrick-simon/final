var React = require('react')

var ReactGMaps = require('react-gmaps')
var {Gmaps, Marker} = ReactGMaps

var movietheatres = require('../data/theatres.json')

var CineMap = React.createClass({
  render: function() {
    return (
      <div className="map col-sm-12">
        <Gmaps width={'100%'}
               height={'480px'}
               lat={'41.8929482'}
               lng={'-87.6248932'}
               zoom={11}
               loadingMessage={'Lets Dance...'}
               params={{v: '3.exp', key: 'AIzaSyB3p_xQIXsFMDGLYNEiVkgW5fsVSUOd01c'}}>
          {movietheatres.map(function(theatre) {
            return <Marker lat={theatre.lat} lng={theatre.long} />
          })}
        </Gmaps>
      </div>
    )
  }
})

module.exports = CineMap
