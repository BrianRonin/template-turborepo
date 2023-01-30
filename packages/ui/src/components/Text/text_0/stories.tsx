import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import { C0Text, M0Text } from '.'

const meta = {
  title: 'Components/Text/C0Text',
  component: C0Text,
  tags: ['autodocs'],
  args: M0Text.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} satisfies Meta<typeof C0Text>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
