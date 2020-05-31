import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card-component'

export const CardList = props => {
    return <div className='card-list'>
    {
        props.fruit.map(fruit =>(
 
         <Card key={fruit.id} fruit={fruit}> </Card>

         ))
      }
    </div>
};