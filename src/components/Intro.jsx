import React from 'react';
import Resume from '../../SameerResume.pdf';
import {Link} from 'react-router-dom';

function Intro(){
    return (
        <div className='flex items-center justify-center
        flex-col text-center pt-20 pb-6'>
        <h1 className='text-4xl md:text-7xl dark:text-white 
        mb-1 md:mb-3 font-bold'>Mohammed Sameer Sheikh</h1>
        <p className='text-base md:text-xl 
        mb-3 font-medium'>Undergraduate at Indian Institute of Information 
        Technology Allahabad</p>
        <p className='text-sm max-w-xl mb-6 font-bold'>I'm pursuing my Bachelor of Technology in 
        Electronics and Communication Engineering from Indian Institute of Information Technology Allahabad.I am a Competitive Programmer and love solving problems.Here's the link to my{' '} <a href={Resume} download="Sameer's Resume" target='_blank' rel='noreferrer noopener'
        className='text-cyan-600 
        hover:underline underline-offset-2
        decoration-2 decoration-red-600'>Resume</a>.</p>
        </div>
    );
}

export default Intro;