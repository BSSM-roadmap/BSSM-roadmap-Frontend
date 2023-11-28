import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useLoginMutation } from "./services/mutation.service";
import { TOKEN } from "@/storage/constants";
import Storage from "@/storage";

const useOAuth = () => {
  const router = useRouter();
  const authCode = useSearchParams().get("code");

  const { isSuccess, mutate } = useLoginMutation(authCode);

  React.useEffect(() => {
    if (authCode) {
      console.log(authCode);
      mutate();
    }
  }, [authCode, mutate]);

  React.useEffect(() => {
    if (isSuccess) {
      const redirectUrl = Storage.getItem(TOKEN.ACCESS) || "/";
      router.push("/");
    }
  }, [isSuccess, router]);
};

export default useOAuth;
