import type { QuestionsDisplayProps } from '../../../interfaces/Props';

export default function Display({ questions, currentQuestionId }: QuestionsDisplayProps) {
    return (
        <article className='relative grid flex-2 place-items-center'>
            <div className='absolute top-2 left-2 flex h-fit w-[calc(100%-1rem)] items-center gap-4 lg:left-0 lg:w-full'>
                <div className='h-4 flex-1 rounded-full bg-gray-300'>
                    <div
                        className='h-full rounded-full bg-[#3636ff] transition-all duration-100'
                        style={{
                            width: `${((currentQuestionId + 1) / questions.length) * 100}%`,
                        }}
                    ></div>
                </div>
                <span className='text-lg font-semibold text-gray-800'>
                    {Math.floor(((currentQuestionId + 1) / questions.length) * 100)}%
                </span>
            </div>
            <p className='px-4 text-center text-[2rem] font-bold text-balance text-gray-800 lg:p-0'>
                {questions[currentQuestionId].question}
            </p>
        </article>
    );
}
