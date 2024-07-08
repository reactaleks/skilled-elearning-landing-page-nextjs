import LogoComponent from "./LogoComponent";
import ButtonComponent from "./ButtonComponent";

export default function NavComponent() {
  return (
    <nav className="flex justify-center w-screen absolute">
      <div className="flex flex-row justify-between items-center w-[343px] h-[48px] mt-4
      md:w-[689px] lg:w-[1110px]">
        <LogoComponent logotype="dark" logoWidth={89} logoHeight={35} />
        <ButtonComponent buttonType="nav" />
      </div>
    </nav>
  );
}
