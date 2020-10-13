import React, { useState, useEffect, useLayoutEffect } from 'react';
import './Burger.css';


const Burger = (props) => {
    
    const [open, setOpen] = useState(false);
    const [burgerStyle, setBurgerStyle] = useState('divBurger');
    const [size, setSize] = useState([0, 0]);

    const burgerClickHandle = () => {
        setOpen(!open);
    } 

    useEffect(() => {
        setBurgerStyle(open ? 'divBurgerOpen' : 'divBurger')
    }, [open])

    // Buscar unir estos 2 Hooks en uno solo... INVESTIGAR DESPUES
    useEffect(() => {
        if (size[0] > 680) {
            setOpen(false);
        }
    }, [size]);    
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
       <>
            <div 
                className='styledDiv'
                onClick={burgerClickHandle}  >
                <div className={burgerStyle}
                    style={open ? { transform: 'rotate(45deg)' } : { transform: 'rotate(0)' }} />
                <div className={burgerStyle} 
                    style={open ? { transform: 'translate(-160%)' } : { transform: 'translate(0)' }} />
                <div className={burgerStyle}
                    style={open ? { transform: 'rotate(-45deg)' } : {transform: 'rotate(0)'}} />
            </div>
        </>
    )
}

export default Burger;