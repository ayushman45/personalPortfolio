import AvatarComponent from "@/assets/AvatarComponent";
import Frontend from "@/assets/Frontend";
import Gif from "@/assets/Gif";
import Introduction from "@/assets/Introduction";
import Name from "@/assets/Name";
import Navigations from "@/assets/Navigations";
import Professional from "@/assets/Professional";

export default function Home() {

  return (
    <div className="flex flex-col justify-start w-screen screen font-[family-name:var(--font-roboto-condensed)] flex-nowrap gap-8">
      <Gif />
      <div className="flex flex-row justify-between items-center w-full h-max py-2 px-4 z-10 mb-64">
        <div className="flex flex-row justify-start gap-3">
          <Name />
          <Navigations />
        </div> 
        <div>
          <AvatarComponent />
        </div>    
      </div>
      <Introduction />
      <Professional />
      <Frontend />
    </div>
  );
}
