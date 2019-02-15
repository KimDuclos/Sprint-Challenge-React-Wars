import React from 'react';

const StarWarsList = props => {  //compoent to create list for each box, accepts props
    return(
        <div className='boxLayout'>  {/*holds the outer container of boxes*/}
        
         {/*maps through JSON data to return array*/}
        {props.chars.map(char => { 
            return(
                <div className='charBoxes' key={char.name}>  {/*content output for each box */}
                    <h1>{char.name}</h1>  
                        <p>Height: {char.height}</p>
                        <p>Mass: {char.mass}</p>
                        <p>Birth year: {char.birth_year}</p>
                        <p>Gender: {char.gender}</p>
                </div>
            )
        })}
        </div>
    )
}

export default StarWarsList;