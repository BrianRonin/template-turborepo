import { IoIosAlarm } from 'react-icons/io'
import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import { M0Button, C0Button } from '.'

const meta = {
  title: 'Components/Button/C0Button',
  component: C0Button,
  tags: ['autodocs'],
  args: M0Button.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C0Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
export const Outline: Story = {
  args: {
    outline: true,
  },
}
export const Icon: Story = {
  args: {
    outline: false,
    icon: <IoIosAlarm />,
  },
}
