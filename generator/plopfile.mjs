// plopfile.js or plopfile.mjs
export default function plopGenerator(plop) {
  plop.setGenerator("stories", {
    description: "Create stories for existing components in src/components/ui",
    prompts: [],
    actions: function () {
      return null;
    },
  });
}
