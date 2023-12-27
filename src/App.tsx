import { Text } from "@shopify/polaris";
import { useEffect, useState } from "react";

export function AppOne() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <Text as="p">Loading</Text>;
  }

  return <Text as="h1">Loaded</Text>;
}

export function AppTwo() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      {isLoading ? <Text as="p">Loading</Text> : <Text as="h1">Loaded</Text>}
    </div>
  );
}
