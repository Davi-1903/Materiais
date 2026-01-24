import { useState } from 'react';
import Questions from './components/Questions';
import FlashCards from './components/FlashCards';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

export default function App() {
    const [selected, setSelected] = useState('questions');

    function getMaterial(selected) {
        if (selected === 'questions') return <Questions />;
        if (selected === 'flashcards') return <FlashCards />;
        if (selected === 'quiz') return <Quiz />;
    }

    return (
        <div className='wrapper'>
            {getMaterial(selected)}
            <Footer selected={selected} setSelected={setSelected} />
        </div>
    );
}
