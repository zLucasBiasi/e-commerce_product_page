import { Products, Header } from "@/components";

import * as S from "./styles";

export const HomeTemplate = () => {
  return (
    <>
      <Header />
      <S.WrapperHome>
        <Products />
      </S.WrapperHome>
    </>
  );
};
