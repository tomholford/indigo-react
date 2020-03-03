import React from 'react';
import {LayoutProps, SpaceProps} from 'styled-system';
import styled from 'styled-components';
import {useField} from 'formik';
import InputLabel from './InputLabel';
import InputCaption from './InputCaption';
import Icon from '../icon/Icon';
import ErrorMessage from './ErrorMessage';
import {Theme} from '../../theme/index';

type Props = LayoutProps &
  SpaceProps & {
    caption?: string;
    label: string;
    name: string;
    id: string;
    disabled?: boolean;
  };

type InternalProps = {
  checked?: boolean;
  disabled?: boolean;
  hasError?: boolean;
};

type ColorOptions = 'default' | 'disabled' | 'red';

const styledBox = (k: ColorOptions, p: InternalProps & {theme: Theme}) => {
  const {borderColor, backgroundColor, textColor, outlineColor} = p.theme;
  return `
  border-color: ${borderColor[k].default};
  background-color: ${backgroundColor[k].default};
  color: ${textColor[k].default};
  box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].default}`};
  * {
    fill:  ${textColor[k].active};
  }

  &:hover {
    border-color: ${borderColor[k].hover};
    color: ${textColor[k].hover};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].hover}`};
    * {
      fill:  ${textColor[k].active};
    }
  }

  ${HiddenInput}:focus ~ & {
    border-color: ${borderColor[k].focus};
    color: ${textColor[k].focus};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].focus}`};
    * {
      fill:  ${textColor[k].active};
    }
  }

  &:active {
    border-color: ${borderColor[k].active};
    color: ${textColor[k].active};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].active}`};
    * {
      fill:  ${textColor[k].active};
    }
  }
  `;
};

// Hide this input completely
const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0px;
`;

const Label = styled.label<InternalProps>`
  display: block;
  position: relative;
  padding: 0px;
  padding-left: 24px;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')}};
`;

const Outline = styled.div<InternalProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  ${p => {
    if (p.disabled) return styledBox('disabled', p);
    if (p.hasError) return styledBox('red', p);
    return styledBox('default', p);
  }};
`;

const Radio = ({label, caption, name, id, disabled, ...props}: Props) => {
  const [field, meta] = useField({name, id, value: id, type: 'radio'});
  return (
    <Label disabled={disabled} htmlFor={id} {...props}>
      <InputLabel>{label}</InputLabel>
      {caption ? <InputCaption>{caption}</InputCaption> : null}
      <HiddenInput {...field} value={id} name={name} id={id} disabled={disabled} type="radio" />
      <Outline
        hasError={meta.touched && meta.error !== undefined}
        checked={field.checked}
        disabled={disabled}
      >
        {field.checked ? (
          <Icon position="absolute" top="0px" left="0px" size="14px" icon="Bullet" />
        ) : null}
      </Outline>
      <ErrorMessage>{meta.touched && meta.error ? meta.error : null}</ErrorMessage>
    </Label>
  );
};

export default Radio;
