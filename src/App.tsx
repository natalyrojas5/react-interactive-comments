import { CommentsProvider } from "./context/CommentsContext";
import "./scss/styles.scss";

function App() {
  return (
    <CommentsProvider>
      <h1>App</h1>
    </CommentsProvider>
  );
}

export default App;
