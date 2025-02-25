import { ComponentConfig, DropZone } from "@measured/puck";

interface GridProps {
  numColumns: number,
  gap: number
}

function GridInternal({ numColumns, gap }: GridProps) {
  return (
    <div>
      <DropZone
        zone="grid"
        className="Grid"
        style={{
          gap,
          gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        }}
      />
    </div>
  );
}

export const Grid: ComponentConfig<GridProps> = {
  fields: {
    numColumns: {
      type: "number",
      label: "Number of columns"
    },
    gap: {
      type: "number",
      label: "Gap"
    }
  },
  render: (props) => {
    return <GridInternal {...props} />;
  }
}