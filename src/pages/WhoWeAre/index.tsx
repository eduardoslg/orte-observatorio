import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

export function WhoWeAre() {
  return (
    <Flex className="container" padding="16px 0px">
      <Card flex padding>
        <Text size="6xl" css={{ fontWeight: '$bold' }}>
          Quem somos?
        </Text>
      </Card>
    </Flex>
  )
}
