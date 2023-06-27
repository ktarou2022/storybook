
import type { Meta, StoryObj } from '@storybook/react';

import { PasswordInput } from '../../../components/TextInput/PasswordInput';
import { ChangeEvent, useState } from 'react';

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    label: "Password",
    description: "Password must include at least one letter, number and special character",
    placeholder: "placeholder",
    before: "@",
    errorMessage: "error",
    withAsterisk: true
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }

    return (
      <PasswordInput
        {...args}
        value={value}
        onChange={onChange}
      />
    )
  }

}

export const Error: Story = {
  args: {
    label: "Password",
    description: "Password must include at least one letter, number and special character",
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
      <PasswordInput
        {...args}
        value={value}
        onChange={onChange}
      />
    )
  }

}
