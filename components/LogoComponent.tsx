import Image from "next/image"
import companyLogoDark from '../public/assets/logo-dark.svg'
import companyLogoLight from '../public/assets/logo-light.svg'

interface Props {
    logotype:string;
}

export default function LogoComponent({logotype}:Props) {

    if(logotype === 'dark') {
        return (
            <div>
                 <Image
                    className="w-[89px] h-[25px] xl:w- [105px] xl:h-[25px]"
                    src={companyLogoDark}
                    alt='Company logo'
                 />
            </div>
        ) 
    } else {
        return (
            <div>
                 <Image
                    className="w-[89px] h-[25px] xl:w-[105px] xl:h-[25px]"
                    src={companyLogoLight}
                    alt='Company logo'
                 />
            </div>
        )
    }

    
}