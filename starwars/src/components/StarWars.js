import React from 'react';
import StarWarsList from './StarWarsList';

const StarWars = props => {   {/*StarWars accepts props from StarWarsList*/}
    return(
        <div>
            <StarWarsList chars={props.charsList}/> 
        </div>
    )
}

export default StarWars;