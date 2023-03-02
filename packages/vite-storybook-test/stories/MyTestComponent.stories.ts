import type { Meta, StoryObj } from '@storybook/react'

import { MyTestComponent } from '../../amazing-component-library/src'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/MyTestComponent',
  component: MyTestComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MyTestComponent>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: 'Pixel',
    color: 'red',
    otherProp: 'hello',
    otherProp2: 'world',
  },
}
