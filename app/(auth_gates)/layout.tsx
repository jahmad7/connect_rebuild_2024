export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-connectGray h-screen flex flex-col flex-1 items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://cdn-icons-png.freepik.com/512/5407/5407462.png"
            alt="connect logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome Back to Connect!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            The easiest way to close custom sales orders
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}
