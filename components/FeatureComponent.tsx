import Image from "next/image";

interface Props {
    featureTitle: string;
    featureText: string;
    featureImage: string;
}

export default function FeatureComponent({featureImage, featureTitle, featureText}:Props) {
    return (
        <div>
            <Image width={56} height={56} src={featureImage} alt="Feature Logo"/>
            <h2 className="text-2xl">{featureTitle}</h2>
            <p className="text-base">{featureText}</p>
            <div className="text-dark-pink">Get Started</div>
        </div>
    )
}