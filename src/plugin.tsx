/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Builder } from '@builder.io/sdk';
import { useCallback } from 'react';

interface Props {
  value: string;
  onChange: (v: any) => void;
  field: {
    options: {
      label: string;
      choices: Array<{
        label: string;
        value: string;
      }>;
    };
  }
}

function SelectEditor(props: Props) {
  const { label, choices } = props.field.options;

  const handleChange = useCallback((event) => {
    props.onChange(event.target.value as string);
  }, []);

  return (
    <select
      value={props.value}
      onChange={handleChange}
      style={{
        padding: '0.5rem 0.3rem',
        width: '100%',
        border: '1px solid #bbb',
        borderRadius: '4px',
        outline: 'none',
        // @ts-ignore
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        appearance: 'none',
      }}
    >
      {
        choices.map(choice => (
          <option key={choice.label} value={choice.value}>{choice.label}</option>
        ))
      }
    </select>
  );
}

Builder.registerEditor({
  name: 'select',
  component: SelectEditor,
});
