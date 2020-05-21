import * as React from "react";

import {
  Row,
  Text,
  Rule,
  Measure,
  Col,
  TwoUp,
  Center,
  Box,
} from "@tlon/indigo-react";
import { checkPropTypes } from "prop-types";
import { isOdd } from "../utils";

// const sequence = num => Array.from(Array(num), (_, i) => i);

const Table = ({component}) => component.props.map(prop => {
  const assignment = prop.assignment
  return (
    <Col expand>
        <Row p='2' px='7'><Text bold>{assignment}</Text></Row>

    {
      prop.types.map(type => {
      const name = type.name
      return (
        <Col>
        <Row p='2' px='7' pl='7'><Text bold>{name || 'Other'}</Text></Row>
        <Row p='2' px='7' pl='7'>
          <Col width='25%'>
            <Text gray bold>Name</Text>
          </Col>
          <Col width='25%'>
            <Text gray bold>Optional</Text>
          </Col>
          <Col width='25%'>
            <Text gray bold>Typing</Text>
          </Col>
          <Col width='25%'>
            <Text gray bold>Default Value</Text>
          </Col>
        </Row>
        {
          type.types.map((innerType, index) => {
            const innerName = innerType.name
            return (
              <Row p='2' px='7' pl='7' backgroundColor={isOdd(index) ? 'white' : 'gray0'}>
                <Col width='25%'>
                  <Text mono>{innerType.name}</Text>
                </Col>
                <Col width='25%'>
                  <Text mono>{innerType.optional.toString()}</Text>
                </Col>
                <Col width='25%'>
                  <Text mono>{innerType.type}</Text>
                </Col>
                <Col width='25%'>
                  <Text mono>undefined</Text>
                </Col>
              </Row>
            )
          })
        }
        </Col>
      )
    })
  }
  </Col>
  )
})

const components = {
  button: {
    name: 'Button',
    key: 'button',
    props: [
      {
        "assignment": "Props",
        "types": [
          {
            "name": "SpaceProps",
            "types": [
              {
                "name": "m",
                "optional": true,
                "documentation": "Margin on top, left, bottom and right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "margin",
                "optional": true,
                "documentation": "Margin on top, left, bottom and right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "mt",
                "optional": true,
                "documentation": "Margin on top",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "marginTop",
                "optional": true,
                "documentation": "Margin on top",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "mr",
                "optional": true,
                "documentation": "Margin on right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "marginRight",
                "optional": true,
                "documentation": "Margin on right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "mb",
                "optional": true,
                "documentation": "Margin on bottom",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "marginBottom",
                "optional": true,
                "documentation": "Margin on bottom",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "ml",
                "optional": true,
                "documentation": "Margin on left",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "marginLeft",
                "optional": true,
                "documentation": "Margin on left",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "mx",
                "optional": true,
                "documentation": "Margin on left and right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "marginX",
                "optional": true,
                "documentation": "Margin on left and right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "my",
                "optional": true,
                "documentation": "Margin on top and bottom",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "marginY",
                "optional": true,
                "documentation": "Margin on top and bottom",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "p",
                "optional": true,
                "documentation": "Padding on top, left, bottom and right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "padding",
                "optional": true,
                "documentation": "Padding on top, left, bottom and right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "pt",
                "optional": true,
                "documentation": "Padding on top",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "paddingTop",
                "optional": true,
                "documentation": "Padding on top",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "pr",
                "optional": true,
                "documentation": "Padding on right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "paddingRight",
                "optional": true,
                "documentation": "Padding on right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "pb",
                "optional": true,
                "documentation": "Padding on bottom",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "paddingBottom",
                "optional": true,
                "documentation": "Padding on bottom",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "pl",
                "optional": true,
                "documentation": "Padding on left",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "paddingLeft",
                "optional": true,
                "documentation": "Padding on left",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "px",
                "optional": true,
                "documentation": "Padding on left and right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "paddingX",
                "optional": true,
                "documentation": "Padding on left and right",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "py",
                "optional": true,
                "documentation": "Padding on top and bottom",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              },
              {
                "name": "paddingY",
                "optional": true,
                "documentation": "Padding on top and bottom",
                "type": "ResponsiveValue<TLengthStyledSystem>"
              }
            ]
          },
          {
            "name": null,
            "types": [
              {
                "name": "sm",
                "optional": true,
                "documentation": "",
                "type": "boolean"
              },
              {
                "name": "wide",
                "optional": true,
                "documentation": "",
                "type": "boolean"
              },
              {
                "name": "caution",
                "optional": true,
                "documentation": "",
                "type": "boolean"
              },
              {
                "name": "primary",
                "optional": true,
                "documentation": "",
                "type": "boolean"
              },
              {
                "name": "onClick",
                "optional": false,
                "documentation": "",
                "type": "Function"
              },
              {
                "name": "loading",
                "optional": true,
                "documentation": "",
                "type": "boolean"
              },
              {
                "name": "children",
                "optional": true,
                "documentation": "",
                "type": "string | Element | Element[] | (string | Element)[]"
              }
            ]
          }
        ]
      }
    ],
    "imports": [],
    "defaultExport": "AsyncButton",
    "namedExports": [
      "Props"
    ],
    "meta": {
      "filesize": 0,
      "loc": 0
    }
  }
}

export default class CatalogPage extends React.Component {
  render() {
    // let { componentId } = useParams();
    const component = components.button

    console.log(component)
    return (
      <Col expand minHeight='100vh'>
        <Rule />

        <Col p='7'>
          <Text fontSize='5' bold>{component.name}</Text>
        </Col>

        <TwoUp>
          <Col p='7' pr='4'><Box borderRadius='4' border='1px solid silver'><Center height='13'>Example</Center></Box></Col>
          <Col p='7' pl='4'><Box borderRadius='4' border='1px solid silver'><Center height='13'>Code</Center></Box></Col>
        </TwoUp>

        <Row>
          <Text bold fontSize='4' p='4' px='7'>Properties</Text>
        </Row>
        <Row>
         <Table component={component} />
        </Row>


      </Col>
    )
  }
}
