import { Card } from "./src/components/Card";
import { Flex } from "./src/components/Flex";
import { Grid } from "./src/components/Grid";
import { Space } from "./src/components/Space";
import { Text } from "./src/components/Text";

const config = {
  categories: {
    layout: {
      components: ["Grid", "Flex", "Space"]
    },
    typography: {
      components: ["Text"]
    },
    other: {
      components: ["Card"]
    }
  },
  components: {
    Space,
    Text,
    Card,
    Grid,
    Flex
  },
};

export default config;