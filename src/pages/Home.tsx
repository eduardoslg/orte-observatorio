import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  PhoneCall,
} from 'phosphor-react'

import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import IFSPB from '../../src/assets/IFSP-barretos.webp'
import IFSPRP from '../../src/assets/IFSP-rio-preto.webp'
import LOGOREDE from '../../src/assets/logo-rede.webp'
import LOGO from '../../src/assets/orte.webp'
import { Container } from './styles'

export function Home() {
  return (
    <Flex flex className="container" direction="column" gap>
      <Flex flex padding="16px 0px" gap={8}>
        <Container flex>Home</Container>

        <Container flex>História</Container>

        <Container flex>Quem somos</Container>

        <Container flex>Boletins</Container>

        <Container flex>Contato</Container>
      </Flex>

      <Flex flex direction="column" gap>
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

      <Flex flex>
        <Card
          align="center"
          flex
          padding
          gap
          justify="between"
          css={{ backgroundColor: '#fcd34d' }}
        >
          <Flex padding>
            <img src={LOGOREDE} alt="" height={120} />
          </Flex>

          <Flex direction="column" gap={8}>
            <Flex>
              <Text css={{ fontWeight: '$bold' }}>Fale conosco</Text>
            </Flex>

            <Flex gap={8} align="center">
              <PhoneCall size={20} weight="fill" />

              <Text css={{ fontWeight: '$bold' }}>(17) 99621-5556</Text>
            </Flex>

            <Flex gap={8} align="center">
              <Envelope size={20} weight="fill" />

              <Text css={{ fontWeight: '$bold' }}>
                orte.observatorio@gmail.com
              </Text>
            </Flex>
          </Flex>

          <Flex flex direction="column">
            <Flex flex>
              <Text css={{ fontWeight: '$bold' }}>
                Siga-nos nas redes sociais
              </Text>
            </Flex>

            <Flex flex gap={8}>
              <InstagramLogo size={40} weight="bold" />

              <FacebookLogo size={40} weight="bold" />
            </Flex>

            <Flex height={20} />
          </Flex>

          <Flex flex>
            <img src={IFSPB} alt="" />
          </Flex>

          <Flex flex>
            <img src={IFSPRP} alt="" />
          </Flex>
        </Card>
      </Flex>
    </Flex>
  )
}
