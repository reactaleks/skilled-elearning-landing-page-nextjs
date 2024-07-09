import Image from "next/image";

interface Props {
  featureTitle: string;
  featureText: string;
  featureImage: string;
}

export default function FeatureComponent({
  featureImage,
  featureTitle,
  featureText,
}: Props) {
  return (
    <div className="flex flex-col justify-center w-[343px] h-[283px] mx-auto px-8 shadow-md relative mt-10 rounded-xl bg-white">
      <div className="absolute -top-[25px]">
        <Image width={56} height={56} src={featureImage} alt="Feature Logo" />
      </div>
      <div className="">
        <h3 className="text-headings font-bold leading-headings">{featureTitle}</h3>
        <p className="text-main text-gray mt-4 leading-main">{featureText}</p>
        <div className="text-dark-pink mt-6 font-bold text-main hover:text-opacity-50">Get Started</div>
      </div>
    </div>
  );
}
