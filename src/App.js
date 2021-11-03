import TodoApp from "./components/todos/TodoApp";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import PageContent from "./components/PageContent";
import ThemeContext from "./contexts/ThemeContext";
import LanguageContext from "./contexts/LanguageContext";
function App() {
  return (
    <ThemeContext>
      <LanguageContext>
        <PageContent>
          <Navbar />
          <Form />
          <TodoApp />;
        </PageContent>
      </LanguageContext>
    </ThemeContext>
  );
}

export default App;
