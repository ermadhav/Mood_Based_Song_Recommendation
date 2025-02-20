import Header from "../components/Header";
import MoodInput from "../components/MoodInput";
import LanguageSelector from "../components/LanguageSelector";
import MusicButtons from "../components/MusicButtons";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <ThemeToggle />
      <Header />
      <div className="flex items-center space-x-2 p-3 rounded-md input-container">
        <MoodInput />
        <LanguageSelector />
      </div>
      <MusicButtons />
    </div>
  );
}
