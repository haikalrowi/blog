import { Dashboard } from "@/components/Dashboard";
import { Login } from "@/components/Login";
import { userContext } from "@/lib/action";

export default async function Home() {
  try {
    const context = await userContext();
    return <Dashboard context={context} />;
  } catch {
    return <Login />;
  }
}
