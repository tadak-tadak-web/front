import { RegisterForm } from '@/features/register';
import { AuthLayout } from '@/widgets';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
