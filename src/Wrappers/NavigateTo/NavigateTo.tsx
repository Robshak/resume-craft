import { NavigateToProps } from "./NavigateTo.props";
import { useRouter } from "next/navigation";

export default function NavigateTo({
  to,
  component,
  ...props
}: NavigateToProps) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(to)} {...props}>
      {component}
    </div>
  );
}
