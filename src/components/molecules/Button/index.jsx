/* eslint-disable prettier/prettier */
import { AppProps } from "next/app";
import * as S from "./styled";

const Button = ({ bg, margin, padding, width, ...props }) => {
  return (
    <S.Button width={width} padding={padding} margin={margin} bg={bg}>
      {props.text}
    </S.Button>
  );
};

Button.propTypes = AppProps;

export default Button;
