import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import QuizAppUIDesign from "./pages/quiz-app-u-i-design";
import QuizAppUIDesign2 from "./pages/quiz-app-u-i-design2";
import QuizAppUIDesign3 from "./pages/quiz-app-u-i-design3";
import QuizAppUIDesign4 from "./pages/quiz-app-u-i-design4";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-app-ui-design":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-app-ui-design1":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-app-ui-design2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<QuizAppUIDesign />} />
      <Route path="/quiz-app-ui-design" element={<QuizAppUIDesign2 />} />
      <Route path="/quiz-app-ui-design1" element={<QuizAppUIDesign3 />} />
      <Route path="/quiz-app-ui-design2" element={<QuizAppUIDesign4 />} />
    </Routes>
  );
}
export default App;
