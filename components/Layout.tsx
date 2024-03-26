export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-[1000px] h-screen w-[95%] space-y-20 m-auto p-5">
      {children}
    </main>
  );
}
