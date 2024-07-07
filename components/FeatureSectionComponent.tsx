import FeatureComponent from "./FeatureComponent"
import CallToActionComponent from "./CallToActionComponent"

export default function FeatureSectionComponent() {
    return (
        <div className="">
            <CallToActionComponent callToActionText=''/>
            <FeatureComponent featureImage='' featureTitle='' featureText=''/>
        </div>
    )
}