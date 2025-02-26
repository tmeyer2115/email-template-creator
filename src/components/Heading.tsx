import { ComponentConfig } from "@measured/puck";

enum HeadingSizes {
  "S" = "S",
  "M" = "M",
  "L" = "L",
  "XL" = "XL"
}

interface HeadingProps {
  align: "left" | "center" | "right";
  text: string,
  size: HeadingSizes
}

function HeadingInternal({ align, text, size }: HeadingProps) {
  return (
    <span style={{ display: "block", textAlign: align, width: "100%" }} className={`Heading Heading--${size.toLocaleLowerCase()}`}>
      {text}
    </span>
  );
}

export const Heading: ComponentConfig<HeadingProps> = {
  fields: {
    text: {
      type: "textarea"
    },
    size: {
      type: "select",
      options: Object.keys(HeadingSizes).map(key => { return { label: key, value: key } })
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    }
  },
  defaultProps: {
    align: "left",
    text: "Heading",
    size: HeadingSizes.M,
  },
  render: (props) => <HeadingInternal {...props} />
}