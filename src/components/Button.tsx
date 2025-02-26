import { ComponentConfig } from "@measured/puck";

interface ButtonProps {
  label: string,
  variant: "primary" | "secondary"
}

function ButtonInternal({ label, variant }: ButtonProps) {
  return (
      <button className={`Button Button--${variant}`}>
        {label}
      </button>
  );
}

export const Button: ComponentConfig<ButtonProps> = {
  fields: {
    label: { type: "text" },
    variant: {
      type: "radio",
      options: [
        { label: "primary", value: "primary" },
        { label: "secondary", value: "secondary" },
      ],
    },
  },
  defaultProps: {
    label: "Button",
    variant: "primary"
  },
  render: (props) => <ButtonInternal {...props} />
}