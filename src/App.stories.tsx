import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./App";

const meta = {
  title: "App",
  component: App,
} satisfies Meta<typeof App>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
