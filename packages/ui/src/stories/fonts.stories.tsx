import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import { fontTypes } from '../../fonts'
import { S0Container } from '../components/Container/container_0'
import {
  C0Heading,
  M0Heading,
  T0Heading,
} from '../components/Text/heading_0'
import {
  C0Text,
  M0Text,
} from '../components/Text/text_0'

const defaultText = `O homem olha para o mundo exterior para buscar sua salvação; imagina que poderá encontrar felicidade ao possuir algumas de suas formas. Mas não poderá encontrar felicidade nessas formas se não a puder encontrar em sua própria mente, pois é a sua mente que faz as formas...`

const meta = {
  title: 'Fonts',
  component: C0Heading,
  tags: ['autodocs'],

  args: {
    ...M0Heading.default,
    children: defaultText,
  },
  parameters: {
    layout: 'centered',
    background: null,
  },
  argTypes: {
    children: {
      type: 'string',
    },
    meta: {
      control: false,
    },
  },
} satisfies Meta<typeof C0Heading>

export default meta
type Story = StoryObj<typeof meta>

const Template = ({
  children,
  fontTypes,
  ...args
}: { fontTypes: string[] } & T0Heading.Props) => {
  const resolve = fontTypes.map((type, i) => {
    console.log('type: ', type)
    console.log('inde: ', i)
    const fontFamily =
      (args.meta?.style?.fontFamily ?? '') + type
    return (
      <S0Container.Main
        key={'my-key-' + i}
        style={{
          padding: '5rem',
          margin: '0',
          width: '100%',
          fontFamily,
        }}
      >
        <C0Heading
          {...args}
          meta={{
            ...args.meta,
            style: { fontFamily },
          }}
        >
          {type}
        </C0Heading>
        <C0Text
          meta={{
            ...args.meta,
            style: {
              fontFamily: fontFamily,
            },
          }}
        >
          {children}
        </C0Text>
      </S0Container.Main>
    )
  })
  return <div>{resolve}</div>
}

export const Lato: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.lato),
    }),
  args: {
    meta: {
      style: { fontFamily: 'Lato' },
    },
  },
}

export const Montserrat: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(
        fontTypes.montserrat
      ),
    }),
  args: {
    meta: {
      style: { fontFamily: 'Montserrat' },
    },
  },
}

export const Arefruqaa: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.arefruqaa),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Arefruqaa',
        fontStyle: 'italic',
      },
    },
  },
}

export const Besley: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.besley),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Besley',
      },
    },
  },
}

export const BigShoulders: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(
        fontTypes.bigShoulders
      ),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'BigShoulders',
      },
    },
  },
}

export const Cormorant: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.cormorant),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Cormorant',
      },
    },
  },
}

export const FlowBlock: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.flowBlock),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'FlowBlock',
      },
    },
  },
}

export const Geo: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.geo),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Geo',
      },
    },
  },
}

export const Grupter: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.grupter),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Grupter',
      },
    },
  },
}
