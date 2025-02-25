import { ComponentConfig } from "@measured/puck";

interface ImageProps {
  src: string,
}

function ImageInternal({ src }: ImageProps) {
  return <img className="Image" src={src} />;
}

export const Image: ComponentConfig<ImageProps> = {
  fields: {
    src: {
      type: "text"
    }
  },
  render: (props) => <ImageInternal {...props} />
}