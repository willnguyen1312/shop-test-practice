import { Text } from "@shopify/polaris";
import React from "react";

export function AppOne() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <Text as="p">Loading</Text>;
  }

  return <Text as="h1">Loaded</Text>;
}
