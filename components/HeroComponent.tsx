import ButtonComponent from "./ButtonComponent";
import HeroImageComponent from "./HeroImageComponent";
import NavComponent from "./NavComponent";

export default function HeroComponent() {
  return (
    <div className="">
      <NavComponent />
      <div className="lg:mx-auto md:overflow-hidden md:grid md:grid-cols-2 ">
        <div
          className="flex flex-col px-4 md:px-0 pt-16 md:pt-0 mx-auto 
        max-w-[375px] md:max-w-[344.5px] xl:max-w-[550px]
        md:mx-0 md:ml-auto justify-center md:justify-start md:mt-32 lg:mt-48 xl:mt-64"
        >
          <div className="">
            <h1 className="text-headingl leading-headingl xl:text-headingxl xl:leading-headingxl font-jakarta font-extrabold mt-6 text-dark-blue">
              Maximize skill, minimize budget
            </h1>
            <p className="mt-6 text-mainm text-gray leading-main xl:max-w-[25vw] 4k:max-w-[15vw]">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <div className="mt-6">
              <ButtonComponent buttonType="hero" />
            </div>
          </div>
        </div>
        <div className="flex justify-center xl:justify-end 4k:justify-start">
          <HeroImageComponent />
        </div>
      </div>
    </div>
  );
}
