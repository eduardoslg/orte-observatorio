import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Separator } from '@siakit/separator'
import { Text } from '@siakit/text'

import LOGO from '../../assets/logo-grande.webp'

export function History() {
  return (
    <Flex flex padding="16px 0px" direction="column" className="container" gap>
      <Card padding flex gap={40}>
        <Flex align="center">
          <img src={LOGO} alt="" height={500} width={400} />
        </Flex>

        <Flex flex direction="column" gap={8}>
          <Text size="6xl" css={{ fontWeight: '$bold' }}>
            Nossa História
          </Text>

          <Separator />

          <Text size="md">
            A ideia deste projeto de extensão surgiu em 2020 com a chegada da
            pandemia, onde ao buscar informações sobre o turismo e os eventos da
            nossa região, a fim de entender o planejamento e desenvolvimento do
            turismo local, observou-se a falta de dados concretos e de um local
            propício e confiável para divulgá-los.
          </Text>

          <Text size="md">
            A falta de informações e a complexa relação entre os municípios,
            produziam incertezas nos discentes do Curso Superior em Gestão de
            Turismo, principalmente para os que viriam a produzir trabalhos de
            conclusão de cursos.
          </Text>

          <Text size="md">
            Desse modo, docentes do IFSP-Barretos, depois de discutirem e
            conhecerem melhor os observatórios, vislumbraram a importância da
            criação do mesmo na nossa região, a fim de suprir demandas de
            assuntos do turismo e eventos locais. Inspirados ainda, a incutir
            significado nas pesquisas realizadas pela academia, viabilizar o
            contato do discente com a iniciação científica e a disseminar a
            produção de conhecimentos acadêmicos.
          </Text>

          <Text size="md">
            A criação do Observatório Regional de Turismo e Eventos aliado a uma
            instituição acadêmica traz ainda, a inserção dos alunos em projetos
            capazes de abrir caminho para uma ocupação laboral, tornando o
            observatório um local não só de realização de pesquisas, mas que
            também propicia o contato com o ambiente de trabalho e a
            possibilidade de novas ocupações.
          </Text>
        </Flex>
      </Card>

      <Card flex padding>
        <Flex flex>
          <Text size="6xl" css={{ fontWeight: '$bold' }}>
            Lançamento ORTE
          </Text>
        </Flex>
      </Card>
    </Flex>
  )
}
