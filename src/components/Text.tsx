import { ComponentConfig } from "@measured/puck";
import textFieldResolver from "../common/TextFieldResolver";

interface TextProps {
  align: "left" | "center" | "right";
  text: string;
  size?: "s" | "m";
  maxWidth?: string;
}

function TextInternal({ align, text, size, maxWidth }: TextProps) {
  return (
    <div style={{ maxWidth }}>
      <span
        className="Text"
        style={{
          display: "flex",
          textAlign: align,
          width: "100%",
          fontSize: size === "m" ? "20px" : "16px",
          fontWeight: 300,
          maxWidth,
          justifyContent:
            align === "center"
              ? "center"
              : align === "right"
              ? "flex-end"
              : "flex-start",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export const Text: ComponentConfig<TextProps> = {
  fields: {
    text: { type: "textarea" },
    size: {
      type: "select",
      options: [
        { label: "S", value: "s" },
        { label: "M", value: "m" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    maxWidth: { type: "text" }
  },
  resolveData: async ({ props }) => {
    const resolvedContent = /\${([a-zA-Z]+\.?[a-zA-Z]+)}/.test(props.text) ? textFieldResolver(props.text) : props.text;
    return {
      props: {
        ...props,
        text: resolvedContent
      },
    };
  },
  defaultProps: {
    align: "left",
    text: "Text",
    size: "m",
  },
  render: (props) => {
    return <TextInternal {...props} />
  }
}