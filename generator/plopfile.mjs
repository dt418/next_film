import path from "path";

function toKebabCase(str) {
  return str
    .replace(/[A-Z]/g, (match) => "-" + match.toLowerCase())
    .replace(/^-/, "");
}
export default function plopGenerator(plop) {
  plop.setGenerator("component-story", {
    description: "Generate a story file for a component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Enter the component name:",
      },
      {
        type: "input",
        name: "componentPath",
        message: "Enter the component path:",
        default: path.join(process.cwd(), "src", "components", "ui"), // Default path, change as needed
      },
    ],
    actions: (data) => {
      const componentPath = path.join(process.cwd(), "src", "components", "ui");
      const kebabComponentName = toKebabCase(data.componentName);
      const componentFile = path.join(
        componentPath,
        `${kebabComponentName}.stories.tsx`
      );

      return [
        {
          type: "add",
          path: componentFile,
          templateFile: "templates/component.stories.tsx.hbs",
        },
      ];
    },
  });
}
