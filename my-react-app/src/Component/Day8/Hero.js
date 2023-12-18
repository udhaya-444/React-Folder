import React from 'react';
const Hero=(heroName)=>{
    if(heroName==="Vijay")
    {
        throw new Error('Not a hero');
    }
    return(
        <div>
            {heroName}
        </div>
    )
}
export default Hero;