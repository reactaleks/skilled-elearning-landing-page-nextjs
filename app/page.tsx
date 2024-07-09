import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import FeatureSectionComponent from "@/components/FeatureSectionComponent";

export default function Home() {
  return (
    <div>
      <main>
        <HeroComponent/>
        <FeatureSectionComponent/>
        <div></div>
      </main>
      <FooterComponent/>
    </div>
  );
}
