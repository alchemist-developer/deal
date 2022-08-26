/* eslint-disable prettier/prettier */
import * as S from "./styled";
import TopButton from "../../../../public/static/TopButton.svg";
import Image from "next/image";

const ButtonTop = () => {
  return (
    <S.ButtonTop href="#top">
      <Image src={TopButton} />
    </S.ButtonTop>
  );
};

export default ButtonTop;
