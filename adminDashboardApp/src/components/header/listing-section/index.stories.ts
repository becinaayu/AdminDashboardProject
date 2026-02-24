import type { Meta, StoryObj } from '@storybook/react';
import ListingSection from './index';

const meta = {
  title: 'listingSection',
  component: ListingSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ListingSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
