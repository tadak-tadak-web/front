interface AuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center flex-col bg-gradient-to-b from-[#ADD8E6] to-[#EEE8AA]">
        <div className="md:w-3xl w-full h-screen flex flex-col justify-center items-center bg-white px-6">
          <div className="w-full md:w-[360px]">
            <div className="text-center mb-6">
              <h1 className="text-5xl font-bold text-[#ADD8E6]">EduLearn</h1>
              <p className="text-sm text-black font-medium">학습 관리 시스템</p>
            </div>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
