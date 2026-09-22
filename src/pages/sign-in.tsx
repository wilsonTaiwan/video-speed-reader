import { usePageTitle } from "@/App";
import { AuthForm } from "@/components/auth-form";

export default function SignIn() {
  usePageTitle("Sign in — Video Speed Reader");
  return <AuthForm mode="signin" />;
}
