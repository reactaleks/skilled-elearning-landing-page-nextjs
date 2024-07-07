import Image from "next/image"
import companyLogoDark from '../public/assets/logo-dark.svg'
import companyLogoLight from '../public/assets/logo-light.svg'

interface Props {
    logotype:string;
    logoHeight:number;
    logoWidth:number;
}

export default function LogoComponent({logotype, logoHeight, logoWidth}:Props) {

    if(logotype === 'dark') {
        return (
            <div>
                 <Image
                    width={logoWidth}
                    height={logoHeight}
                    src={companyLogoDark}
                    alt='Company logo'
                 />
            </div>
        ) 
    } else {
        return (
            <div>
                 <Image
                    width={logoWidth}
                    height={logoHeight}
                    src={companyLogoLight}
                    alt='Company logo'
                 />
            </div>
        )
    }

    
}