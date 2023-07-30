import { Link } from 'react-router-dom'

import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  PhoneCall,
} from 'phosphor-react'

import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import IFSPB from '../../assets/IFSP-barretos.webp'
import IFSPRP from '../../assets/IFSP-rio-preto.webp'
import LOGOREDE from '../../assets/logo-rede.webp'

export function Foooter() {
  return (
    <Flex className="container">
      <Card
        align="center"
        flex
        gap
        justify="between"
        css={{ backgroundColor: '#fcd34d' }}
      >
        <Flex padding>
          <Link to="https://www.instagram.com/rbot.rede" target="_blank">
            <img src={LOGOREDE} alt="" height={120} />
          </Link>
        </Flex>

        <Flex direction="column" gap={8}>
          <Flex>
            <Text css={{ fontWeight: '$bold' }}>Fale conosco</Text>
          </Flex>

          <Flex gap={8} align="center">
            <PhoneCall size={20} weight="fill" />

            <Link
              to="https://api.whatsapp.com/send?phone=5517996289233&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20Instagram%20%3A)"
              style={{ color: '#574F4D' }}
            >
              <Text
                css={{
                  fontWeight: '$bold',
                  textDecoration: 'underline',
                }}
              >
                (17) 99621-5556
              </Text>
            </Link>
          </Flex>

          <Flex gap={8} align="center">
            <Envelope size={20} weight="fill" />

            <Link
              to="mailto:orte.observatorio@gmail.com"
              style={{ color: '#574F4D' }}
            >
              <Text
                css={{
                  fontWeight: '$bold',
                  textDecoration: 'underline',
                }}
              >
                orte.observatorio@gmail.com
              </Text>
            </Link>
          </Flex>
        </Flex>

        <Flex flex direction="column">
          <Flex flex>
            <Text css={{ fontWeight: '$bold' }}>
              Siga-nos nas redes sociais
            </Text>
          </Flex>

          <Flex flex gap={8}>
            <Link
              to="https://www.instagram.com/orte.observatorio"
              style={{ color: '#574F4D' }}
              target="_blank"
            >
              <InstagramLogo size={40} weight="bold" />
            </Link>

            <Link
              to="https://www.facebook.com/profile.php?id=100090690494363"
              style={{ color: '#574F4D' }}
              target="_blank"
            >
              <FacebookLogo size={40} weight="bold" />
            </Link>
          </Flex>

          <Flex height={20} />
        </Flex>

        <Flex flex>
          <Link to="https://brt.ifsp.edu.br/" target="_blank">
            <img src={IFSPB} alt="" />
          </Link>
        </Flex>

        <Flex flex>
          <Link to="https://sjp.ifsp.edu.br/" target="_blank">
            <img src={IFSPRP} alt="" />
          </Link>
        </Flex>
      </Card>
    </Flex>
  )
}
