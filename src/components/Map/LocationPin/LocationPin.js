import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import locationPin from '@iconify/icons-entypo/location-pin';

const LocationPin = ({ text }) => {
    return (
    <div className="pin">
      <Icon icon={locationPin} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
    )
  }

  export default LocationPin;