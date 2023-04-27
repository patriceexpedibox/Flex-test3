import * as React from 'react';
import { TaskHelper, ITask } from '@twilio/flex-ui';
import { ButtonGroup, Button, Stack, Tooltip, Text } from '@twilio-paste/core';
import { ProductContactCenterTeamsIcon } from '@twilio-paste/icons/esm/ProductContactCenterTeamsIcon';
import { CallTransferIcon } from '@twilio-paste/icons/esm/CallTransferIcon';
import { CallOutgoingIcon } from '@twilio-paste/icons/esm/CallOutgoingIcon';
import { SendIcon } from '@twilio-paste/icons/esm/SendIcon';
import { ChatIcon } from '@twilio-paste/icons/esm/ChatIcon';

import { TransferQueue } from './QueueDirectoryTab';
import { showRealTimeQueueData } from '../config';

export interface QueueItemProps {
  queue: TransferQueue;
  task: ITask;
  onTransferClick: (options: any) => void;
  isWarmTransferEnabled?: boolean;
}

export const QueueItem = (props: QueueItemProps) => {
  const { queue, task, onTransferClick } = props;

  const onWarmTransferClick = () => {
    onTransferClick({ mode: 'WARM' });
  };

  const onColdTransferClick = () => {
    onTransferClick({ mode: 'COLD' });
  };

  const { total_eligible_workers: eligible, total_available_workers: available, total_tasks: tasks } = queue;

  const agents_available = !available || !eligible ? 'Unknown' : `${available}/${eligible}`;
  // eslint-disable-next-line no-eq-null, eqeqeq
  const tasks_in_queue = tasks != null && tasks >= 0 ? `${tasks}` : 'Unknown';

  const queue_tooltip = showRealTimeQueueData()
    ? `Agents: ${agents_available}, Tasks in queue: ${tasks_in_queue}`
    : `${queue.name}`;

  return (
    <Stack
      element="TRANSFER_DIR_QUEUE_HORIZONTAL_ROW_CONTAINER"
      orientation="horizontal"
      spacing="space40"
      key={`queue-item-container-${queue.sid}`}
    >
      <ProductContactCenterTeamsIcon element="TRANSFER_DIR_COMMON_ROW_ICON" decorative={false} title={queue.name} />

      <Tooltip element="TRANSFER_DIR_COMMON_TOOLTIP" text={queue_tooltip}>
        <Text element="TRANSFER_DIR_COMMON_ROW_NAME" as="div" title={queue.name} className="Twilio">
          {queue.name}
        </Text>
      </Tooltip>

      <ButtonGroup element="TRANSFER_DIR_COMMON_ROW_BUTTONGROUP" attached>
        <Tooltip element="TRANSFER_DIR_COMMON_TOOLTIP" text="Warm Transfer">
          <Button variant="secondary_icon" size="circle" onClick={onWarmTransferClick}>
            {TaskHelper.isChatBasedTask(task) ? (
              <ChatIcon decorative={false} title="Warm Transfer" />
            ) : (
              <CallTransferIcon decorative={false} title="Warm Transfer" />
            )}
          </Button>
        </Tooltip>
        <Tooltip element="TRANSFER_DIR_COMMON_TOOLTIP" text="Cold Transfer">
          <Button variant="secondary_icon" size="circle" onClick={onColdTransferClick}>
            {TaskHelper.isChatBasedTask(task) ? (
              <SendIcon decorative={false} title="Warm Transfer" />
            ) : (
              <CallOutgoingIcon decorative={false} title="Warm Transfer" />
            )}
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Stack>
  );
};
