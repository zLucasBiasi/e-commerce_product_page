import Image from "next/image";

import { Container } from "@/styles/global";

import { ProductsInformations } from "./ProductsInformations";
import { Title } from "../Title";

import * as S from "./styles";

export const Products = () => {
  return (
    <Container>
      <Title>Air Force</Title>
      <S.Wrapper>
        {ProductsInformations?.map((item) => (
          <Image src={item.image} alt={item.alt} key={item.id} priority />
        ))}
      </S.Wrapper>
    </Container>
  );
};
