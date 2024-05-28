import React from "react";
import {HTML5} from "/assets/languages";
import {CSS3} from ".assets/languages";

const aboutpage = () => {

    return (
        <>
        <h1>About Me</h1>
        <p> Amidst the upheaval of the COVID-19 pandemic in 2020, I stumbled upon a newfound passion that has since become the cornerstone of my journey:
            coding. As the world slowed down, I delved into the intricacies of programming, captivated by its limitless possibilities and the power to 
            create something tangible from mere lines of code. Since that pivotal moment, I have devoted myself wholeheartedly to mastering this craft, 
            constantly seeking to expand my knowledge and skills. Coding has not just become a hobby or a career path—it has become an integral part 
            of who I am, driving me forward with an insatiable curiosity and a relentless pursuit of excellence.</p>
        <h2>Languages/Technologies</h2>
        <img src={HTML5} alt='HTML5'/>
        <img src={CSS3.png} alt='CSS3'/>

        </>
    )
}

export default aboutpage;