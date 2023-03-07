import { ReactNode } from "react";

import { Container } from "@/styles/global";

import * as S from "./styles";
import { Title } from "../Title";
import { ProductsInformations } from "./ProductsInformations";
import Image from "next/image";

export const Products = () => {
  return (
    <Container>
      <Title>Air Force</Title>
      <S.Wrapper>
        {ProductsInformations?.map((item) => (
          <Image src={item.image} alt={item.alt} key={item.id} />
        ))}
      </S.Wrapper>
    </Container>
  );
};
