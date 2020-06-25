import * as React from 'react'
import {
  Text,
  Row,
} from "@tlon/indigo-react";

const Headline = ({intro, copy}) => (
  <Row expand alignItems='center' minHeight='13'>
    <Row maxWidth='14' p='7'>
      <Text bold gray fontSize='5'>
        <Text bold fontSize='5'>{intro}</Text>
        {copy}
      </Text>
    </Row>
  </Row>
);

export default Headline;
