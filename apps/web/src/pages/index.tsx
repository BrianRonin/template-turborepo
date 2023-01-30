import { C0Heading } from 'ui'
import { Base } from '../templates/Base'

export default function Home() {
  return (
    <Base>
      <div
        style={{
          textAlign: 'center',
          marginTop: '10rem',
        }}
      >
        <C0Heading as='h1' size='big'>
          Good luck 👻
        </C0Heading>
      </div>
    </Base>
  )
}
