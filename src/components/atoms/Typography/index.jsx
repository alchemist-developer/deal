/* eslint-disable prettier/prettier */
import * as S from "./styled";
import { AppProps } from "next/app";

const Typography = ({
  family,
  padding,
  margin,
  width,
  justify,
  align,
  height,
  direction,
  color,
  fontWeight,
  fontSize,
  lineHeight,
  ...props
}) => {
  return (
    <S.Typography
      family={family}
      padding={padding}
      margin={margin}
      width={width}
      justify={justify}
      align={align}
      height={height}
      direction={direction}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {props.text}
    </S.Typography>
  );
};

export default Typography;

Typography.propTypes = AppProps;
