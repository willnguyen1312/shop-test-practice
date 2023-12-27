import { Page, Text } from "@shopify/polaris";
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

import { Button, Form, TextField } from "@shopify/polaris";

export function AppThree() {
  const [result, setResult] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  function handleSubmit() {
    setResult(firstValue + secondValue);
  }

  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <TextField
          type="number"
          value={firstValue.toString()}
          onChange={(value) => setFirstValue(+value)}
          label="First number"
          autoComplete="off"
        />
        <TextField
          type="number"
          value={secondValue.toString()}
          onChange={(value) => setSecondValue(+value)}
          label="Second Number"
          autoComplete="off"
        />

        <Text visuallyHidden as="h3">
          Result: {result}
        </Text>

        <p role="status">Result: {result}</p>

        <Button submit>Calculate</Button>
      </Form>
    </Page>
  );
}
