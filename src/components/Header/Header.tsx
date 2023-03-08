import Image from "next/image";

import { Container } from "@/styles/global";
import iconCart from "/public/assets/image/iconCart.svg";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Wrapper>
          <S.Logo>Biasi</S.Logo>
          <S.ImageIcon
            src={iconCart}
            alt="icone de carrinho para finalizar as compras"
          />
        </S.Wrapper>
      </Container>
    </S.Header>
  );
};
