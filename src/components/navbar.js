import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    
    const [value, setValue] = useState('one');
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth',block: "end", inline: "nearest" });
        }
    };
    
    const linkStyle = {
        textDecoration: 'none',
        color: 'black', 
        cursor: 'pointer'
    };
    
    return (
        <header className='sticky-navbar'>
            <h1>
                <a style={linkStyle} href="/whole">S&L CUBESAT</a>
            </h1>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: '' }}>
                <Tabs
        
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="1" label="SOBRE NOSOTROS" onClick={() => scrollToSection('aboutUsSection')} />
                    <Tab value="2" label="PANELES SOLARES" onClick={() => scrollToSection('carouselSection')} />
                    <Tab value="3" label="CONTACTO" onClick={() => scrollToSection('contactoSection')} />
                </Tabs>
            </Box>
        </header>
    );
}
