import React from 'react'
import classes from './PizzaImage.scss'
import PizzaImage from '../../assets/violin.jpg'

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <p>hello</p>
        <img src={PizzaImage} className={classes.PizzaImg}/>
    </div> 
)

export default pizzaImage