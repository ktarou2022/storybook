// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "../../../components/Button/Button";
import React from 'react';
import { css } from '@emotion/css';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;


export const _default: Story = {
  args: {
    children: "Button",
    size: "md",
    // onClick: () => alert('button')
  }
}

export const _Button = () => {
  return (
    <div className={style}>
      <dt >Default</dt>
      <dd>
        <div className="row">
          <Button />
        </div>
      </dd>

      <dt>Valiant</dt>
      <dd>
        <div className="row">
          <Button />
          <Button disabled />
        </div>
        <div className="row">
          <Button mode='secondary' />
          <Button mode='secondary' disabled />
        </div>
        <div className="row">
          <Button mode='thirdly' />
          <Button mode='thirdly' disabled />
        </div>
      </dd>

      <dt>Small</dt>
      <dd>
        <div className="row">
          <Button size='sm' />
        </div>
      </dd>

      <dt>medium</dt>
      <dd>
        <div className="row">
          <Button size='md' />
        </div>
      </dd>

      <dt>Large</dt>
      <dd>
        <div className="row">
          <Button size='lg' />
        </div>
      </dd>

    </div>
  )
}


const style = css`
dt {
  display: block;
  margin-bottom: 1rem;
  color:rgb(35, 34, 30);
}

dd {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

}

.row {
  display: flex;
  gap: 1rem;
}
`
