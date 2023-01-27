import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import { C0Heading, M0Heading } from '.'

const meta = {
  title: 'Components/Text/C0Heading',
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

export const Base: Story = {}
