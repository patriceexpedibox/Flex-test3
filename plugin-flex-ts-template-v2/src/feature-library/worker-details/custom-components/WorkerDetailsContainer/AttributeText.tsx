import { Template, templates } from '@twilio/flex-ui';
import { Input } from '@twilio-paste/core/input';
import { Label } from '@twilio-paste/core/label';
import { Tr, Td } from '@twilio-paste/core/table';
import { Text } from '@twilio-paste/core/text';

import { stringPrefix } from '../../flex-hooks/strings';

interface OwnProps {
  label: string;
  value: string;
  onChangeHandler: (value: string) => void;
  disabled: boolean;
}

const AttributeText = ({ label, value, onChangeHandler, disabled }: OwnProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChangeHandler(value);
  };
  const id = label.replace(' ', '-');
  return (
    <Tr key={id}>
      <Td element="WORKER_DETAILS">
        <Label htmlFor={id}>
          <Template source={templates[`${stringPrefix}${label}`]} />
        </Label>
      </Td>
      <Td element="WORKER_DETAILS">
        {disabled ? <Text as="p">{value}</Text> : <Input type="text" id={id} value={value} onChange={handleChange} />}
      </Td>
    </Tr>
  );
};

export default AttributeText;