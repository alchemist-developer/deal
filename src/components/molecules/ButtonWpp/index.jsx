/* eslint-disable prettier/prettier */
import { AppProps } from "next/app";
import * as S from "./styled";
import iconWhats from "../../../../public/static/iconWpp.svg";
import Image from "next/image";

const ButtonWpp = ({ bg, margin, padding, width, ...props }) => {
  return (
    <S.Button width={width} padding={padding} margin={margin} bg={bg}>
      <Image src={iconWhats} /> {props.text}
    </S.Button>
  );
};

ButtonWpp.propTypes = AppProps;

export default ButtonWpp;
