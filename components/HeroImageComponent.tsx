import Image from "next/image"

import imageMobile from "../public/assets/image-hero-mobile@2x.webp"
import imageTablet from "../public/assets/image-hero-tablet@2x.webp"
import imageDesktop from "../public/assets/image-hero-desktop@2x.webp"

interface Props {
    imagetype:string;
}

export default function HeroImageComponent({imagetype}:Props) {

    if(imagetype === 'mobile') {
        return (
            <div>
                <Image src={imageMobile} alt="Hero image" width={253} height={253}/>
            </div>
        )
    } else if(imagetype === 'tablet') {
        return (
            <div>
                <Image src={imageTablet} alt="Hero image" width={640.71} height={640}/>
            </div>
        )
    } else {
        return (
            <div>
                <Image src={imageDesktop} alt="Hero image" width={991.63} height={936.92}/>
            </div>
        )
    }


    
}