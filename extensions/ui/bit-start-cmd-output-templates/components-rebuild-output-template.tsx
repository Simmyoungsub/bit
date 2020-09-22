import { Box, Text } from 'ink';
import React from 'react';

export type props = {
  workspace: string;
  components: [any];
  envs: [any];
};

export const ComponentsRebuildOutput = ({ workspace, components, envs }: props) => {
  return (
    <Box>
      <Text>
        Compiling ${components.length} using ${envs.length} environments in workspace ${workspace}
        STATUS COMPONENT ID
        {components.map(
          (component) => `${component.status === 'FAIL' ? '✗' : '✓'} ${component.status}        ${component.id}`
        )}
      </Text>
    </Box>
  );
};
