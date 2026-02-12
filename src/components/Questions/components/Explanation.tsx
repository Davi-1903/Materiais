import { useEffect, useRef, useState } from 'react';
import type { Explanation } from '../../../interfaces/Props';
import clsx from 'clsx';

export default function Explanation({ explanation, setShowExplanation }: Explanation) {
    const [isClose, setClose] = useState(false);
    const articleRef = useRef<HTMLDivElement | null>(null);

    async function copyExplanation() {
        try {
            await navigator.clipboard.writeText(explanation);
            alert('Explicação copiada!');
        } catch (err) {
            console.error(err);
        }
    }

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
            className={clsx(
                'fixed inset-0 z-1 grid place-items-center bg-gray-800/20 backdrop-blur-sm',
                isClose ? 'fade-out-animation' : 'fade-in-animation',
            )}
            onAnimationEnd={onAnimationEnd}
        >
            <article
                ref={articleRef}
                className='relative w-sm rounded-2xl bg-white p-8 pt-12 text-center text-[1.2rem] font-semibold text-gray-800 shadow-2xl'
            >
                <button
                    className='absolute top-2 right-2 cursor-pointer rounded-lg p-2 transition-all duration-100 hover:bg-gray-300'
                    onClick={copyExplanation}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        className='icon icon-tabler icons-tabler-outline icon-tabler-copy'
                    >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666' />
                        <path d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />
                    </svg>
                </button>
                <p>{explanation}</p>
            </article>
        </section>
    );
}
