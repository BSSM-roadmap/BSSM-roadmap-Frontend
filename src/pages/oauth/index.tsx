import { useQueryClient } from "react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useLoginMutation } from "./services/mutation.service";

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
      const redirectUrl = window?.localStorage.getItem("TOKEN:ACCESS") || "/";
      router.push("/");
    }
  }, [isSuccess, router]);
};

export default useOAuth;
