import ButtonComponent from "./ButtonComponent";
import HeroImageComponent from "./HeroImageComponent";

export default function HeroComponent() {
  return (
    <>
      <div className="">
        <h1>Maximize skill, minimize budget</h1>
        <ButtonComponent />
        <p>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
      </div>
      <div className="">
        <HeroImageComponent/>
      </div>
    </>
  );
}
