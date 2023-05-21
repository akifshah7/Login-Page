import {Meta, StoryObj} from '@storybook/react';
import ConfirmationCard from './ConfirmationCard';

const meta: Meta<typeof ConfirmationCard> = {
    title: 'Components/ConfirmationCard',
    component: ConfirmationCard
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = {
    args: {
        label: 'Signed in as abcd',
        color: 'blue'
    }
}