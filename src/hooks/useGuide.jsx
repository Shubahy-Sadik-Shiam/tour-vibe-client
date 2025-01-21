import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGuide = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isGuide } = useQuery({
    queryKey: ["isGuide", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/guide/${user?.email}`);
      return res.data?.guide;
    },
  });
  return [isGuide];
};

export default useGuide;
