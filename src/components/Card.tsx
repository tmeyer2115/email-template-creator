import { ComponentConfig } from "@measured/puck";
import YelpSvg from '../../static/svg/site-icon-15.svg';
import FacebookSvg from '../../static/svg/site-icon-71.svg';
import FirstPartySvg from '../../static/svg/site-icon-283.svg';

enum Publishers {
  "First Party" = "First Party",
  "Yelp" = "Yelp",
  "Facebook" = "Facebook"
}

interface CardProps {
  title: string,
  description: string,
  publisher: Publishers
}

function CardInternal({ title, description, publisher }: CardProps) {
  let iconSrc;
  switch (publisher) {
    case Publishers["First Party"]:
      iconSrc = FirstPartySvg.src;
      break;
    case Publishers.Yelp:
      iconSrc = YelpSvg.src;
      break;
    case Publishers.Facebook:
      iconSrc = FacebookSvg.src;
      break;
  }

  return (
    <div className="Card">
      <div className="Card-inner">
        <div className="Card-icon"><img src={iconSrc}/></div>
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
    },
    publisher: {
      type: "select",
      options: Object.keys(Publishers).map(key => { return { label: key, value: key } })
    }
  },
  defaultProps: {
    title: "Please leave us a review!",
    description: "Please leave a review on our website",
    publisher: Publishers["First Party"]
  },
  render: (props) => {
    return <CardInternal {...props} />
  }
}