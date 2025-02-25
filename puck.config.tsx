import { Card } from "./src/components/Card";
import { Flex } from "./src/components/Flex";
import { Grid } from "./src/components/Grid";
import { Heading } from "./src/components/Heading";
import { Image } from "./src/components/Image";
import { Space } from "./src/components/Space";
import { Text } from "./src/components/Text";

const config = {
  categories: {
    layout: {
      components: ["Grid", "Flex", "Space"]
    },
    typography: {
      components: ["Text", "Heading"]
    },
    other: {
      components: ["Card", "Image"],
    }
  },
  components: {
    Space,
    Text,
    Card,
    Grid,
    Flex,
    Heading,
    Image
  },
};

export default config;