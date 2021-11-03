import TodoApp from "./components/todos/TodoApp";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import PageContent from "./components/PageContent";
import ThemeContext from "./contexts/ThemeContext";
function App() {
  return (
    <ThemeContext>
      <PageContent>
        <Navbar />
        <Form />
        <TodoApp />;
      </PageContent>
    </ThemeContext>
  );
}

export default App;
