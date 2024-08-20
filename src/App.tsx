import '@pixi/events';
import { Stage } from '@pixi/react';
import React from 'react';
import './App.css';
import { SomeScene } from './SomeScene';

const App = () => {
    return (
        <Stage width={800} height={600} options={{ background: 0x1099bb }}>
            <SomeScene />
        </Stage>
    );
};

export default App;
