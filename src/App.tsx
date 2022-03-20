import { CommentsProvider } from "./context/CommentsContext";
import MainPage from "./pages/MainPage";
import "./scss/styles.scss";

function App() {
  return (
    <CommentsProvider>
      <main>
        <MainPage />
      </main>
    </CommentsProvider>
  );
}

export default App;
