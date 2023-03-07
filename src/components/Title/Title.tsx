import { ReactNode } from "react";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const Title = ({ children }: { children: ReactNode }) => {
  return <S.Title>{children}</S.Title>;
};
