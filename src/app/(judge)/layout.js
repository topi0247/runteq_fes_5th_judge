export default function AppLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen m-auto w-full">
      <main className="flex-grow mt-12 m-auto">
        {children}
      </main>
      <footer className="text-black my-4 text-center w-full md:text-white">©第5回RUNTEQ祭運営</footer>
    </div>
  );
}
