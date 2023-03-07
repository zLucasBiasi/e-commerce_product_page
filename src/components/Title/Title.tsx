import { ReactNode } from "react";

import * as S from "./styles";

export const Title = ({ children }: { children: ReactNode }) => {
  return <S.Title>{children}</S.Title>;
};
