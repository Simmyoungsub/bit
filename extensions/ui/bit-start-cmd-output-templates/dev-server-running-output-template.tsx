import { Box, Text } from 'ink';
import React from 'react';

import { UIServer } from '../ui-server';

export type props = {
  uiServer: UIServer;
  workspace: string;
  envs: [any];
  timestamp;
};

export const DevServerRunningOutputTemplate = ({ uiServer, workspace, envs, timestamp }: props) => {
  return (
    <Box>
      <Text>
        You can now view ${workspace} components in the browser. Local: http://localhost:{uiServer.port}
        On Your Network: http://10.0.0.2:{uiServer.port} # IMPORTANT, do we support this feature? There are $
        {envs.length} running for this workspace
        {envs.map(
          (env) => `${env.name}        https://localhost:${env.port}` // teambit.bit/react   https://localhost:3001
        )}
        Waiting for component changes (${timestamp})...
      </Text>
    </Box>
  );
};
