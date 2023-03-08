import Image from "next/image";
import styled, { css } from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 2rem;
  left: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  ${({ theme }) => css`
    font-size: 3.8rem;
    font-weight: 900;
    line-height: 5.7rem;
    color: ${theme.colors.yellow};
    text-transform: uppercase;
  `}
`;

export const ImageIcon = styled(Image)`
  cursor: pointer;
`;
