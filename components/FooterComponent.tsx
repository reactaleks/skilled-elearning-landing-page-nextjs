import LogoComponent from "./LogoComponent";
import ButtonComponent from "./ButtonComponent";
export default function FooterComponent() {
  return (
    <footer>
      <div className="flex flex-row justify-between items-center bg-dark-blue h-[120px] p-4">
        <LogoComponent logotype="light" logoWidth={89} logoHeight={35} />
        <ButtonComponent buttonType="footer" />
      </div>
    </footer>
  );
}
