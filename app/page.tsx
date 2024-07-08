import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import FeatureSectionComponent from "@/components/FeatureSectionComponent";

export default function Home() {
  return (
    <div className="container w-screen min-h-screen flex flex-col justify-between">
      <main className="w-screen">
        <HeroComponent/>
        <FeatureSectionComponent/>
      </main>
      <FooterComponent/>
    </div>
  );
}
