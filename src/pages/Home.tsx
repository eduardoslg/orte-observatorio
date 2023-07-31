import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import LOGO from '../../src/assets/orte.webp'
import { Carousel } from '../components/Carousel'

export function Home() {
  return (
    <Flex
      padding="16px 0px"
      flex
      className="container"
      direction="column"
      gap
      flexWrap="wrap"
    >
      <Flex flex direction="column" gap flexWrap="wrap">
        <Carousel />

        <Card flex padding={32} gap={60} align="center">
          <Flex>
            <img src={LOGO} alt="" />
          </Flex>

          <Flex flex direction="column" gap>
            <Text size="lg" align="left">
              A missão de ORTE é ser um organismo parceiro de instituições
              públicas e privadas, capaz de fornecer informações honestas e
              genuínas, através dos resultados de nossas pesquisas.
            </Text>

            <Text size="lg" align="left">
              A visão do nosso projeto consiste em intercalar setores de nossa
              sociedade a fim de contribuir para a melhoria do turismo regional,
              sobretudo dando a oportunidade a comunidade acadêmica de vivenciar
              processos cotidianos de sua futura área de atuação.
            </Text>

            <Text size="lg" align="left">
              Nossos valores são principalmente: A fraternidade pois acreditamos
              na ascensão de uma região turística e não só de um destino. A
              cooperação uma vez que trabalharemos em conjunto com nossos
              parceiros do setor público e privado para colaborar com nossas
              pesquisas. E imparcialidade a fim de produzir informações
              confiáveis e seguras capaz de ser utilizadas como base para tomada
              de decisões.
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  )
}
