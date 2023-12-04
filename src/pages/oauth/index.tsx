import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useMutation } from "react-query";
import Storage from "@/storage";
import { TOKEN } from "@/storage/constants";
import { login } from "@/apis";

const useOAuth = () => {
  const router = useRouter();
  const authCode = useSearchParams().get("code");

  const useLoginMutation = (authCode: string | null) => {
    return useMutation(() => login(authCode), {
      onSuccess: ({ accessToken, refreshToken }) => {
        Storage.setItem(TOKEN.ACCESS, accessToken);
        Storage.setItem(TOKEN.REFRESH, refreshToken);
      },
    });
  };

  const { isSuccess, mutate } = useLoginMutation(authCode);

  React.useEffect(() => {
    if (authCode) {
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
