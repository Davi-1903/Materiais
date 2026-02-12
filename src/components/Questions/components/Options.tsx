import clsx from 'clsx';
import type { QuestionsOptionsProps } from '../../../interfaces/Props';

export default function Options({
    questions,
    currentQuestionId,
    answerId,
    showAnswer,
    nextQuestion,
    toRespond,
    setShowExplanation,
}: QuestionsOptionsProps) {
    function getColor(id: number): string {
        if ((answerId === id || showAnswer) && questions[currentQuestionId].correctAnswerId === id)
            return 'border-green-400 text-green-400';
        if (answerId === id && questions[currentQuestionId].correctAnswerId !== id)
            return 'border-red-600 text-red-600';
        return 'border-gray-800 text-gray-800';
    }

    return (
        <article className='flex-1'>
            <ul className='grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:p-0'>
                {questions[currentQuestionId].answers.map(options => (
                    <li key={options.id}>
                        <button
                            className={clsx(
                                'w-full cursor-pointer rounded-xl border-2 p-4 text-lg font-semibold transition-all duration-100 hover:scale-102',
                                getColor(options.id),
                            )}
                            onClick={() => toRespond(options.id)}
                        >
                            {options.text}
                        </button>
                    </li>
                ))}
            </ul>
            <div className='mx-4 mt-4 flex w-[calc(100%-2rem)] flex-wrap justify-end gap-4 lg:mx-0 lg:w-full'>
                <button
                    className='secundary-btn disabled:cursor-no-drop disabled:opacity-50'
                    onClick={() => setShowExplanation(true)}
                    disabled={answerId === null}
                >
                    Explicação
                </button>
                <button
                    className='primary-btn disabled:cursor-no-drop disabled:opacity-50'
                    disabled={answerId === null}
                    onClick={nextQuestion}
                >
                    Próximo
                </button>
            </div>
        </article>
    );
}
