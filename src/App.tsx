import { Text } from "@shopify/polaris";
import React from "react";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <Text as="p">Loading</Text>;
  }

  return <Text as="h1">Loaded</Text>;
}

export default App;
