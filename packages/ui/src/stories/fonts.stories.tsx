import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import { S0Container } from '../components/Container/container_0'
import {
  C0Heading,
  M0Heading,
  T0Heading,
} from '../components/Text/heading_0'

const meta = {
  title: 'Typeset',
  component: C0Heading,
  tags: ['autodocs'],
  args: M0Heading.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C0Heading>

export default meta
type Story = StoryObj<typeof meta>

const Template = ({
  fontFamily,
  children,
  ...args
}: T0Heading.Props) => {
  const types = [
    'Regular',
    'Black',
    'BlackItalic',
    'Bold',
    'BoldItalic',
    'Light',
    'LightItalic',
    'Thin',
    'ThinItalic',
  ].map((type) => {
    return (
      <S0Container.Main
        style={{
          padding: '5rem',
          margin: '0',
          width: '100%',
        }}
      >
        <C0Heading
          {...args}
          fontFamily={fontFamily + type}
        >
          {fontFamily + type}
        </C0Heading>
        <C0Heading
          {...args}
          fontFamily={fontFamily + type}
        >
          {children}
        </C0Heading>
      </S0Container.Main>
    )
  })
  return <>{types}</>
}

export const Heading: Story = {
  args: {
    fontFamily: 'Lato',
  },
  render: Template,
}
