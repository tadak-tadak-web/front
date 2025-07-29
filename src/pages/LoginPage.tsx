import { LoginForm } from '@/features/login';
import { AppLogo } from '@/widgets';

export default function LoginPage() {
  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col bg-gradient-to-b from-[#ADD8E6] to-[#EEE8AA]">
      <div className="md:w-3xl w-full h-screen flex flex-col justify-center items-center bg-white">
        <div className="w-full md:w-[360px]">
          <AppLogo />
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
