import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface ProfileResponse {
  ok: boolean;
  profile: User;
}

export default function useUser() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl("/api/users/me");
  }, []);

  const router = useRouter();
  
  const { data, error } = useSWR<ProfileResponse>(
   url
  );

  useEffect(() => {
    // if (data && data.ok && router.pathname === "/enter") {
    //   router.replace("/");
    // }

    if (data && !data?.ok && router.pathname !== "/enter") {
      console.log("data : " , data);
      router.replace("/enter");
    }
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}
