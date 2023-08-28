import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: any) => {
  const userName = useSelector((store: any) => store.appReducer.name);
  const router = useRouter();

  // if (userName.length > 1) {
  //   router.push("/");
  // }

  return children;
};
export default ProtectedRoute;
