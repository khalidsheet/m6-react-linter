import React from 'react';

import { Todo } from './Todo';

export default {
  title: 'Todo',
  component: Todo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  showCode: true,
};

const Template = (args) => <Todo {...args} />;

export const ShowTodo = Template.bind({});

ShowTodo.args = {
  todo: 'This is a todo',
  onChecked: () => {},
};
