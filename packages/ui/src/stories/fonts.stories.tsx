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
  tags: ['fonts'],

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

export const Josefin: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.josefin),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Josefin',
      },
    },
  },
}

export const Kumar: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.kumar),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Kumar',
      },
    },
  },
}

export const Messiri: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.messiri),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Messiri',
      },
    },
  },
}

export const SerifChinese: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(
        fontTypes.serifChinese
      ),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'SerifChinese',
      },
    },
  },
}

export const SilkscreenPixel: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(
        fontTypes.silkscreenPixel
      ),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'SilkscreenPixel',
      },
    },
  },
}

export const Texturina: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.texturina),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Texturina',
      },
    },
  },
}

export const Trispace: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.trispace),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Trispace',
      },
    },
  },
}

export const Almendra: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.almendra),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Almendra',
        fontWeight: 800,
      },
    },
  },
}

export const ComingSoon: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(
        fontTypes.comingSoon
      ),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'ComingSoon',
        fontWeight: 800,
      },
    },
  },
}

export const GideonRoman: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(
        fontTypes.gideonRoman
      ),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'GideonRoman',
        fontWeight: 800,
      },
    },
  },
}

export const ImFell: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.imFell),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'ImFell',
        fontWeight: 800,
      },
    },
  },
}

export const Junge: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.junge),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Junge',
        fontWeight: 800,
      },
    },
  },
}

export const LuxuriousRoman: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(
        fontTypes.luxuriousRoman
      ),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'LuxuriousRoman',
        fontWeight: 800,
      },
    },
  },
}

export const Megrim: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.megrim),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Megrim',
        fontWeight: 800,
      },
    },
  },
}

export const Michelia: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.michelia),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Michelia',
        fontWeight: 800,
      },
    },
  },
}

export const PoiredOne: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.poiredOne),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'PoiredOne',
        fontWeight: 800,
      },
    },
  },
}

export const Rye: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.rye),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Rye',
        fontWeight: 800,
      },
    },
  },
}

export const Sofia: Story = {
  render: (args) =>
    Template({
      ...args,
      fontTypes: Object.keys(fontTypes.sofia),
    }),
  args: {
    meta: {
      style: {
        fontFamily: 'Sofia',
        fontWeight: 800,
      },
    },
  },
}
