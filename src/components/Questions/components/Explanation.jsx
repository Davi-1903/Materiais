import { useEffect, useRef, useState } from 'react';

export default function Explanation({ explanation, setShowExplanation }) {
    const [isClose, setClose] = useState(false);
    const articleRef = useRef(null);

    function onAnimationEnd() {
        if (isClose) setShowExplanation(false);
    }

    useEffect(() => {
        function handleClick(event) {
            if (articleRef.current && !articleRef.current.contains(event.target)) {
                setClose(true);
            }
        }

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <section
            className={`fixed inset-0 z-1 grid place-items-center bg-gray-800/20 backdrop-blur-sm ${isClose ? 'fade-out-animation' : 'fade-in-animation'}`}
            onAnimationEnd={onAnimationEnd}
        >
            <article
                ref={articleRef}
                className='w-sm rounded-2xl bg-[#dde5ec] p-8 text-center text-[1.2rem] font-semibold text-gray-800 shadow-2xl'
            >
                <p>{explanation}</p>
            </article>
        </section>
    );
}
