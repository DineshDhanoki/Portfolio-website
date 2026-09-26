import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = "/Users/dineshdhanoki/Downloads/Untitled";
const outputPath = path.join(
  projectRoot,
  "src/components/banner/dinesh-dhanoki-name.svg"
);

const letters = [
  "D — 01.svg",
  "i — 02.svg",
  "n — 03.svg",
  "e — 04.svg",
  "s — 05.svg",
  "h — 06.svg",
  "D — 08.svg",
  "h — 09.svg",
  "a — 10.svg",
  "n — 11.svg",
  "o — 12.svg",
  "k — 13.svg",
  "i — 14.svg",
];

const scale = 0.86;
const letterGap = 4;
const wordGap = 16;
const canvasWidth = 742;
const baseline = 74;

const glyphs = letters.map((fileName) => {
  const source = readFileSync(path.join(sourceRoot, fileName), "utf8");
  const viewBox = source.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const silhouette = source.match(/<mask[\s\S]*?<path d="([^"]+)"\/>\s*<\/mask>/);

  if (!viewBox || !silhouette) {
    throw new Error(`Could not read glyph geometry from ${fileName}`);
  }

  return {
    width: Number(viewBox[1]),
    height: Number(viewBox[2]),
    d: silhouette[1],
  };
});

const contentWidth =
  glyphs.reduce((sum, glyph) => sum + glyph.width * scale, 0) +
  letterGap * (glyphs.length - 2) +
  wordGap;

let cursor = (canvasWidth - contentWidth) / 2;
const paths = glyphs.map((glyph, index) => {
  const y = baseline - glyph.height * scale;
  const pathElement = `  <path data-role="name-letter" data-letter="${index}" pathLength="500" d="${glyph.d}" transform="translate(${cursor.toFixed(
    2
  )} ${y.toFixed(
    2
  )}) scale(${scale})" stroke="#0F1630" stroke-width="1.5" vector-effect="non-scaling-stroke" filter="url(#lighter-weight)"/>`;

  cursor += glyph.width * scale;
  cursor += index === 5 ? wordGap : letterGap;
  return pathElement;
});

const svg = `<svg viewBox="0 0 ${canvasWidth} 75" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="lighter-weight" x="-10%" y="-10%" width="120%" height="120%">
      <feMorphology in="SourceGraphic" operator="erode" radius="0.65"/>
    </filter>
  </defs>
${paths.join("\n")}
</svg>
`;

writeFileSync(outputPath, svg);
