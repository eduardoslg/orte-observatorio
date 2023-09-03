import { CCarousel, CCarouselItem } from '@coreui/react'
import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Separator } from '@siakit/separator'
import { Text } from '@siakit/text'

import Image1 from '../../assets/1.jpeg'
import Image2 from '../../assets/2.jpg'
import Image3 from '../../assets/3.jpeg'
import LOGO from '../../assets/orte.webp'
import { YoutubeEmbed } from '../../components/YoutubeEmbed'

export function History() {
  return (
    <Flex flex padding="16px 0px" direction="column" className="container" gap>
      <Card padding flex gap={40}>
        <Flex flex direction="column" gap>
          <Flex direction="column" padding="0px 16px">
            <Text size="6xl" css={{ fontWeight: '$bold' }}>
              Nossa História
            </Text>

            <Separator />
          </Flex>

          <Flex gap={40}>
            <Flex>
              <img src={LOGO} alt="" />
            </Flex>

            <Flex direction="column" gap={20} css={{ marginTop: 10 }}>
              <Text
                size="lg"
                align="left"
                css={{ letterSpacing: '.1rem', lineHeight: '2rem' }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A ideia deste projeto de
                extensão surgiu em 2020 com a chegada da pandemia, onde ao
                buscar informações sobre o turismo e os eventos da nossa região,
                a fim de entender o planejamento e desenvolvimento do turismo
                local, observou-se a falta de dados concretos e de um local
                propício e confiável para divulgá-los.
              </Text>

              <Text
                size="lg"
                align="left"
                css={{ letterSpacing: '.1rem', lineHeight: '2rem' }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A falta de informações e a
                complexa relação entre os municípios, produziam incertezas nos
                discentes do Curso Superior em Gestão de Turismo, principalmente
                para os que viriam a produzir trabalhos de conclusão de cursos.
              </Text>
            </Flex>
          </Flex>

          <Flex direction="column" padding gap={20}>
            <Text
              size="lg"
              align="left"
              css={{ letterSpacing: '.1rem', lineHeight: '2rem' }}
            >
              Desse modo, docentes do IFSP-Barretos, depois de discutirem e
              conhecerem melhor os observatórios, vislumbraram a importância da
              criação do mesmo na nossa região, a fim de suprir demandas de
              assuntos do turismo e eventos locais. Inspirados ainda, a incutir
              significado nas pesquisas realizadas pela academia, viabilizar o
              contato do discente com a iniciação científica e a disseminar a
              produção de conhecimentos acadêmicos.
            </Text>

            <Text
              size="lg"
              align="left"
              css={{ letterSpacing: '.1rem', lineHeight: '2rem' }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A criação do Observatório
              Regional de Turismo e Eventos aliado a uma instituição acadêmica
              traz ainda, a inserção dos alunos em projetos capazes de abrir
              caminho para uma ocupação laboral, tornando o observatório um
              local não só de realização de pesquisas, mas que também propicia o
              contato com o ambiente de trabalho e a possibilidade de novas
              ocupações.
            </Text>
          </Flex>
        </Flex>
      </Card>

      <Card justify="center" align="center" flex padding gap={30}>
        <Flex flex width={600} direction="column" gap>
          <Flex direction="column" padding="0px 16px">
            <Text size="6xl" css={{ fontWeight: '$bold' }}>
              Lançamento ORTE
            </Text>

            <Separator />
          </Flex>

          <Flex padding gap>
            <Flex direction="column" gap={20}>
              <Text
                size="lg"
                align="left"
                css={{ letterSpacing: '.1rem', lineHeight: '2rem' }}
              >
                No dia 24 de fevereiro de 2022 às 20:00 horas, ocorreu o
                lançamento oficial do ORTE (Observatório Regional de Turismo e
                Eventos), através de uma live no canal oficial do YouTube do
                IFSP- Campus Barretos.
              </Text>

              <Text
                size="lg"
                align="left"
                css={{ letterSpacing: '.1rem', lineHeight: '2rem' }}
              >
                Com a presença das primeiras monitoras do projeto, as
                professoras coordenadoras do projeto e com a ilustre presença da
                Profª Giovanna Tavares Representante da Rede Brasileira de
                Observatórios de Turismo, que discursou sobre o papel dos
                observatórios no monitoramento da atividade turística,
                imprescindível em cidades com grande fluxos de turistas.
              </Text>
            </Flex>

            <Flex width={293} padding>
              <CCarousel controls dark>
                <CCarouselItem>
                  <img src={Image1} alt="" height={260} />
                </CCarouselItem>

                <CCarouselItem>
                  <img src={Image2} alt="" height={260} />
                </CCarouselItem>

                <CCarouselItem>
                  <img src={Image3} alt="" height={260} />
                </CCarouselItem>
              </CCarousel>
            </Flex>
          </Flex>
        </Flex>
      </Card>

      <Card flex padding={32} justify="between" gap={30}>
        <Flex flex direction="column" gap={8}>
          <Text
            size="lg"
            align="center"
            weight="bold"
            css={{ letterSpacing: '.1rem', lineHeight: '2rem' }}
          >
            Confira o vídeo de lançamento abaixo
          </Text>

          <Separator />

          <YoutubeEmbed embedId="_4B8Hww1UlI" />
        </Flex>

        <Flex flex direction="column" gap={8}>
          <Text
            size="lg"
            align="center"
            weight="bold"
            css={{ letterSpacing: '.1rem', lineHeight: '2rem' }}
          >
            Confira o vídeo da entrevista abaixo
          </Text>

          <Separator />

          <YoutubeEmbed embedId="x55jdBp1j20" />
        </Flex>
      </Card>
    </Flex>
  )
}
