/* eslint-disable prettier/prettier */
import * as S from "./styled";
import { AppProps } from "next/app";

const Divisor = ({ bg, height }) => {
  return <S.Divisor height={height} bg={bg} />;
};

export default Divisor;

Divisor.propTypes = AppProps;
