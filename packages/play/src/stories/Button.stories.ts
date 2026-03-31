import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3-vite'
import { expect, userEvent, within, fn } from '@storybook/test'

import { LpButton } from 'lpieces-ui'

type Story = StoryObj<typeof LpButton> & { argTypes?: ArgTypes }

const meta: Meta<typeof LpButton> = {
  title: 'Components/Button 按钮',
  component: LpButton,
   tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary','success','warning','danger','info',''] },
    size: { control: 'select', options: ['large', 'default', 'small',''] },
     disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof LpButton>


const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story & {args:{content: string}} = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
  },
  render: (args: { type: string; content: string }) => ({
    components: { LpButton },
    setup() {
      return { args };
    },
    template: container(
      `<lp-button v-bind="args">{{args.content}}</lp-button>`
    ),
  }),
  
  play: async ({ canvasElement, args, step }: { canvasElement: HTMLElement, args: any, step: any }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.click(canvas.getByText("Button"));
    });
    expect(args.onClick).toHaveBeenCalled();
  },

}

export const Circle: Story = {
  args: {
    icon: "search",
  },
  render: (args: { icon: string }) => ({
    components: { LpButton },
    setup() {
      return { args };
    },
    template: container(`
      <lp-button circle v-bind="args"/>
    `),
  }),
  play: async ({ canvasElement, args, step }: { canvasElement: HTMLElement, args: any, step: any }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("Button"));
    });

    expect(args.onClick).toHaveBeenCalled();
  },
};


export default meta