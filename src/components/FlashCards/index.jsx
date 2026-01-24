import { useState } from 'react';
import FlashCard from './components/FlashCard';

export default function FlashCards() {
    const [toRight, setToRight] = useState(false);
    const [flashCards, setFlashCards] = useState([
        {
            id: 1,
            question: 'O que é JavaScript?',
            answer: 'Uma linguagem de programação usada principalmente para criar interatividade em páginas web.',
        },
        {
            id: 2,
            question: 'O que é uma variável?',
            answer: 'Um espaço na memória usado para armazenar valores.',
        },
        {
            id: 3,
            question: 'O que significa HTML?',
            answer: 'HyperText Markup Language.',
        },
        {
            id: 4,
            question: 'O que é CSS?',
            answer: 'Uma linguagem usada para estilizar páginas web.',
        },
        {
            id: 5,
            question: 'O que é uma função?',
            answer: 'Um bloco de código que executa uma tarefa específica.',
        },
        {
            id: 6,
            question: 'O que é um array?',
            answer: 'Uma estrutura de dados que armazena vários valores em uma única variável.',
        },
        {
            id: 7,
            question: 'O que é um objeto em JavaScript?',
            answer: 'Uma coleção de pares chave-valor.',
        },
        {
            id: 8,
            question: 'O que significa API?',
            answer: 'Application Programming Interface.',
        },
        {
            id: 9,
            question: 'O que é Git?',
            answer: 'Um sistema de controle de versão.',
        },
        {
            id: 10,
            question: 'O que é React?',
            answer: 'Uma biblioteca JavaScript para criar interfaces de usuário.',
        },
    ]);

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
                className='absolute bottom-1/4 left-1/2 -translate-x-1/2 cursor-pointer rounded-xl bg-[#3636ff] px-4 py-2 text-[1.2rem] text-white transition-all duration-100 hover:scale-105'
                onClick={() => setToRight(true)}
            >
                Próximo
            </button>
        </main>
    );
}
