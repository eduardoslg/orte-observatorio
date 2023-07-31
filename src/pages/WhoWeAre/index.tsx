import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

export function WhoWeAre() {
  return (
    <Flex className="container" padding="16px 0px">
      <Card flex padding>
        <Text>Página sobre nós</Text>
      </Card>
    </Flex>
  )
}
