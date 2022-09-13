import * as React from "react";

import { Box } from "@chakra-ui/react";
import { TableSetup } from "./components/TableSetup";

const App = () => {
  return (
    <div>
      <Box p={10}>
        <TableSetup />
      </Box>
    </div>
  );
};

export default App;
