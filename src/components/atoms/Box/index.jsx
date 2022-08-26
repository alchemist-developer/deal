/* eslint-disable react/prop-types */ /* eslint-disable prettier/prettier */
import * as S from "./styled";

// eslint-disable-next-line react/prop-types
const Box = ({
  children,
  wrap,
  bg,
  width,
  justify,
  align,
  height,
  direction,
  shadow,
  color,
  margin,
  padding,
}) => {
  return (
    <S.Box
      padding={padding}
      margin={margin}
      color={color}
      bg={bg}
      width={width}
      height={height}
      justify={justify}
      align={align}
      direction={direction}
      shadow={shadow}
      flex-wrap={wrap}
    >
      {children}
    </S.Box>
  );
};

export default Box;
