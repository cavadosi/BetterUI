// Tabs.stories.ts
import Tabs from "../components/Tabs.vue";

export default {
  title: "Vue/Tabs",
  component: Tabs,
  argTypes: {
    tabs: {
      control: { type: "object" },
    },
  },
};

const Template = (args: any) => ({
  components: { Tabs },
  setup() {
    return { args };
  },
  template: '<Tabs v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      label: "Tab 1",
      content: "<p>Content for Tab 1.</p>",
    },
    {
      label: "Tab 2",
      content: "<p>Content for Tab 2.</p>",
    },
    {
      label: "Tab 3",
      content: "<p>Content for Tab 3.</p>",
    },
  ],
};
