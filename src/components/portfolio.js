import InteractiveMenu from "./interactivemenu";
import Typewriter from "typewriter-effect";

const Portfolio = () =>{

    return(
        <>
            <div className="absolute top-5 left-4 md:top-15 md:left-24">
                <h1 className="drop-shadow-md text-primary md:text-[4.25rem] font-Fjalla">
                    <span className="text-[1.75rem] font-normal">Hey there</span>
                    <br/>
                    I am Xavier Neo</h1>
                    <p className="text-[#1D1D35] mt-8 text-[1.25rem]">
                        <Typewriter
                            options = {{autoStart: true,
                            loop: true ,
                            delay: 40,
                            strings: [
                                "UIUX Designer",
                                "Frontend Developer",
                                "Website Designer",
                                "Creative",
                            ],
                            }}
                        />
                    </p>
            </div>

            <InteractiveMenu />
        </>
    )
}

export default Portfolio;