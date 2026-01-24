import { useState } from 'react';
import Explanation from './components/Explanation';
import questions from './questionsList';
import Display from './components/Display';
import Opations from './components/Options';
import End from './components/End';

export default function Questions() {
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [answerId, setAnswerId] = useState(null);
    const [corrects, setCorrects] = useState(0);

    function nextQuestion() {
        setCurrentQuestionId(prev => prev + 1);
        setShowAnswer(false);
        setAnswerId(null);
    }

    function handleRestart() {
        setCurrentQuestionId(0);
        setShowAnswer(false);
        setAnswerId(null);
        setCorrects(0);
    }

    function toRespond(id) {
        if (answerId !== null) return;

        setShowAnswer(true);
        setAnswerId(id);
        if (id === questions.at(currentQuestionId).correctAnswerId) setCorrects(prev => prev + 1);
    }

    return (
        <>
            {showExplanation && (
                <Explanation
                    explanation={questions.at(currentQuestionId).explanation}
                    setShowExplanation={setShowExplanation}
                />
            )}
            <main className='mx-auto min-h-screen max-w-200'>
                {currentQuestionId < questions.length ? (
                    <section className='flex min-h-screen flex-col'>
                        <Display questions={questions} currentQuestionId={currentQuestionId} />
                        <Opations
                            questions={questions}
                            currentQuestionId={currentQuestionId}
                            answerId={answerId}
                            showAnswer={showAnswer}
                            nextQuestion={nextQuestion}
                            toRespond={toRespond}
                            setShowExplanation={setShowExplanation}
                        />
                    </section>
                ) : (
                    <section className='flex min-h-screen flex-col items-center justify-center gap-4'>
                        <End questions={questions} corrects={corrects} handleRestart={handleRestart} />
                    </section>
                )}
            </main>
        </>
    );
}
