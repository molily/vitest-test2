it("works", () => {
  console.log(
    "document.defaultView === window",
    document.defaultView === window
  );

  const element = document.createElement("div");
  document.body.appendChild(element);
  console.log(
    "element.ownerDocument.defaultView === window",
    element.ownerDocument.defaultView === window
  );
});
