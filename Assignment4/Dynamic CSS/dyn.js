const textContainer = document.getElementById("text-container");
const colorBox = document.getElementById("colorbox");
const colorChangeBtn = document.getElementById("colorchange");
const fontSizeInput = document.getElementById("fontsize");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssProps = document.getElementById("css-props");

// Change color on button click
colorChangeBtn.addEventListener("click", () => {
  const colorValue = colorBox.value.trim();
  if (colorValue) {
    textContainer.style.color = colorValue;
  }
});

// Change font size dynamically on range input change
fontSizeInput.addEventListener("input", () => {
  textContainer.style.fontSize = fontSizeInput.value + "px";
});

// Italic toggle button
italicBtn.addEventListener("click", () => {
  const currentStyle = window.getComputedStyle(textContainer).fontStyle;
  textContainer.style.fontStyle =
    currentStyle === "italic" ? "normal" : "italic";
});

// Underline toggle button
underlineBtn.addEventListener("click", () => {
  const currentDecoration =
    window.getComputedStyle(textContainer).textDecorationLine;
  textContainer.style.textDecoration =
    currentDecoration === "underline" ? "none" : "underline";
});

// Bold toggle button
boldBtn.addEventListener("click", () => {
  const currentWeight = window.getComputedStyle(textContainer).fontWeight;
  // fontWeight can be 'normal', 'bold', or numeric values
  if (currentWeight === "bold" || Number(currentWeight) >= 700) {
    textContainer.style.fontWeight = "normal";
  } else {
    textContainer.style.fontWeight = "bold";
  }
});

// Change font family from dropdown selection
fontList.addEventListener("change", () => {
  textContainer.style.fontFamily = fontList.value;
});

// Get and display CSS properties on button click
getStyleBtn.addEventListener("click", () => {
  const style = window.getComputedStyle(textContainer);

  // Extract color name or fallback to color value
  // Note: Accessing color as a name is tricky, display hex or rgb but user requested color name if possible.
  // We'll keep color as returned (rgb or hex)
  const color = style.color;

  const cssText = `
color: ${color};
text-decoration: ${style.textDecorationLine};
font-style: ${style.fontStyle};
font-weight: ${style.fontWeight};
font-size: ${style.fontSize};
font-family: ${style.fontFamily};
`;

  // Format as one-line string with properties separated by spaces and semicolons
  const oneLineCss = cssText
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .map((line) => line.trim())
    .join(" ");

  cssProps.textContent = oneLineCss;
});
