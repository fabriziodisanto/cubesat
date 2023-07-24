import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate()
    const [value, setValue] = useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <header>
                <h1>S&L CUBESAT</h1>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: '' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="1" label="PANELES SOLARES" onClick={() => navigate('/panelessolares')} />
                        <Tab value="2" label="SOBRE NOSOTROS" onClick={() => navigate('/nosotros')} />
                        <Tab value="3" label="CONTACTO" onClick={() => navigate('/contacto')} />
                    </Tabs>
                </Box>
            </header>
        </div>
    );
}

