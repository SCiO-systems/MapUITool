import React from 'react';
import {render} from 'react-dom';
import Map from './map';
import './css/leaflet-sidebar.css';



class App extends React.Component {

    render() {
        return (
            <div>
                <Map/>

            </div>


        );
    }
}

render(<App/>, document.getElementById('root'));

