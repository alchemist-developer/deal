/* eslint-disable prettier/prettier */
import * as S from "./styled";
import { AppProps } from "next/app";

const Typography = (props) => {
  return <S.Typography>{props.text}</S.Typography>;
};

export default Typography;

Typography.propTypes = AppProps;