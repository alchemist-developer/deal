/* eslint-disable react/jsx-key */ /* eslint-disable prettier/prettier */
import Box from "../../components/atoms/Box";
import Header from "../../components/organisms/Header";
import Typography from "../../components/atoms/Typography";
import Image from "next/image";
import BmwCabrioS4 from "../../../public/static/BmwCabrioS4.svg";
import Highlighs from "../../components/organisms/Highlights";
import Footer from "../../components/organisms/Footer";
import Divisor from "../../components/atoms/Divisor";
import { Infos } from "../../utils/fakeApi";

const HomeTemplate = () => {
  return (
    <div id="top">
      <Header />
      <Box direction="row">
        <Box
          direction="row"
          justify="space-between"
          padding="18px 200px"
          bg="#E5E5E5"
          width="100%"
          height="108px"
          align="center"
          shadow={"0px -4px 5px rgba(0, 0, 0, 0.25)"}
        >
          <Box direction="column">
            <Typography
              color="rgba(102, 102, 102, 1)"
              fontWeight="400"
              fontSize="12px"
              text={["Ofertas → ‎", <u>Novo Série 1</u>]}
            />
            <Typography
              fontWeight="700"
              fontSize="32px"
              margin={"10px 0 !important"}
              text={Infos.title}
            />
          </Box>
          <Typography
            color="rgba(102, 102, 102, 1)"
            fontWeight="400"
            fontSize="12px"
            text={[<u>Voltar para página anterior</u>]}
            margin="0 0 55px 0 !important"
          />
        </Box>
      </Box>

      <Box direction="column" padding={"18px 85px"}>
        <Box direction="column" padding={"18px 100px"}>
          <Box direction="column" padding={"20px"}>
            <Typography
              color="rgba(102, 102, 102, 1)"
              fontSize="24px"
              text="Descubra o BMW Série 4 Cabrio"
              padding={"0 0 2px 0 !important"}
            />
            <Typography
              color="rgba(102, 102, 102, 1)"
              fontSize="24px"
              padding={"0 0 10px 0 !important"}
              text="Cliente On-line tem Condições Especiais e aqui na Dealer BMW!"
            />
            <Box>
              <hr
                style={{
                  width: "4px",
                  backgroundColor: "#E5E5E5",
                  border: "none",
                }}
              />
              <Typography
                margin={"0 0 0 10px !important"}
                fontSize="32px"
                text={["A partir de ", "‎ ", <strong>{Infos.price}</strong>]}
              />
            </Box>
          </Box>

          <Box width="100%" direction="row" justify="space-between">
            <Box>
              <Image src={BmwCabrioS4} width="540" height="330" />
            </Box>
            <Highlighs />
          </Box>
          <Divisor bg="black" height="3px" />
        </Box>

        <Box
          wrap={"wrap"}
          direction="row"
          justify="space-between"
          padding={"18px 100px"}
        >
          <Typography
            width="540px"
            fontSize="32px"
            fontWeight="700"
            text={[
              "A vida é melhor",
              <br />,
              "quando compartilhada.",
              <br />,
              "BMW Série 4 Cabrio",
            ]}
          />
          <Typography width="540px" fontSize="18px" text={Infos.description} />
        </Box>

        <Box direction={"column"} justify="center" padding={"18px 100px"}>
          <Divisor bg="#E1E1E1" height="3px" />
          <Box
            margin="0 0 32px 0 !important"
            direction="column"
            height={"100%"}
          >
            <Typography
              margin={"25px 0 !important"}
              fontSize="24px"
              fontWeight="700"
              text="Conheça o BMW Série 4 Cabrio"
            />
            <iframe
              width="100%"
              height="1100"
              src={Infos.video}
              title="bmw cabrio video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <Divisor height="3px" bg="#E1E1E1" />
        </Box>

        <Box direction="column" padding={"18px 100px 50px 100px"}>
          <Typography fontSize="18px" fontWeight={"700"} text="Texto Legal:" />

          <Typography fontSize="18px" text={Infos.legalText} />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default HomeTemplate;
