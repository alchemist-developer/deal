/* eslint-disable no-unreachable */ /* eslint-disable prettier/prettier */
import Box from "../../atoms/Box";
import Typography from "../../atoms/Typography";
import Button from "../../molecules/Button";
import Image from "next/image";
import IconTank from "../../../../public/static/icon_tank.svg";
import IconCilindrada from "../../../../public/static/icon_cilindrada.svg";
import IconPotencia from "../../../../public/static/icon_potencia.svg";
import IconVelocidade from "../../../../public/static/icon_velocidademax.svg";
import { Infos } from "../../../utils/fakeApi";

const Highlighs = () => {
  return (
    <Box direction="column" margin={"0 25px 0 0 !important"}>
      <Typography
        padding={"0 0 0 15px"}
        fontSize="24px"
        text="Destaques"
        fontWeight={"700"}
      />

      <Box direction="column">
        {/* row pai1 */}
        <Box direction="row" margin="20px 0 !important">
          <Box direction="row" margin="0 20px !important">
            <Image src={IconTank} />
            <Box
              direction="column"
              margin="0 15px !important"
              className="icons"
            >
              <Typography fontWeight={"700"} text="Consumo" />
              <Typography
                color={"rgba(55, 84, 226, 1)"}
                fontWeight="700"
                text={Infos.consumption}
              />
            </Box>
          </Box>

          <Box direction="row">
            <Image src={IconCilindrada} className="icons" />
            <Box direction="column" margin="0 10px !important">
              <Typography text="Cilindrada" fontWeight={"700"} />
              <Typography
                color={"rgba(55, 84, 226, 1)"}
                fontWeight="700"
                text={Infos.displacement}
              />
            </Box>
          </Box>
        </Box>
        {/* row pai2 */}
        <Box direction="row" margin="20px 0 !important">
          <Box direction="row" margin="0 20px !important">
            <Image src={IconPotencia} className="icons" />
            <Box direction="column" margin="0 20px !important">
              <Typography text="Potência" fontWeight={"700"} />
              <Typography
                color={"rgba(55, 84, 226, 1)"}
                fontWeight="700"
                text={Infos.power}
              />
            </Box>
          </Box>

          <Box direction="row">
            <Image src={IconVelocidade} className="icons" />
            <Box direction="column" margin="0 10px !important">
              <Typography text="Velocidade Máx." fontWeight={"700"} />
              <Typography
                color={"rgba(55, 84, 226, 1)"}
                fontWeight="700"
                text={Infos.velocity}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Button
        margin={"10px 0 0 15px !important"}
        text="TENHO INTERESSE"
        width="206px"
        bg="rgba(55, 84, 226, 1)"
      />
    </Box>
  );
};

export default Highlighs;
