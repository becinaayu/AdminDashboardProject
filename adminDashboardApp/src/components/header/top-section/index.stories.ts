import type { Meta, StoryObj } from '@storybook/react';
import TopSection from './index';

const meta = {
  title: 'topSection',
  component: TopSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TopSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
