
export default function LandingPage() {
  return (
    <div className="h-screen bg-gradient-to-br from-[#d1d9ff] to-[#5850ad]/60">
      <header className="text-white bg-[#282c34] p-3">
        <h1 className="text-2xl font-medium text-center">Welcome to the Art of Bubble Tea</h1>
      </header>
      <div className="flex w-full h-full flex-wrap justify-center items-center gap-5">
        <a href="/recipes">
          <div className="bg-[#282c34] p-5 rounded-md">
            <h2 className="text-2xl font-medium text-white text-center">Recipes</h2>
          </div>
        </a>
        
      </div>
    </div>
  );
}