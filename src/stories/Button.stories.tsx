import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: '/Components/Button'
} 

export default meta;

type Story = StoryObj<typeof meta>;

export  const Base: Story = {
    args: {
        variant: 'green',
        size: 'md'
    }
}

export  const Original: Story = {
    args: {
        variant: 'black',
        size: "sm"
    }
}

export  const Red: Story = {
    args: {
        variant: 'red',
        size: "lg"
    }
}

export const Grouped: Story = {
    render: (args) => <div className='flex-col flex gap-1.5'>
        <Button variant = "red" size='md'/>
        <Button variant = "black" size='lg'/>
        <Button variant = "green" size='sm'/>

    </div> 
}


