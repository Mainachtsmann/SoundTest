import React from 'react'
import { Button } from "react-native"

const fetchLocation = props => {
    return(
        <Button title="GetLocation" onPress={props.onGetLocation} />
    )
}

export default fetchLocation