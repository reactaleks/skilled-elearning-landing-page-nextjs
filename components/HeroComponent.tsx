import ButtonComponent from "./ButtonComponent";
import HeroImageComponent from "./HeroImageComponent";

export default function HeroComponent() {
  return (
    <>
      <div className="flex flex-col px-4">
        <h1 className="text-[40px] lg:text-[56px] font-jakarta font-extrabold mt-6">
          Maximize skill, minimize budget
        </h1>
        <p className="mt-6 text-base text-gray">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <div className="mt-6">
          <ButtonComponent buttonType="hero" />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <HeroImageComponent/>
      </div>
    </>
  );
}
