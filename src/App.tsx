import { CommentsComponent } from "./components/CommentsComponent";
import { CommentsProvider } from "./context/CommentsContext";
import "./scss/styles.scss";

function App() {
  return (
    <CommentsProvider>
      <main>
        <CommentsComponent />
      </main>
    </CommentsProvider>
  );
}

export default App;
