import React from 'react';
import Navbar from './Navbar';

export default function App() {
    return (
        <div className='App'>
            <Navbar buttons={["Button 1", "Button 2", "Button 3"]}/>
        </div>
    );
}