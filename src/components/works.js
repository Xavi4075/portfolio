import Website1 from './images/This-website.png'
import Aresa1 from './images/Aresa.png'
import Aresa2 from './images/Aresa_logo.png'
import SushiTei from './images/ST_main_logo.png'
import ST1 from './images/Artboard1.png'
import ST2 from './images/Artboard2.png'
import ST3 from './images/Artboard3.png'
import T1 from './images/Tingkat1.png'
import T2 from './images/Tingkat2.png'
import T3 from './images/Tingkat3.png'
import T4 from './images/Tingkat4.png'

const Works = () => {
    return (
        <>
        <h1 className='drop-shadow-md text-primary md:text-[70px] font-Fjalla'>My Work</h1>
        <h2 className='mt-6 text-primary'>Check out my previous work</h2>
        <div>
            <div>
                <p className=' pt-8'>My expertises includes UX/UI design with Figma, 3D modeling with Cinema 4D, motion design with After Effects and front-end development with libraries like BootStrap, Three.js and Tailwind.</p>
            </div>
            <div>  
                <h1 className=' pt-10 text-[32px] font-Fjalla text-primary'>Website Works</h1>
            </div>
            <div>  
                <h1 className=' pt-2 text-[24px] '>My First Website</h1>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <p className=' pt-2'>My First Website, created with PHP, for a school assignment where we were tasked to create a website based on an existing brand. It is fully web responsive, with a login system that allows users to buy things with a cart system and a forum to post reviews</p>
                </div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-2' src={T1} alt="Website" />
                </div>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-4">
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-4' src={T2} alt="Website" />
                </div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-4' src={T3} alt="Website" />
                </div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-4' src={T4} alt="Website" />
                </div>
            </div>
            <div>  
                <h1 className=' pt-10 text-[24px]'>This Website</h1>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <p className=' pt-2'>For this, I tried to combine what I have learnt, like 3d modelling, UXUI Design and FrontEnd Development, resulting in this. This was done with react as the basis, accompanied by Three.js to render the scene and TailWind for the css customization</p>
                </div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-2' src={Website1} alt="Website" />
                </div>
            </div>
            <div>  
                <h1 className=' pt-2 text-[24px] '>Government Website - NCS</h1>
            </div>
            <div>
                <p className=' pt-2'> When I was working at NCS as an itern of the Experience Design Team, I was tasked to design the mobile interface of a government service which involved data collection and develop a fully-responsive website with BootStrap based on it. A major contribution from me was designing the tables to turn into accordions for the mobile port to create a better viewing experience. Due to a NDA, I can't show anything on this</p>
            </div>
            <div>  
                <h1 className=' pt-10 text-[32px] font-Fjalla text-primary'>Branding Works</h1>
            </div>
            <div>  
                <h1 className=' pt-2 text-[24px] '>Branding with Aresa Nails - Vaniday</h1>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <p className=' pt-2'>I was working with the company, VANIDAY, a commerce content and community platform provider for beauty, wellness and fitness, to are the possible ways to help spread awareness about their brand and effectively communicate with their customers. For this, I create a new brand identity and logo, along with delivering with item previews and a video. The Aresa logo is a symbolic representation of the brand that combines two elements: a swan and a lotus. The swan is commonly associated with elegance, grace, and beauty. It also symbolizes purity because of its white feathers and calm appearance. The inclusion of a swan in the logo reflects Aresa's dedication to providing its customers with a sophisticated and refined experience. The lotus, on the other hand, symbolizes growth, renewal, and enlightenment. The flower grows in murky waters but rises above to bloom into a fragrant and beautiful flower, embodying the idea of overcoming challenges to achieve success. The presence of a lotus in the logo represents Aresa's goal of helping its customers grow and attain their objectives.</p>
                </div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-2' src={Aresa2} alt="Website" />
                </div>
            </div>
                <h2 className=' pt-4 text-[24px] text-primary'>The Video </h2>
            <div>
                <iframe className='w-full h-[680px] mt-4' src="https://www.youtube.com/embed/VEPyB2xIisc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
                <h2 className=' pt-4 text-[24px] text-primary'>Brand Kit</h2>
            <div>
            <div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-2' src={Aresa1} alt="Website" />
                </div>
            </div>
            <div>  
                <h1 className=' pt-2 text-[24px] '>Branding on Sushi Tei</h1>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <p className=' pt-2'>My Assignment on Sushi Tei, in School. For the main icon, I decided to use minimalist sushi as a basis for the design and then incorporate Japanese aesthetics like wabi-sabi such as making it asymmetrical. Wabi-Sabi is a Japanese aesthetic and philosophical movement that emphasizes the value of appreciating the beauty of inherent flaws to find surprising value in our environment's imperfection and transience. In Japanese, Tei means king so the crown was added from this. The green outer ring and crown represents tranquility and sincerity with its quiet and restful blush, with the inner white symbolizing simplicity. The Roman red core provides this gentle warmth while the Cinderella pink lines are used to evoke a hint of playfulness and child-likeness, wrapping around the core. A sense of natural motion was also imbued with the irregular wave-like pink lines to give an ever-changing continuity. The use of the hiragana for sushi was used to present a casual look as it is the most commonly used and so it would not be mistaken for Chinese cuisine with the kanji. In Japanese culture, geometric shapes hold deep significance and meaning. I used the circle for the main icon as it represents inspiration and creativity. This was also made to look like the rising sun, a famous symbol, with the crown being light rays shining upwards.</p>
                </div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-2' src={SushiTei} alt="Website" />
                </div>
            </div>
            <div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-2' src={ST1} alt="Website" />
                </div>
            </div>
            <div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-2' src={ST2} alt="Website" />
                </div>
            </div>
            <div>
                <div className='relative flex justify-center'>
                    <img className='w-full p-1 mt-2' src={ST3} alt="Website" />
                </div>
            </div>
            <div>  
                <h1 className=' pt-10 text-[32px] font-Fjalla text-primary'>3D Works</h1>
            </div>
            <div>  
                <h1 className=' pt-2 text-[24px] '>Headphones</h1>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <p className=' pt-2'>My Assignment in School, created with Cinema 4D</p>
                </div>
                <div className='relative flex justify-center'>
                <iframe className='w-full h-[300px] mt-4' src="https://www.youtube.com/embed/mPQ6ao8jyHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        
    </>
    )
}

export default Works;