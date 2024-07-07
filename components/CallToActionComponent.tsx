
interface Props {
    callToActionText:string;
}

export default function CallToActionComponent({callToActionText}:Props) {
        return (
            <div className="flex items-center mx-auto w-[343px] h-[120px] text-white bg-gradient-to-t from-gradient-pink to-gradient-orange p-6 rounded-xl">
                <h2 className="text-[24px] font-bold">Check out our most popular courses!</h2>
            </div>
        )
        

    
}