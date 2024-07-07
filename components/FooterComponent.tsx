import LogoComponent from "./LogoComponent"
import ButtonComponent from "./ButtonComponent"
export default function FooterComponent() {
    return (
        <footer>
            <LogoComponent logotype="dark" logoWidth={89} logoHeight={35}/>
            <ButtonComponent buttonType="footer"/>
        </footer>
    )
}