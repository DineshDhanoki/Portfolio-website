import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(
  projectRoot,
  "src/components/banner/frontend-developer-title.svg"
);

const readSilhouette = (filePath) => {
  const source = readFileSync(filePath, "utf8");
  const match = source.match(/<mask[\s\S]*?<path d="([^"]+)"\/>\s*<\/mask>/);

  if (!match) {
    throw new Error(`Could not read glyph geometry from ${filePath}`);
  }

  return match[1];
};

const existingTitle = readFileSync(outputPath, "utf8");
const taggedEngineerPaths = [
  ...existingTitle.matchAll(/<path data-role="engineer"[^>]*d="([^"]+)"/g),
].map((match) => match[1]);
const allExistingPaths = [...existingTitle.matchAll(/<path[^>]*d="([^"]+)"/g)].map(
  (match) => match[1]
);
const engineerPaths =
  taggedEngineerPaths.length === 8 ? taggedEngineerPaths : allExistingPaths.slice(8);

if (engineerPaths.length !== 8) {
  throw new Error("Expected eight Engineer paths in the existing title SVG");
}

const aPath =
  "M1.54054 68.2L0.62716 67.7929L-7.15256e-06 69.2H1.54054V68.2ZM31.4925 1.00001V7.62939e-06H30.8434L30.5792 0.592903L31.4925 1.00001ZM46.8525 1.00001L47.7654 0.591812L47.5008 7.62939e-06H46.8525V1.00001ZM76.9005 68.2V69.2H78.4431L77.8134 67.7918L76.9005 68.2ZM60.5805 68.2L59.6567 68.5827L59.9124 69.2H60.5805V68.2ZM36.0045 8.87201V7.87201H34.5079L35.0807 9.25471L36.0045 8.87201ZM42.1485 8.87201L43.0719 9.25599L43.6474 7.87201H42.1485V8.87201ZM17.4765 68.2V69.2H18.1437L18.3999 68.584L17.4765 68.2ZM16.5165 53.8L15.5726 53.47L15.1076 54.8H16.5165V53.8ZM20.6445 41.992V40.992H19.9348L19.7006 41.662L20.6445 41.992ZM55.2045 41.992L56.1461 41.6552L55.9089 40.992H55.2045V41.992ZM59.4285 53.8V54.8H60.8483L60.3701 53.4632L59.4285 53.8ZM1.54054 68.2L2.45392 68.6071L32.4059 1.40711L31.4925 1.00001L30.5792 0.592903L0.62716 67.7929L1.54054 68.2ZM31.4925 1.00001V2.00001H46.8525V1.00001V7.62939e-06H31.4925V1.00001ZM46.8525 1.00001L45.9396 1.4082L75.9876 68.6082L76.9005 68.2L77.8134 67.7918L47.7654 0.591812L46.8525 1.00001ZM76.9005 68.2V67.2H60.5805V68.2V69.2H76.9005V68.2ZM60.5805 68.2L61.5044 67.8173L36.9284 8.4893L36.0045 8.87201L35.0807 9.25471L59.6567 68.5827L60.5805 68.2ZM36.0045 8.87201V9.87201H42.1485V8.87201V7.87201H36.0045V8.87201ZM42.1485 8.87201L41.2252 8.48803L16.5532 67.816L17.4765 68.2L18.3999 68.584L43.0719 9.25599L42.1485 8.87201ZM17.4765 68.2V67.2H1.54054V68.2V69.2H17.4765V68.2ZM16.5165 53.8L17.4605 54.13L21.5885 42.322L20.6445 41.992L19.7006 41.662L15.5726 53.47L16.5165 53.8ZM20.6445 41.992V42.992H55.2045V41.992V40.992H20.6445V41.992ZM55.2045 41.992L54.263 42.3288L58.487 54.1368L59.4285 53.8L60.3701 53.4632L56.1461 41.6552L55.2045 41.992ZM59.4285 53.8V52.8H16.5165V53.8V54.8H59.4285V53.8Z";
const aFillPath =
  "M1.54054 68.2L31.4925 1.00001H46.8525L76.9005 68.2H60.5805L36.0045 8.87201H42.1485L17.4765 68.2H1.54054ZM16.5165 53.8L20.6445 41.992H55.2045L59.4285 53.8H16.5165Z";
const aOutlinePath =
  "M1.54054 68.2L31.4925 1.00001H46.8525L76.9005 68.2H60.5805L36.0045 8.87201H42.1485L17.4765 68.2H1.54054Z";
const iPath = readSilhouette("/Users/dineshdhanoki/Downloads/Letter 02 — I.svg");

const paths = [
  `  <use data-role="ai-a-fill" href="#ai-a-fill-shape" transform="translate(178 8)"/>`,
  `  <path data-role="ai-a-outline" pathLength="500" d="${aOutlinePath}" transform="translate(178 8)" stroke="#0F1630" stroke-width="3"/>`,
  `  <path data-role="ai-i" pathLength="500" d="${iPath}" transform="translate(264 8)" stroke="#0F1630" stroke-width="3"/>`,
  ...engineerPaths.map(
    (d) =>
      `  <path data-role="engineer" pathLength="500" d="${d}" transform="translate(-180 0)" stroke="#0F1630" stroke-width="3"/>`
  ),
];

const svg = `<svg viewBox="0 0 941 98" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path id="ai-a-fill-shape" d="${aFillPath}"/>
  </defs>
${paths.join("\n")}
</svg>
`;

writeFileSync(outputPath, svg);
