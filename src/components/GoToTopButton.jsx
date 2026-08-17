import { useGoToTop } from "../hooks/useGoToTop.js";
import { Icon } from "./icons.jsx";

export function GoToTopButton() {
  const [visible, scrollToTop] = useGoToTop();

  return (
    <button
      type="button"
      className={`go-to-top${visible ? " show" : ""}`}
      onClick={scrollToTop}
      aria-label="Go to top"
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="arrow-up" />
    </button>
  );
}
