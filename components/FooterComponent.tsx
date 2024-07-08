import LogoComponent from "./LogoComponent";
import ButtonComponent from "./ButtonComponent";
export default function FooterComponent() {
  return (
    <footer className="flex justify-center w-screen bg-dark-blue">
      <div className=" flex flex-row justify-between items-center w-[343px] h-[120px]  mt-4
      md:w-[689px] lg:w-[1110px]">
        <LogoComponent logotype="light" logoWidth={89} logoHeight={35} />
        <ButtonComponent buttonType="footer" />
      </div>
    </footer>
  );
}
