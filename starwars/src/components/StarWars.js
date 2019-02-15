import React from 'react';
import StarWarsList from './StarWarsList';

const StarWars = props => {
    return(
        <div>
            <StarWarsList chars={props.charsList}/>  {/*component to*/}
        </div>
    )
}

export default StarWars;