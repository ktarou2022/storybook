// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from "../../../components/TextInput/Defualt";
import { ChangeEvent, useState } from 'react';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Label",
    description: "description",
    placeholder: "placeholder",
    before: "@",
    errorMessage: "error"
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }
    const onDelete = () => {
      setValue("")
    }

    return (
      <TextInput
        {...args}
        value={value}
        onChange={onChange}
        onDelete={onDelete}
      />
    )
  }

}

export const Error: Story = {
  args: {
    label: "Label",
    description: "description",
    placeholder: "placeholder",
    before: "@",
    errorMessage: "error",
    error: true
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }
    const onDelete = () => {
      setValue("")
    }

    return (
      <TextInput
        {...args}
        value={value}
        onChange={onChange}
        onDelete={onDelete}
      />
    )
  }

}
