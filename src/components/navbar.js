import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const [value, setValue] = useState('one');

    useEffect(() => {

        navigate('/nosotros');
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit', 
        cursor: 'pointer'}

    return (
        <div>
            <header>
                <h1>
                    <a style={linkStyle} href="/nosotros">S&L CUBESAT</a>
                </h1>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: '' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="1" label="SOBRE NOSOTROS" onClick={() => navigate('/nosotros')} />
                        <Tab value="2" label="PANELES SOLARES" onClick={() => navigate('/panelessolares')} />

                        <Tab value="3" label="CONTACTO" onClick={() => navigate('/contacto')} />
                    </Tabs>
                </Box>
            </header>
        </div>
    );
}
