import React from "react";
import friends from "../assets/friends.png";

function About(){
    return(
        <section class="section-two">
            <div class="part-one">
                {/* <img src="images/Vector.png" alt="vector" class="vector" /> */}
                <div class="text">
                    <h2>
                        Unleash Your Love for <br /> Books with Bibliophilia              
                    </h2>
                    <p>Bibliophilia offers an immersive reading experience, connecting you with diverse books and fellow readers for captivating stories.</p>
                </div>
                <div class="percentage ">
                    <div class="percent">
                        <h1>50%</h1>
                        <p>Discover New Books <br /> Every Week</p>
                    </div>
                    <div className="line"></div>
                    <div class="percent">
                        <h1>50%</h1>
                        <p>Connect With A Thriving <br /> Reading Community</p>
                    </div>
                </div>
            </div>
            
        
            <div class="part-two">
            <img src={friends} alt="friends-reading" class="friends" />
            
            </div>    

  </section>
    )
}

export default About