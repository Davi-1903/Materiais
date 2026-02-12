import { useEffect, useRef, useState } from 'react';
import type { Explanation } from '../../../interfaces/Props';

export default function Explanation({ explanation, setShowExplanation }: Explanation) {
    const [isClose, setClose] = useState(false);
    const articleRef = useRef<HTMLDivElement | null>(null);

    function onAnimationEnd() {
        if (isClose) setShowExplanation(false);
    }

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (!articleRef.current?.contains(event.target as Node)) {
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
                className='w-sm rounded-2xl bg-white p-8 text-center text-[1.2rem] font-semibold text-gray-800 shadow-2xl'
            >
                <p>{explanation}</p>
            </article>
        </section>
    );
}
