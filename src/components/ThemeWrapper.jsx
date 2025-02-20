export default function ThemeWrapper({ children }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        {children}
      </div>
    );
  }
  