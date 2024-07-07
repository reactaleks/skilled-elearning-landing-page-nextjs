import LogoComponent from "./LogoComponent"
import ButtonComponent from "./ButtonComponent"

export default function NavComponent() {
    return (
        <nav>
            <LogoComponent logotype="dark" logoWidth={89} logoHeight={35}/>
            <ButtonComponent buttonType="nav"/>
        </nav>
    )
}