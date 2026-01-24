export default function Options({ questions, questionId, answeredId, toRespond, handleClick }) {
    function getColors(id) {
        if (answeredId !== null && questions.at(questionId).correctAnswerId === id)
            return 'border-green-600 text-green-600';
        if (answeredId === id && questions.at(questionId).correctAnswerId !== id) return 'border-red-600 text-red-600';
        return 'border-text-color text-text-color';
    }

    return (
        <article className='flex-1'>
            <article className='h-full p-4'>
                <ul className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
                    {questions.at(questionId).answers?.map(option => (
                        <li key={option.id}>
                            <button
                                className={`h-full w-full cursor-pointer rounded-2xl border-2 p-4 text-[1.2rem] font-semibold transition-all duration-100 ${getColors(option.id)} ${answeredId === null ? 'hover:scale-102' : ''}`}
                                onClick={() => handleClick(option.id)}
                            >
                                {option.text}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    className='bg-color1-100 float-end mt-4 cursor-pointer rounded-xl px-4 py-2 text-[1.2rem] text-white transition-all duration-100 hover:not-disabled:scale-102 disabled:cursor-no-drop disabled:opacity-50'
                    disabled={answeredId === null}
                    onClick={() => toRespond(answeredId === questions.at(questionId).correctAnswerId)}
                >
                    Próximo
                </button>
            </article>
        </article>
    );
}
