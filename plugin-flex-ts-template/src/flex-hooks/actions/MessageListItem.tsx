import * as Flex from '@twilio/flex-ui';
import { replaceMessageForNotifications } from '../../feature-extensions/chat-transfer/flex-hooks/actions/MessageListItem'

export default (flex: typeof Flex, manager: Flex.Manager) => {
  replaceMessageForNotifications(flex, manager);
}


