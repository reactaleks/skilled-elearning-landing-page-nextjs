import FeatureComponent from "./FeatureComponent";
import CallToActionComponent from "./CallToActionComponent";
import iconAnimation from "../public/assets/icon-animation.svg";
import iconBusiness from "../public/assets/icon-business.svg";
import iconCrypto from "../public/assets/icon-crypto.svg";
import iconDesign from "../public/assets/icon-design.svg";
import iconPhotography from "../public/assets/icon-photography.svg";

export default function FeatureSectionComponent() {
  return (
    <div
      className="bg-gradient-to-t from-[#EFF1FF] via-95% pb-24
        w-screen
        
        "
    >
      <div className="md:grid md:grid-cols-2
        md:w-[689px] md:mx-auto
        lg:grid-cols-3 lg:w-[1110px] lg:mx-auto">
        <CallToActionComponent callToActionText="Check out our most popular courses!" />
        <FeatureComponent
          featureImage={iconAnimation}
          featureTitle="Animation"
          featureText="Learn the latest animation techniques to create stunning motion design and captivate your audience."
        />
        <FeatureComponent
          featureImage={iconBusiness}
          featureTitle="Design"
          featureText="Create beautiful, usable interfaces to help shape the future of how the web looks."
        />
        <FeatureComponent
          featureImage={iconCrypto}
          featureTitle="Photography"
          featureText="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
        />
        <FeatureComponent
          featureImage={iconDesign}
          featureTitle="Crypto"
          featureText="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
        />
        <FeatureComponent
          featureImage={iconPhotography}
          featureTitle="Business"
          featureText="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
        />
      </div>
    </div>
  );
}
