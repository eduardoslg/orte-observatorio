import { Link } from 'react-router-dom'

import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'

import IFEDERAL from '../../assets/instituto-federal.webp'
import LINHATEMPO from '../../assets/linha-do-tempo.jpg'
import LOGO from '../../assets/logo-rede.webp'
import { Button as Btn } from '../Button'
import { ButtonAnimation, RBOTText } from './styles'

export function Carousel() {
  return (
    <CCarousel controls interval={3000} transition="crossfade" dark>
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
          <Flex justify="around" align="center" padding={130} flex gap>
            <Flex direction="column">
              <RBOTText size="9xl">RBOT</RBOTText>

              <RBOTText size="2xl" css={{ color: '#574F4D' }}>
                Rede Brasileira de Observatórios de Turismo
              </RBOTText>

              <Flex padding="16px 0px">
                <Link
                  to="https://www.instagram.com/rbot.rede/"
                  target="_blank"
                  style={{ color: '#fff' }}
                >
                  <Btn
                    size="lg"
                    colorScheme="red"
                    css={{
                      padding: '0px 50px',
                    }}
                  >
                    Conheça
                  </Btn>
                </Link>
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
              <Link
                to="https://brt.ifsp.edu.br/"
                target="_blank"
                style={{ color: '#fff' }}
              >
                <ButtonAnimation
                  colorScheme="green"
                  css={{
                    padding: '6px 50px',
                  }}
                >
                  Campus Barretos
                </ButtonAnimation>
              </Link>

              <Link
                to="https://sjp.ifsp.edu.br/"
                target="_blank"
                style={{ color: '#fff' }}
              >
                <ButtonAnimation
                  colorScheme="green"
                  css={{
                    padding: '6px 35px',
                  }}
                >
                  Campus São José do Rio Preto
                </ButtonAnimation>
              </Link>
            </Flex>
          </Flex>
        </Card>
      </CCarouselItem>

      <CCarouselItem>
        <Card height={400} css={{ backgroundColor: '$amber1' }}>
          <Flex flex>
            <Flex flex>
              <RBOTText
                size="6xl"
                css={{
                  position: 'absolute',
                  top: '100px',
                  left: '30%',
                  marginLeft: '-50px',
                  color: '$red10',
                }}
              >
                LINHA DO TEMPO / RBOT
              </RBOTText>

              <CImage
                className="d-block w-100"
                src={LINHATEMPO}
                alt="slide 1"
              />

              <Link
                to="https://www.orteobservatorio.com.br/_files/ugd/f5d2a3_457cd624315149bb98c86d133eaa4728.pdf"
                target="_blank"
                style={{ color: '#fff' }}
              >
                <Btn
                  colorScheme="red"
                  css={{
                    position: 'absolute',
                    left: '45%',
                    marginLeft: '-50px',
                    bottom: '40px',
                    padding: '6px 50px',
                  }}
                >
                  CONFIRA
                </Btn>
              </Link>
            </Flex>
          </Flex>
        </Card>
      </CCarouselItem>
    </CCarousel>
  )
}
