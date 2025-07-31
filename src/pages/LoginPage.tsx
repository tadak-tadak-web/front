import { LoginForm } from '@/features/login';
import { AuthLayout } from '@/widgets';

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
