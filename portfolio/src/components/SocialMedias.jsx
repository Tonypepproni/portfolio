import Social from "./Social"

import './../styles/SocialMedias.css'

function SocialMedias(){
    return(
        <>
            <h3>Socials</h3>
            <div id="allSocials">
                <Social type='Github' />
                <Social type='LinkedIn' />
                <Social type='Instagram' />
            </div>
        </>
    )
}

export default SocialMedias