import Header from "../components/Header";
import MoodInput from "../components/MoodInput";
import LanguageSelector from "../components/LanguageSelector";
import MusicButtons from "../components/MusicButtons";
import ThemeWrapper from "../components/ThemeWrapper";

export default function Home() {
  return (
    <ThemeWrapper>
      <Header />
      <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg w-full max-w-lg shadow-lg">
        <MoodInput />
        <LanguageSelector />
      </div>
      <MusicButtons />
    </ThemeWrapper>
  );
}
