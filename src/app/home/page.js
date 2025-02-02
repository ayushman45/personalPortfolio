import Backend from "@/assets/Backend";
import Banner from "@/assets/Banner";
import Database from "@/assets/Database";
import Devops from "@/assets/Devops";
import Footer from "@/assets/Footer";
import Frontend from "@/assets/Frontend";
import Professional from "@/assets/Professional";
import Projects from "@/assets/Projects";

export default function Home() {

  return (
    <div className="flex flex-col justify-start max-w-screen overflow-x-hidden screen font-[family-name:var(--font-roboto-condensed)] flex-nowrap">
      {/* <Gif /> */}
      <Banner />
      <Professional />
      <Projects />
      <Frontend />
      <Backend />
      <Database />
      <Devops />
      <Footer />
    </div>
  );
}
