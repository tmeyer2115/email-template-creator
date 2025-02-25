import { ComponentConfig } from "@measured/puck";

interface CardProps {
  title: string,
  description: string,
  icon?: string
}

function CardInternal({ title, description, icon }: CardProps) {
  return (
    <div className="Card">
      <div className="Card-inner">
        <div className="Card-title">{title}</div>
        <div className="Card-description">{description}</div>
      </div>
    </div>
  );
}

export const Card: ComponentConfig<CardProps> = {
  fields: {
    title: {
      type: "text"
    },
    description: {
      type: "textarea"
    }
  },
  render: (props) => {
    return <CardInternal {...props} />
  }
}