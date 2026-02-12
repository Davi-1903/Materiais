import type { QuizDisplayProps } from '../../../interfaces/Props';

export default function Display({ questionId, questions, onAnimationEnd }: QuizDisplayProps) {
    return (
        <article className='relative flex flex-1 items-center justify-center'>
            <div className='absolute top-4 left-4 flex w-[calc(100%-2rem)] items-center gap-4 lg:left-0 lg:w-full'>
                <p className='text-text-color text-[1.6rem] font-semibold'>
                    {questionId + 1}/{questions.length}
                </p>
                <div className='bg-text-color/15 h-4 flex-1 rounded-full'>
                    <div
                        key={questionId}
                        className='animate-progress bg-color1-100 h-full w-full rounded-full transition-all duration-100'
                        onAnimationEnd={onAnimationEnd}
                    ></div>
                </div>
            </div>
            <p className='text-text-color p-4 text-center text-[2.6rem] font-bold text-balance'>
                {questions[questionId]?.question}
            </p>
        </article>
    );
}
