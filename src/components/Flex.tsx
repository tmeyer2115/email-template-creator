import { ComponentConfig, DropZone } from "@measured/puck";

interface FlexProps {
  justifyContent: "start" | "center" | "end";
  direction: "row" | "column"
  gap: number
}

function FlexInternal({ justifyContent, direction, gap }: FlexProps) {
  return (
    <div style={{ height: "100%" }}>
      <DropZone
        className="Flex"
        style={{
          justifyContent,
          flexDirection: direction,
          gap,
        }}
        zone="flex"
      />
    </div>
  );
}

export const Flex: ComponentConfig<FlexProps> = {
  fields: {
    direction: {
      label: "Direction",
      type: "radio",
      options: [
        { label: "Row", value: "row" },
        { label: "Column", value: "column" },
      ],
    },
    justifyContent: {
      label: "Justify Content",
      type: "radio",
      options: [
        { label: "Start", value: "start" },
        { label: "Center", value: "center" },
        { label: "End", value: "end" },
      ],
    },
    gap: {
      label: "Gap",
      type: "number",
      min: 0,
    }
  },
  defaultProps: {
    justifyContent: "start",
    direction: "row",
    gap: 24
  },
  render: (props) => <FlexInternal {...props}/>
}