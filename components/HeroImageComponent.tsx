
interface Props {
    imagetype:string;
}

export default function HeroImageComponent({imagetype}:Props) {

    return (
        <div className="
        bg-hero-image-mobile h-[254px] w-[253px] 
        md:bg-hero-image-tablet md:h-[640.71px] md:w-[640px]
        lg:bg-hero-image-desktop lg:h-[991.63px] lg:w-[936.92px]
        bg-cover
        "></div>
    )
    
}