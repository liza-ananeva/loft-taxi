import React, { PureComponent } from 'react';
import mapboxgl from 'mapbox-gl';

export class Map extends PureComponent {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken =
            'pk.eyJ1IjoibGl6YS1hbmFuZXZhIiwiYSI6ImNrY2Y1ZjFmNTBldTYyc3BiOW1la2s4dGoifQ.kBHDsYxJEau6-rijQnZPRg';
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [37.62, 55.75],
            zoom: 12,
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='map' ref={this.mapContainer} />
            </div>
        );
    }
}
