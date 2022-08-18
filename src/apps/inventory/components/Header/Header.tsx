import {
  ActionIcon,
  Avatar,
  Group,
  TextInput,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import { useFullscreen } from '@mantine/hooks';
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconBell,
  IconMoon,
  IconSearch,
  IconWifiOff,
} from '@tabler/icons';
import useHeaderStyles from './HeaderStyles';

function Header() {
  const { classes } = useHeaderStyles();
  const { toggle: toggleFullscreen, fullscreen } = useFullscreen();

  return (
    <Group className={classes.header} py={5} px="sm">
      <TextInput
        size="xs"
        icon={<IconSearch size={16} />}
        placeholder="Search"
      />
      <Group>
        <ActionIcon color="red.5" size="lg" disabled>
          <IconWifiOff />
        </ActionIcon>

        <ActionIcon size="lg" disabled>
          <IconBell />
        </ActionIcon>

        <ActionIcon size="lg" disabled>
          <IconMoon />
        </ActionIcon>

        <Tooltip
          label={fullscreen ? 'Minimize' : 'Maximize'}
          color="gray"
          withArrow
          openDelay={500}
        >
          <ActionIcon size="lg" onClick={toggleFullscreen}>
            {fullscreen ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
          </ActionIcon>
        </Tooltip>

        <UnstyledButton>
          <Avatar radius="sm" color="blue" size={30}>
            DR
          </Avatar>
        </UnstyledButton>
      </Group>
    </Group>
  );
}

export default Header;
