import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './index';

const meta = {
  title: 'sideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
