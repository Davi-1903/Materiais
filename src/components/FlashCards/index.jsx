import { useState } from 'react';
import FlashCard from './components/FlashCard';
import flashcards from './flashcardsList';

export default function FlashCards() {
    const [toRight, setToRight] = useState(false);
    const [flashCards, setFlashCards] = useState(flashcards);

    function addToTop() {
        if (toRight) setFlashCards(prev => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
        setToRight(false);
    }

    return (
        <main className='relative mx-auto h-screen max-w-200'>
            {flashCards.reverse().map((flashcard, idx) => (
                <article
                    key={flashcard.id}
                    className='absolute left-1/2 -translate-1/2 perspective-distant'
                    style={{
                        top: `${(idx - flashCards.length) * 1.5 + 50}%`,
                        transform: `scale(${idx / (flashCards.length * 2) + 0.5})`,
                        zIndex: `${idx}`,
                    }}
                >
                    <FlashCard
                        question={flashcard.question}
                        answer={flashcard.answer}
                        toRight={toRight && idx === flashCards.length - 1}
                        setToRight={setToRight}
                        addToTop={addToTop}
                        disabled={idx !== flashCards.length - 1}
                    />
                </article>
            ))}
            <button
                className='primary-btn absolute bottom-1/4 left-1/2 -translate-x-1/2'
                onClick={() => setToRight(true)}
            >
                Próximo
            </button>
        </main>
    );
}
