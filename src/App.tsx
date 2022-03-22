import { CommentsProvider } from "./context/CommentsContext";
import MainPage from "./pages/MainPage";
import "./scss/styles.scss";

function App() {
  const goFrontendMentor = () => {
    window.open("https://www.frontendmentor.io", "_blank");
  };

  const goMyProfile = () => {
    window.open("https://www.frontendmentor.io/profile/natalyrojas5", "_blank");
  };
  return (
    <CommentsProvider>
      <main>
        <MainPage />
      </main>
      <footer className="mb-3">
        <p>
          Challenge by{" "}
          <span role="button" onClick={goFrontendMentor}>
            Frontend Mentor.
          </span>{" "}
          Coded by{" "}
          <span role="button" onClick={goMyProfile}>
            Nataly Rojas.
          </span>
        </p>
      </footer>
    </CommentsProvider>
  );
}

export default App;
