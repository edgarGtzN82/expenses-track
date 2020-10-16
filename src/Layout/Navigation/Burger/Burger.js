import React from 'react';
import './Burger.css';

const Burger = (props) => {
    
    return (
       <>
            <div 
                className='styledDiv'
                onClick={props.clicked}  >
                <div className='divBurger'
                    style={props.burgerOpened ? { transform: 'rotate(45deg)' } : { transform: 'rotate(0)' }} />
                <div className='divBurger'
                    style={props.burgerOpened ? { transform: 'translate(-190%)' } : { transform: 'translate(0)' }} />
                <div className='divBurger'
                    style={props.burgerOpened ? { transform: 'rotate(-45deg)' } : {transform: 'rotate(0)'}} />
            </div>
        </>
    )
}

export default Burger;