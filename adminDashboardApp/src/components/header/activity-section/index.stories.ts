import type { Meta, StoryObj } from '@storybook/react';
import ActivitySection from './index';

const meta = {
  title: 'activitySection',
  component: ActivitySection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ActivitySection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
