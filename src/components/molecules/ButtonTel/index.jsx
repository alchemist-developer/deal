/* eslint-disable prettier/prettier */
import { AppProps } from "next/app";
import * as S from "./styled";
import iconTel from "../../../../public/static/iconTel.svg";
import Image from "next/image";

const ButtonTel = ({ bg, margin, padding, width, ...props }) => {
  return (
    <S.Button width={width} padding={padding} margin={margin} bg={bg}>
      <Image src={iconTel} /> {props.text}
    </S.Button>
  );
};

ButtonTel.propTypes = AppProps;

export default ButtonTel;
