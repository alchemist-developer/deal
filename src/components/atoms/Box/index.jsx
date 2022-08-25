/* eslint-disable prettier/prettier */
import * as S from "./styled";

// eslint-disable-next-line react/prop-types
const Box = ( { children, bg }) => {
  return <S.Box bg={bg}>{children}</S.Box>;
};

export default Box;
