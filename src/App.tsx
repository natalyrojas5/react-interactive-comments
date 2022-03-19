import { CommentsComponent } from "./components/CommentsComponent";
import { CommentsProvider } from "./context/CommentsContext";
import "./scss/styles.scss";

function App() {
  return (
    <CommentsProvider>
      <CommentsComponent />
    </CommentsProvider>
  );
}

export default App;
