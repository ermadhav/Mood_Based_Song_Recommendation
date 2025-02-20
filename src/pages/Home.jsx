import Header from "../components/Header";
import MoodInput from "../components/MoodInput";
import LanguageSelector from "../components/LanguageSelector";
import MusicButtons from "../components/MusicButtons";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#181818]">
      <Header />
      <div className="flex items-center space-x-2 bg-[#252525] p-3 rounded-md">
        <MoodInput />
        <LanguageSelector />
      </div>
      <MusicButtons />
    </div>
  );
}
