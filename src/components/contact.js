import linkedinIcon from './images/linkedin-icon.png'


const Contact = () => {
    return (
        <>
            <h1 className='drop-shadow-md text-primary font-Fjalla md:text-[70px]'>Contact Me</h1>
            <h2 className='mt-6 text-primary'>Let's Talk</h2>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                        <form target="_blank" action="https://formsubmit.co/xavi4075@email.com" method="POST">
                            <div>
                                <input type="text" name="name" class="form-control w-full mt-10 p-4" placeholder="Full Name" required></input>
                            </div>
                            <div>
                                <input type="email" name="email" class="form-control w-full mt-4 p-4" placeholder="Email Address" required></input>
                            </div>
                            <textarea placeholder="Your Message" class="form-control w-full mt-4 p-4 resize-none" name="message" rows="17" required></textarea>
                            <div>
                                <button type="submit" class="btn btn-lg btn-dark btn-block w-full mt-4 p-4 bg-primary text-white">Submit Form</button>
                            </div>
                        </form>
                </div>
                <div className='relative flex justify-center flex-col'>
                    <div className='pl-[10px] pt-[64px] text-center'>
                        <p className='text-primary text-[20px] md:text-[40px]'>xavi4075@gmail.com</p>
                        <p className='text-primary text-[20px] md:text-[40px]'>91891757</p>
                    </div>
                    <div className='pl-[10px] pt-[10px] text-center'>
                        <a href="https://www.linkedin.com/in/xavier-neo-20278723b/"><img className='inline ml-[10px] w-[40px] h-[40px] md:w-[60px] md:h-[60px]' src={linkedinIcon} alt="linkedin Icon" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;