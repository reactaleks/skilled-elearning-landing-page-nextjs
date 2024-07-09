
interface Props {
    callToActionText:string;
}

export default function CallToActionComponent({callToActionText}:Props) {
        return (
            <div className="flex md:pt-14 mx-auto w-[343px] h-[120px] text-white bg-gradient-to-t from-gradient-pink to-gradient-orange p-6 rounded-xl
            md:h-[259px] md:w-[339px] md:mt-16">
                <h2 className="text-headings leading-headings xl:text-headingm font-bold xl:leading-headingm xl:max-w-[20vw]">Check out our most popular courses!</h2>
            </div>
        )
        

    
}