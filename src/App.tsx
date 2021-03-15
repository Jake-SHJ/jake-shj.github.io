import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import { Button } from "@blueprintjs/core";

const App = () => {
  return (
    <div className="App">
      <Button type="button" intent="primary">
        Start!
      </Button>
    </div>
  );
};

export default App;
