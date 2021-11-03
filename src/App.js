import TodoApp from "./components/todos/TodoApp";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import PageContent from "./components/PageContent";
import ThemeProvider from "./contexts/ThemeProvider";
import LanguageProvider from "./contexts/LanguageProvider";
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
          <TodoApp />;
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
//just testing push
