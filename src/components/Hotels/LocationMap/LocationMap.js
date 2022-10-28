import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';


const location = {
    lat: 23.791599,
    lng: 90.389099
};

const Direction = () => {
    const [response, setResponse] = useState(null);
    const origin = 'khulna';
    const destination = 'bagerhat';
    const directionsCallback = res => {
        if (res != null) {
            setResponse(res);
        }
    }
    return (
        <div>
            <LoadScript
                googleMapsApiKey='AIzaSyBMoPocUaZhEPGj26getzChyk89YxJjifQ'
            >
                <GoogleMap
                    id='direction-example'
                    mapContainerStyle={{
                        height: '100vh',
                        width: '100%'
                    }}
                    // required
                    zoom={10}
                    // required
                    center={location}
                >

                    <DirectionsService
                        // required
                        options={{
                            origin: origin,
                            destination: destination,
                            travelMode: 'DRIVING'
                        }}
                        // required
                        callback={directionsCallback}
                    />


                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Direction;