import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import FeatureSectionComponent from "@/components/FeatureSectionComponent";

export default function Home() {
  return (
    <div className="container">
      <NavComponent/>
      <main>
        <HeroComponent/>
        <FeatureSectionComponent/>
      </main>
      <FooterComponent/>
    </div>
  );
}
