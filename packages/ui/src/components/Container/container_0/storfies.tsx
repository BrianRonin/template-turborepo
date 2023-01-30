import type { StoryObj } from '@storybook/react'
import { S0Container } from '.'

const meta = {
  title: 'components/Container/S0Container',
  component: S0Container.Main,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    background: null,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    children: <span>conteudo</span>,
  },
}
