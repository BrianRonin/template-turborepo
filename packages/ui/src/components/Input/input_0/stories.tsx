import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import { AiOutlineCheck } from 'react-icons/ai'
import {
  IoMdLock,
  IoMdMail,
} from 'react-icons/io'
import { C0Input, M0Input } from '.'

const meta = {
  title: 'Components/Input/C0Input',
  component: C0Input,
  tags: ['autodocs'],
  args: M0Input.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
  argTypes: {
    onChange: {
      control: false,
    },
    reference: {
      control: false,
    },
    icon: {
      options: [
        'email',
        'password',
        'confirm',
        'none',
      ],
      mapping: {
        email: <IoMdMail />,
        password: <IoMdLock />,
        confirm: <AiOutlineCheck />,
        none: null,
      },
    },
    disabled: {
      defaultValue: false,
    },
    meta: {
      control: false,
    },
  },
} satisfies Meta<typeof C0Input>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
