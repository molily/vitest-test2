import { fireEvent } from '@testing-library/dom';

beforeAll(() => {
  /**
   * JSDOM does not have the window.PointerEvent constructor,
   * so we mock it for the test.
   */
  class PointerEventFake extends Event {
    /**
     * @param {string} type
     * @param {PointerEventInit} [props]
     */
    constructor(type, props) {
      super(type, props);
      if (props && props.pointerType) {
        this.pointerType = props.pointerType;
      }
    }
  }
  window.PointerEvent = PointerEventFake;
});

it("works", () => {
  let called = false;
  const element = document.createElement("div");
  element.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") {
      console.log("mouse click!");
      called = true;
    }
  });
  document.body.appendChild(element);
  fireEvent.pointerDown(element, { pointerType: "mouse" });
  expect(called).toBe(true);
});
