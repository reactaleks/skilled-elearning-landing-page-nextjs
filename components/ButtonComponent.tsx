interface Props {
    buttonType:string;
}

export default function ButtonComponent({buttonType}:Props) {


    if(buttonType === 'nav') {
        return (
            <button className="h-[48px] w-[140px] bg-dark-blue text-white rounded-full hover:bg-light-blue">Get Started</button>
        )
    } else if(buttonType === 'hero') {
        return (
            <button className="h-[48px] w-[140px] bg-gradient-to-t from-gradient-pink to-gradient-orange rounded-full text-white hover:saturate-50 hover:brightness-125">Get Started</button>
        )
    } else {
        return (
            <button className="h-[48px] w-[140px] bg-gradient-to-t from-gradient-pink to-gradient-blue rounded-full text-white hover:saturate-50 hover:brightness-125">Get Started</button>
        )
    }


    
}