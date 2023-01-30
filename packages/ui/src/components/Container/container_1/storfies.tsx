import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import { C1Container, M1Container } from '.'

const meta = {
  title: 'Components/Container/C1Container',
  component: C1Container,
  tags: ['autodocs'],
  args: M1Container.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C1Container>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
