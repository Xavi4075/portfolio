import profile from './images/profilepic.jpg'

const About = () => {
    return (
        <>
            <h1 className='drop-shadow-md text-primary md:text-[70px] font-Fjalla'>About Me</h1>
            <h2 className='mt-6 text-primary'>Greetings</h2>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <p className=' pt-10'>I am a UX/UI Designer based in Singapore. As a multi-disciplinary designer, I bring a unique blend of creativity, technical skill, and problem-solving to every project. With a passion for interaction and visual design, I have honed my ability to turn complex ideas into visually stunning and user-friendly designs.</p>
                    <p className=' pt-4'>I have consistently delivered impactful and memorable designs that meet their goals and had the opportunity to work with a diverse range of clients, from startups to established corporations like NCS and Vaniday</p>
                    <p className=' pt-4'>Whether I am working, I bring a strong work ethic, attention to detail, and commitment to delivering exceptional results. I am always seeking new challenges and opportunities to grow as a creative, and would love the chance to bring my skills to your next project.</p>
                </div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-10' src={profile} alt="Profile pic" />
                </div>
            </div>
        </>
    )
}

export default About;