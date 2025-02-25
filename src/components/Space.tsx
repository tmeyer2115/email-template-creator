import { ComponentConfig } from "@measured/puck"

enum SpacingOptions {
  "16px" = "16px",
  "40px" = "40px",
  "72px" = "72px",
  "96px" = "96px"
}

interface SpaceProps {
  size: SpacingOptions
}

export const Space: ComponentConfig<SpaceProps> = {
  fields: {
    size: {
      type: "select",
      options: Object.keys(SpacingOptions).map(key => { return { label: key, value: key } })
    },
  },
  render: ({ size, puck }) => {
    return (
      <div className="Space" ref={puck.dragRef} style={{ "--size": size } as any} />
    );
  }
}