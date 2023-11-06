import { atom } from "recoil";

export const 로드맵정보 = atom({
  key: "로드맵",
  default: {
    id: 0,
    grade: "",
    title: "",
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
  },
});
