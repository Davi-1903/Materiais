import { useState } from 'react';
import questions from './questionsList';
import Display from './components/Display';
import Options from './components/Options';
import End from './components/End';

export default function App() {
    const [questionId, setQuestionId] = useState(0);
    const [answeredId, setAnsweredId] = useState<number | null>(null);
    const [itsWrong, setWrong] = useState(false);
    const [corrects, setCorrests] = useState(0);

    function toRespond(isCorrect: boolean): void {
        setQuestionId(prev => prev + 1);
        if (isCorrect && !itsWrong) setCorrests(prev => prev + 1);
        setAnsweredId(null);
        setWrong(false);
    }

    function handleRestart() {
        setQuestionId(0);
        setCorrests(0);
        setAnsweredId(null);
    }

    function onAnimationEnd(): void {
        if (answeredId === null) setWrong(true);
        setAnsweredId(questions[questionId].correctAnswerId);
    }

    function handleClick(id: number): void {
        if (answeredId === null) setAnsweredId(id);
    }

    return (
        <main className='mx-auto h-screen max-w-200'>
            {questionId < questions.length ? (
                <section className='flex h-full flex-col'>
                    <Display questionId={questionId} questions={questions} onAnimationEnd={onAnimationEnd} />
                    <Options
                        questions={questions}
                        questionId={questionId}
                        answeredId={answeredId}
                        toRespond={toRespond}
                        handleClick={handleClick}
                    />
                </section>
            ) : (
                <section className='flex h-full flex-col items-center justify-center gap-4'>
                    <End questions={questions} corrects={corrects} handleRestart={handleRestart} />
                </section>
            )}
        </main>
    );
}
