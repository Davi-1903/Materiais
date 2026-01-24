export default function Display({ questionId, questions, onAnimationEnd }) {
    return (
        <article className='relative flex flex-1 items-center justify-center'>
            <div className='absolute top-4 left-4 flex w-[calc(100%-2rem)] items-center gap-4 lg:left-0 lg:w-full'>
                <p className='text-[1.6rem] font-semibold text-gray-800'>
                    {questionId + 1}/{questions.length}
                </p>
                <div className='h-4 flex-1 rounded-full bg-gray-800/15'>
                    <div
                        key={questionId}
                        className='animate-progress h-full w-full rounded-full bg-[#3636ff] transition-all duration-100'
                        onAnimationEnd={onAnimationEnd}
                    ></div>
                </div>
            </div>
            <p className='p-4 text-center text-[2.6rem] font-bold text-balance text-gray-800'>
                {questions.at(questionId)?.question}
            </p>
        </article>
    );
}
