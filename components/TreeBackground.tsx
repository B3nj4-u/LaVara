export default function TreeBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-4 bg-green-800 flex-grow"></div>
      </div>
      <div className="relative z-10 flex-grow flex flex-col">{children}</div>
    </div>
  );
}