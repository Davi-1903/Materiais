import { useState } from 'react';

export default function FlashCard({ question, answer, toRight, setToRight, addToTop, disabled }) {
    const [invert, setInvert] = useState(false);

    function toggleInvert() {
        if (!disabled && !toRight) setInvert(prev => !prev);
    }

    function onTransitionEnd() {
        if (toRight) {
            setInvert(false);
            addToTop();
            setToRight(false);
        }
    }

    return (
        <article
            className={`v relative aspect-video w-sm cursor-pointer shadow-2xl transition-all duration-500 select-none transform-3d ${invert ? 'rotate-y-180' : ''} ${toRight ? 'translate-x-full' : ''}`}
            onTransitionEnd={onTransitionEnd}
            onClick={toggleInvert}
            role='button'
        >
            <div className='from-color1-100 to-color1-200 absolute inset-0 rounded-2xl bg-linear-to-b backface-hidden'>
                <span className='absolute top-1/2 left-1/2 w-[calc(100%-2rem)] -translate-1/2 text-center text-[1.2rem] text-balance text-white'>
                    {question}
                </span>
            </div>
            <div className='from-color1-100 to-color1-200 absolute inset-0 rotate-y-180 rounded-2xl bg-linear-to-b backface-hidden'>
                <span className='absolute top-1/2 left-1/2 w-[calc(100%-2rem)] -translate-1/2 text-center text-[1.2rem] text-balance text-white'>
                    {answer}
                </span>
            </div>
        </article>
    );
}
