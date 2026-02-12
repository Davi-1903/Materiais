import type { EndProps } from '../../../interfaces/Props';

export default function End({ questions, corrects, handleRestart }: EndProps) {
    return (
        <>
            <h1 className='text-text-color text-[4.8rem] font-bold'>Fim!</h1>
            <h2 className='text-text-color text-[2.4rem] font-semibold'>
                {corrects}/{questions.length}
            </h2>
            <button
                className='border-text-color hover:border-color1-200 hover:bg-color1-100 cursor-pointer rounded-xl border-2 px-4 py-2 text-[1.2rem] font-semibold text-gray-800 transition-all duration-100 hover:text-white'
                onClick={handleRestart}
            >
                Reiniciar
            </button>
        </>
    );
}
