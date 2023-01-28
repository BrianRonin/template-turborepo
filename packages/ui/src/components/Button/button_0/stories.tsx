import { IoIosAlarm } from 'react-icons/io'
import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import { M0Button, C0Button } from '.'
import { Loading } from './mock'

const meta = {
  title: 'Components/Button/C0Button',
  component: C0Button,
  tags: ['autodocs'],
  args: M0Button.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
  argTypes: {
    loadingSettings: {
      options: ['base'],
      mapping: {
        base: {
          icon: <Loading />,
          children: 'children',
          iconDirection: 'right',
          meta: {
            style: { color: 'rgba(0, 0, 0, 0)' },
          },
          disabled: true,
        },
      },
    },
    meta: {
      control: false,
    },
    custom: {
      control: false,
    },
    ref: {
      control: false,
    },
    icon: {
      control: false,
    },
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
