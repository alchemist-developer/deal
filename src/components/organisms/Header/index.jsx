/* eslint-disable prettier/prettier */
// import Logo from "../../atoms/Logo";

import Box from "../../atoms/Box";
import DealerLogo from "../../../../public/static/DealerLogo.svg";
import BmwLogo from "../../../../public/static/BmwLogo.svg";
import ButtonTel from "../../molecules/ButtonTel";
import ButtonWpp from "../../molecules/ButtonWpp";
import Image from "next/image";
import * as S from "./styled";

const Header = () => {
  return (
    <Box
      bg="white"
      height="80px"
      align="center"
      justify="space-between"
      padding="0 200px"
    >
      <Box justify="space-around" align="center">
        <Image src={DealerLogo} width="162" height="30" />
        <S.Line />
        <Image src={BmwLogo} width="48" height="48" />
      </Box>

      <Box>
        <ButtonTel width="160px" bg="#3754E2" text="LIGUE AGORA" />
        <ButtonWpp
          width="160px"
          margin="0 0  0 20px !important"
          href="#"
          bg="#4EC859"
          text="WHATSAPP"
        />
      </Box>
    </Box>
  );
};

export default Header;
