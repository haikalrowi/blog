import { useFormStatus } from "react-dom";

export function SubmitButton(props: React.JSX.IntrinsicElements["button"]) {
  const { pending } = useFormStatus();
  return <button {...props} type="submit" />;
}
