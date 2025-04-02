import React, { useState, useEffect, useReducer, useMemo } from 'react';
import './custom.css';

const useCharacterCount = (init) => {
    const [text, setText] = useState(init);
    
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return [text, handleChange];
};


const characterReducer = (state, action) => {
    switch (action.type) {
        case 'TEXT_UPDATE':
            return { ...state, text: action.payload };
        default:
            return state;
    }
};

// Main Component
const CharCount = () => {
    const [state, dispatch] = useReducer(characterReducer, { text: '' });
    const [text, handleText] = useCharacterCount('');

    useEffect(() => {
        dispatch({ type: 'TEXT_UPDATE', payload: text });
    }, [text]);

    const characterCount = useMemo(() => {
        return state.text.length;
    }, [state.text]);

    return (
        <div className='container'>
            <textarea 
                value={text} 
                onChange={handleText} 
                maxLength={200} 
                placeholder="Type here..."
            />
            <p>Character Count: {characterCount}/200</p>
        </div>
    );
};

export default CharCount;

