import ButtonComponent from "./ButtonComponent";
import HeroImageComponent from "./HeroImageComponent";
import NavComponent from "./NavComponent";

export default function HeroComponent() {
  return (
    <div className="overflow-visible ">
      <NavComponent />
      <div className="lg:mx-auto md:overflow-hidden md:grid md:grid-cols-2  lg:overflow-visible">
        <div className="flex flex-col px-4 py-16 md:pl-12 md:mt-12 lg:-ml-6 lg:mt-52 xl:ml-36">
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
        <div className="flex md:justify-center lg:justify-end mt-6 lg:-mt-20">
          <HeroImageComponent />
        </div>
      </div>
    </div>
  );
}
