import React from 'react';
import './stylesheets/InstrumentGrid.css'

// temporary
import Device from './Device'
import deviceArray from '../deviceArray'

class InstrumentGrid extends React.Component {
    renderDeviceList = (device) => {
        return (
            <Device
                key={device.key}
                id={device.key}
                name={device.name}
                blurb={device.blurb}
                imageArray={device.imageArray}
            />
        )
    }
    render() {
        return (
            <ul className="instrument-list " id="instrument-list">
                {deviceArray.map(this.renderDeviceList)}
            </ul>
        )
    }
}

export default InstrumentGrid