import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { Button } from '@siakit/button'
import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import IFEDERAL from '../../assets/instituto-federal.webp'
import LINHATEMPO from '../../assets/linha-do-tempo.jpg'
import LOGO from '../../assets/logo-rede.webp'

export function Carousel() {
  return (
    <CCarousel controls>
      <CCarouselItem>
        <Card
          flex
          height={400}
          padding
          css={{
            background:
              'linear-gradient(90deg, rgba(223,215,196,1) 0%, rgba(250,215,240,1) 100%)',
          }}
        >
          <Flex justify="around" align="center" padding flex gap>
            <Flex direction="column">
              <Text size="9xl" css={{ fontWeight: '$bold', color: '$red11' }}>
                RBOT
              </Text>

              <Text size="2xl">
                Rede Brasileira de Observatórios de Turismo
              </Text>

              <Flex padding="16px 0px">
                <Button size="lg" colorScheme="red">
                  Conheça
                </Button>
              </Flex>
            </Flex>

            <Flex height={150}>
              <CImage className="d-block w-100" src={LOGO} alt="slide 1" />
            </Flex>
          </Flex>
        </Card>
      </CCarouselItem>

      <CCarouselItem>
        <Card
          flex
          height={400}
          padding
          css={{
            background:
              'linear-gradient(100deg, rgba(231,251,226,1) 0%, rgba(244,232,255,1) 13%)',
          }}
        >
          <Flex flex justify="center" align="center" direction="column">
            <Flex flex padding="30px 0px">
              <CImage className="d-block w-100" src={IFEDERAL} alt="slide 1" />
            </Flex>

            <Flex padding="16px 0px" flex gap={150}>
              <Button colorScheme="green">Campus Barretos</Button>

              <Button colorScheme="green">Campus São José do Rio Preto</Button>
            </Flex>
          </Flex>
        </Card>
      </CCarouselItem>

      <CCarouselItem>
        <Card height={400} css={{ backgroundColor: '$amber1' }}>
          <Flex flex>
            <Flex flex>
              <Text
                size="5xl"
                css={{
                  fontWeight: '$bold',
                  position: 'absolute',
                  top: '100px',
                  left: '35%',
                  marginLeft: '-50px',
                  color: '$red10',
                }}
              >
                LINHA DO TEMPO / RBOT
              </Text>

              <CImage
                className="d-block w-100"
                src={LINHATEMPO}
                alt="slide 1"
              />

              <Button
                colorScheme="red"
                css={{
                  position: 'absolute',
                  left: '50%',
                  marginLeft: '-50px',
                  bottom: '40px',
                }}
              >
                CONFIRA
              </Button>
            </Flex>
          </Flex>
        </Card>
      </CCarouselItem>
    </CCarousel>
  )
}
