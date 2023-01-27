import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import { C0Toggle, M0Toggle } from '.'

const meta = {
  title: 'Components/Toggle/C0Toggle',
  component: C0Toggle,
  tags: ['autodocs'],
  args: M0Toggle.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C0Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
