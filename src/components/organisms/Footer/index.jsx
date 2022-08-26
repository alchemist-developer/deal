/* eslint-disable react/jsx-key */ /* eslint-disable prettier/prettier */
import Typography from "../../atoms/Typography";
import Box from "../../atoms/Box";
import Image from "next/image";
import DealerFooter from "../../../../public/static/DealerFooter.svg";
import YoutubeIcon from "../../../../public/static/youtubeIcon.svg";
import LinkedinIcon from "../../../../public/static/linkedinIcon.svg";
import InstagramIcon from "../../../../public/static/instagramIcon.svg";
import FooterLogo from "../../../../public/static/LogoFooter.svg";
import Divisor from "../../atoms/Divisor";
import ButtonTop from "../../molecules/ButtonTop";

const Footer = () => {
  return (
    <Box
      style={{ position: "absolute" }}
      direction="column"
      bg="black"
      padding={"50px 180px"}
    >
      <Box width={"100%"} direction="column">
        <Box
          direction="row"
          justify="space-between"
          margin="0 0 10px 0 !important"
        >
          <Image src={DealerFooter} />
          <Box direction="row" justify="space-between" align={"center"}>
            <Typography
              family={"Ubuntu"}
              fontSize={"16px"}
              margin={"0 20px 0 0 !important"}
              text="SIGA-NOS: "
              color="white"
            />
            <Box justify={"space-between"} width="125px">
              <Image src={InstagramIcon} />
              <Image src={LinkedinIcon} />
              <Image src={YoutubeIcon} />
            </Box>
          </Box>
        </Box>
        <Divisor bg="white" height="1px" />
        <Box direction="column" align={"start"} margin="10px 0 !important">
          <Typography
            margin={"10px 0 !important"}
            family={"Ubuntu"}
            color={"#FFFFFF"}
            text={[
              <strong className="spanFooter">Razão Social: </strong>,
              " AUTO FORCE PLATAFORMA DE MARKETING DIGITAL LTDA",
            ]}
          />

          <Typography
            margin={"10px 0 !important"}
            family={"Ubuntu"}
            color={"#FFFFFF"}
            text={[
              <strong className="spanFooter">CNPJ: </strong>,
              " 22.588.947/0001-06",
            ]}
          />

          <Typography
            margin={"10px 0 !important"}
            family={"Ubuntu"}
            color={"#FFFFFF"}
            text={[
              <strong className="spanFooter">Endereço Matriz:</strong>,
              " Av. Prudente de Morais, 3966, Lagoa Nova. Natal/RN –  CEP 59056-200",
            ]}
          />
        </Box>
        <Divisor bg="white" height="1px" />
        <Box justify="space-between">
          <Image src={FooterLogo} />

          <Box direction="column" align={"end"}>
            <Typography
              family={"Ubuntu"}
              color={"#FFFFFF"}
              margin={"10px 0 !important"}
              text="© Copyright 2022 - AutoForce - Todos os direitos reservados"
            />
            <Typography
              family={"Ubuntu"}
              color={"#FFFFFF"}
              text={[
                <span className="spanFooter">Confira a nossa </span>,
                <u>Politica de privacidade.</u>,
              ]}
            />
            <ButtonTop />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
