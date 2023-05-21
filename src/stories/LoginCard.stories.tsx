import LoginCard from "./LoginCard";
import React from "react";
import {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof LoginCard> = {
    component: LoginCard,
    title: '/Components/LoginCard'
} 

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'primary',
        size: 'sm'
    }
}

export const Another: Story = {
    args: {
        variant: 'secondary'
    }
}

export const New: Story = {
    args : {
        variant: 'tertiory'
    }
}
