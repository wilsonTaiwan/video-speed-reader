import { usePageTitle } from "@/App";
import { AuthForm } from "@/components/auth-form";

export default function SignUp() {
  usePageTitle("Create an account — Video Speed Reader");
  return <AuthForm mode="signup" />;
}
