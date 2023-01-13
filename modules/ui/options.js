{/* <option value="political" selected>Political map</option>
<option value="cultural">Cultural map</option>
<option value="religions">Religions map</option>
<option value="provinces">Provinces map</option>
<option value="biomes">Biomes map</option>
<option value="heightmap">Heightmap</option>
<option value="physical">Physical map</option>
<option value="poi">Places of interest</option>
<option value="military">Military map</option>
<option value="landmass">Pure landmass</option> */}

let styleGroupSelect = {
  value: "ancient",
}
let rescaleLabels = {checked: true};
let hideLabels = {checked: true};
let layersPresetSelected = "military";
let resolveDepressionsStepsOutput = 250;
let elevationLimit = 20;
let templateInput = "world";
let zoomExtentMin = {
  min:".2",
  step:".1",
  max:"20",
  value:"1"
};
let zoomExtentMax = {
  min:"1",
  max:"50",
  value:"20"
};
let pointsInput = {
  value: 4,
  dataset: {
    cells: 10000
  }
}

layerData = new Map();
layerData.set("TextureLayer",{
  dataShortcut: "X",
  isOn: false
});
layerData.set("HeightLayer",{
  dataShortcut: "H",
  isOn: false
});
layerData.set("BiomesLayer",{
  dataShortcut: "B",
  isOn: false
});
layerData.set("CellsLayer",{
  dataShortcut: "E",
  isOn: false
});
layerData.set("GridLayer",{
  dataShortcut: "G",
  isOn: false
});
layerData.set("CoordinatesLayer",{
  dataShortcut: "O",
  isOn: false
});
layerData.set("CompassLayer",{
  dataShortcut: "W",
  isOn: false
});
layerData.set("RiversLayer",{
  dataShortcut: "V",
  isOn: false
});
layerData.set("ReliefLayer",{
  dataShortcut: "F",
  isOn: false
});
layerData.set("ReligionsLayer",{
  dataShortcut: "R",
  isOn: false
});
layerData.set("CulturesLayer",{
  dataShortcut: "C",
  isOn: false
});
layerData.set("StatesLayer",{
  dataShortcut: "S",
  isOn: false
});
layerData.set("ProvincesLayer",{
  dataShortcut: "P",
  isOn: false
});
layerData.set("ZonesLayer",{
  dataShortcut: "Z",
  isOn: false
});
layerData.set("BordersLayer",{
  dataShortcut: "D",
  isOn: false
});
layerData.set("RoutesLayer",{
  dataShortcut: "U",
  isOn: false
});
layerData.set("TempLayer",{
  dataShortcut: "T",
  isOn: false
});
layerData.set("PopulationLayer",{
  dataShortcut: "N",
  isOn: false
});
layerData.set("IceLayer",{
  dataShortcut: "J",
  isOn: false
});
layerData.set("PrecLayer",{
  dataShortcut: "A",
  isOn: false
});
layerData.set("LabelsLayer",{
  dataShortcut: "L",
  isOn: false
});
layerData.set("IconsLayer",{
  dataShortcut: "I",
  isOn: false
});
layerData.set("MilitaryLayer",{
  dataShortcut: "M",
  isOn: false
});
layerData.set("MarkersLayer",{
  dataShortcut: "K",
  isOn: false
});
layerData.set("RulersLayer",{
  dataShortcut: "= (equal sign)",
  isOn: false
});
layerData.set("ScaleBarLayer",{
dataShortcut: "/ (slash sign)",
isOn: false
});

let culturesInput = {value: 30, min: 1, max: 32};
let powerInput = {value: 5, min: 0, max: 10};

let culturesSet = new Map();
culturesSet.set("world", 32);
culturesSet.set("european", 15);
culturesSet.set("oriental", 13);
culturesSet.set("english", 10);
culturesSet.set("antique", 10);
culturesSet.set("highFantasy", 17);
culturesSet.set("darkFantasy", 18);
culturesSet.set("random", 100);

let precInput = {};
let temperatureEquatorInput = {min:"-50", max:"50" };
let temperatureEquatorOutput = {min:"-50", max:"50" };
let temperaturePoleInput = {min: "-50", max: "50" };
let temperaturePoleOutput = {min: "-50", max: "50" };
let mapSizeInput = {min: "1", max: "100" };
let mapSizeOutput = {min: "1", max: "100" };
let latitudeInput = {min: "0", max: "100", step: "1" };
let cultureSelected = "european";
let latitudeOutput = {
                  type: "range",
                  min: "0",
                  max: "100",
                  step: "1",
                  style: "width: 10.3em"
                }
let mapWidthInput =  {  "min":240, "value":3440 };
let mapHeightInput =  {  "min":135, "value":3000 };
let optionsSeed =  {  "min":1, "max":999999999}
let culturesOutput =  { "min":1, "max":32, "value":14 };
let regionsInput =  { "min":0, "max":99, "value":13 };
let regionsOutput =  { "min":0, "max":999, "value":13 };
let provincesInput =  { "min":0, "max":100, "value":30 };
let provincesOutput =  { "min":0, "max":100, "value":30 };
let powerOutput =  { "min":0, "max":10, "value":5 };
let neutralInput =  { "min":.1, "max":2, "value":1 };
let neutralOutput =  { "min":.1, "max":2, "value":1 };
let manorsInput =  { "min":0, "max":1000, "value": 1000 };
let religionsInput =  { "min":0, "max":50, "value": 15 };
let uiSizeInput =  { "min":.6, "max":3 };
let uiSizeOutput =  { "min":.6, "max":3 };
let tooltipSizeInput =  { "min":4, "max":32, "value":14 };
let tooltipSizeOutput =  { "min":0, "max":256, "value":14 };
let themeHueInput =  { "min":0, "max":359, };
let transparencyInput =  { "min":0, "max":100, };
let transparencyOutput =  { "min":0, "max":100, };
let precOutput =  { "min":0, "max":500, "value":50 };
let riverSourceWidth =  { "min":0, "max":3, };
let riverWidthFactor =  { "min":.1, "max":4, };
let epScaleRange =  { "min":1, "max":100, "value":5};
let iceSize =  { "min":.05, "max":1 };
let rescaleLower =  { "value":20, "min":0, "max":100 };
let rescaleHigher =  { "value":100, "min":1, "max":100 };
let rescaleModifier =  { "value":0.9, "min":0, "max":1.5 };
let convertColors =  { "value":100};
let distanceScaleOutput =  { "min":.01, "max":20, "value":3 };
let heightExponentOutput =  { "min":1.5, "max":2.2, "value":2 };
let barSizeOutput =  { "min":.5, "max":5, "value":2 };
let barSizeInput =  { "min":.5, "max":5, "value":2 };
let barBackColor =  { "value": "#ffffff" };
let barPosX =  { "min":0, "max":100, "value":99 };
let options3dMeshRotationRange =  { "min":0, "max":10, };
let options3dScaleRange =  { "min":0, "max":100, };
let options3dLightnessRange =  { "min":0, "max":100, };
let = options3dGlobeRotationRange =  { "min":0, "max":10, };
let pngResolutionOutput =  { "min":1, "max":8, "value":1 };
let submapPointsInput =  { "min":1, "max":13, "value":4 };
let submapAngleInput =  { "min":0, "max":359, "value":0 };
let submapScaleInput =  { "min":-25, "max":25, "value":0 };

let styleOpacityInput = { min: 0, max: 1, step: "0.01", value: "0.4"};
let styleLegendColItems = { min: 1, max: 30, step: "1", value: "8"};
let styleLegendBack = {value: "#ffffff"};
let styleLegendOpacity = { min: 0, max: 1, step: "0.01", value: "1"};
let stylePopulationRuralStrokeInput = {value: "#0000ff"};
let stylePopulationUrbanStrokeInput = {value: "#ff0000"};
let styleTextureShiftX = {value: "0" };
let styleTextureShiftY = {value: "0" };
let styleOceanPatternOpacity = { min: 0, max: 1, step: "0.01", value: "0.2"};
let styleOceanFill = {value: "#466eab"};
let styleGridScale = { min: .1, max: 10, step: "0.01"};
let styleCompassSizeInput = { min: .02, max: 1, step: "0.01", value: "0.25"};
let styleCompassShiftX = { value: "80" };
let styleCompassShiftY = {value: "80" };
let styleReliefSizeInput = { min: .2, max: 4, step: "0.01"};
let styleFillInput = {value: "#5E4FA2"};
let styleStrokeInput = {value: "#5E4FA2"};
let styleStrokeWidthInput = { min: 0, max: 5, step: "0.01", value: "1"};
let styleStrokeDasharrayInput = { value: "1 2", style: "width: 26%"};
let styleShadowInput = {value: "0 0 4px white"};
let styleFontSize = { min: .5, max: 100, step: "0.1", value: "14"};
let styleRadiusInput = { min: .2, max: 10, step: "0.02", value: "1"};
let styleIconSizeInput = { min: .2, max: 10, step: "0.02", value: "1"};
let styleCoastlineAuto = { class: "checkbox"};
let styleTemperatureFillOpacityInput = { min: 0, max: 1, step: "0.01", value: "0.3"};
let styleTemperatureFontSizeInput = { min: 0, max: 30, value: "8"};
let styleTemperatureFillInput = {};
let styleStatesBodyOpacity = { min: 0, max: 1, step: "0.01"};
let styleStatesHaloWidth = { min: 0, max: 30, step: "0.1", value: "10"};
let styleStatesHaloOpacity = { min: 0, max: 1, step: "0.01", value: "1"};
let styleStatesHaloBlur = { min: 0, max: 10, step: "0.01", value: "4"};
let styleHeightmapTerracingInput = { min: 0, max: 20, step: "1"};
let styleHeightmapSkipInput = { min: 0, max: 10, step: "1", value: "5"};
let styleHeightmapSimplificationInput = { min: 0, max: 10, step: "1", value: "0"};
let styleArmiesFillOpacity = { min: 0, max: 1, step: "0.01", value: "1"};
let styleArmiesSize = { min: 1, max: 10, step: "0.1", value: "3"};
let styleRescaleMarkers = { class: "checkbox"};
let styleOpacityOutput = { min: 0, max: 1, step: "0.01", value: "0.4"};
let stylePopulationRuralStrokeOutput = {value: "#0000ff"};
let stylePopulationUrbanStrokeOutput = {value: "#ff0000"};
let styleCompassSizeOutput = { min: .02, max: 1, step: "0.01", value: "0.25"};
let styleReliefSizeOutput = { min: .2, max: 4, step: "0.01"};
let styleFillOutput = {value: "#5E4FA2"};
let styleStrokeOutput = {value: "#5E4FA2"};
let styleStrokeWidthOutput = { min: 0, max: 5, step: "0.01", value: "1"};
let styleStrokeDasharrayOutput = { value: "1 2", style: "width: 26%"};
let styleShadowOutput = {value: "0 0 4px white"};
let styleRadiusOutput = { min: .2, max: 10, step: "0.02", value: "1"};
let styleIconSizeOutput = { min: .2, max: 10, step: "0.02", value: "1"};
let styleTemperatureFillOpacityOutput = { min: 0, max: 1, step: "0.01", value: "0.3"};
let styleTemperatureFontSizeOutput = { min: 0, max: 30, value: "8"};
let styleTemperatureFillOutput = {};
let styleHeightmapTerracingOutput = { min: 0, max: 20, step: "1"};
let styleHeightmapSkipOutput = { min: 0, max: 10, step: "1", value: "5"};
let styleHeightmapSimplificationOutput = { min: 0, max: 10, step: "1", value: "0"};

// UI module to control the options (preferences)
"use strict";

$("#optionsContainer").draggable({handle: ".drag-trigger", snap: "svg", snapMode: "both"});
$("#exitCustomization").draggable({handle: "div"});
$("#mapLayers").disableSelection();

function storeValueIfRequired(ev) {
  if (ev.target.dataset.stored) lock(ev.target.dataset.stored);
}

function updateOutputToFollowInput(ev) {
  const id = ev.target.id;
  const value = ev.target.value;

  // specific cases
  if (id === "manorsInput") return (manorsOutput.value = value == 1000 ? "auto" : value);

  // generic case
  if (id.slice(-5) === "Input") {
    const output = document.getElementById(id.slice(0, -5) + "Output");
    if (output) output.value = value;
  } else if (id.slice(-6) === "Output") {
    const input = document.getElementById(id.slice(0, -6) + "Input");
    if (input) input.value = value;
  }
}

function mapSizeInputChange() {
  changeMapSize();
  localStorage.setItem("mapWidth", mapWidthInput.value);
  localStorage.setItem("mapHeight", mapHeightInput.value);
}

// change svg size on manual size change or window resize, do not change graph size
function changeMapSize() {
  svgWidth = Math.min(+mapWidthInput.value, window.innerWidth);
  svgHeight = Math.min(+mapHeightInput.value, window.innerHeight);
  svg.attr("width", svgWidth).attr("height", svgHeight);

  const maxWidth = Math.max(+mapWidthInput.value, graphWidth);
  const maxHeight = Math.max(+mapHeightInput.value, graphHeight);
  zoom.translateExtent([
    [0, 0],
    [maxWidth, maxHeight]
  ]);
  landmass.select("rect").attr("x", 0).attr("y", 0).attr("width", maxWidth).attr("height", maxHeight);
  oceanPattern.select("rect").attr("x", 0).attr("y", 0).attr("width", maxWidth).attr("height", maxHeight);
  oceanLayers.select("rect").attr("x", 0).attr("y", 0).attr("width", maxWidth).attr("height", maxHeight);
  fogging.selectAll("rect").attr("x", 0).attr("y", 0).attr("width", maxWidth).attr("height", maxHeight);
  defs.select("mask#fog > rect").attr("width", maxWidth).attr("height", maxHeight);
  texture.select("image").attr("width", maxWidth).attr("height", maxHeight);

  fitScaleBar();
  if (window.fitLegendBox) fitLegendBox();
}

// just apply canvas size that was already set
function applyMapSize() {
  const zoomMin = +zoomExtentMin.value;
  const zoomMax = +zoomExtentMax.value;
  graphWidth = +mapWidthInput.value;
  graphHeight = +mapHeightInput.value;
  svgWidth = Math.min(graphWidth, window.innerWidth);
  svgHeight = Math.min(graphHeight, window.innerHeight);
  svg.attr("width", svgWidth).attr("height", svgHeight);
  zoom
    .translateExtent([
      [0, 0],
      [graphWidth, graphHeight]
    ])
    .scaleExtent([zoomMin, zoomMax])
    .scaleTo(svg, zoomMin);
}

function toggleFullscreen() {
  if (mapWidthInput.value != window.innerWidth || mapHeightInput.value != window.innerHeight) {
    mapWidthInput.value = window.innerWidth;
    mapHeightInput.value = window.innerHeight;
    localStorage.removeItem("mapHeight");
    localStorage.removeItem("mapWidth");
  } else {
    mapWidthInput.value = graphWidth;
    mapHeightInput.value = graphHeight;
  }
  changeMapSize();
}

function toggleTranslateExtent(el) {
  const on = (el.dataset.on = +!+el.dataset.on);
  if (on)
    zoom.translateExtent([
      [-graphWidth / 2, -graphHeight / 2],
      [graphWidth * 1.5, graphHeight * 1.5]
    ]);
  else
    zoom.translateExtent([
      [0, 0],
      [graphWidth, graphHeight]
    ]);
}

function generateMapWithSeed() {
  if (optionsSeed.value === seed) return tip("The current map already has this seed", false, "error");
  regeneratePrompt({seed: optionsSeed.value});
}

function showSeedHistoryDialog() {
  const lines = mapHistory.map((h, i) => {
    const created = new Date(h.created).toLocaleTimeString();
    const button = `<i data-tip="Click to generate a map with this seed" onclick="restoreSeed(${i})" class="icon-history optionsSeedRestore"></i>`;
    return `<li>Seed: ${h.seed} ${button}. Size: ${h.width}x${h.height}. Template: ${h.template}. Created: ${created}</li>`;
  });
  alertMessage.innerHTML = /* html */ `<ol style="margin: 0; padding-left: 1.5em">
    ${lines.join("")}
  </ol>`;

  $("#alert").dialog({
    resizable: false,
    title: "Seed history",
    position: {my: "center", at: "center", of: "svg"}
  });
}

// generate map with historical seed
function restoreSeed(id) {
  const {seed, width, height, template} = mapHistory[id];
  byId("optionsSeed").value = seed;
  byId("mapWidthInput").value = width;
  byId("mapHeightInput").value = height;
  templateInput = template;

  regeneratePrompt({seed});
}

function restoreDefaultZoomExtent() {
  zoomExtentMin.value = 1;
  zoomExtentMax.value = 20;
  zoom.scaleExtent([1, 20]).scaleTo(svg, 1);
}

function copyMapURL() {
  const locked = document.querySelectorAll("i.icon-lock").length; // check if some options are locked
  const search = `?seed=${optionsSeed.value}&width=${graphWidth}&height=${graphHeight}${
    locked ? "" : "&options=default"
  }`;
  navigator.clipboard
    .writeText(location.host + location.pathname + search)
    .then(() => {
      tip("Map URL is copied to clipboard", false, "success", 3000);
      //window.history.pushState({}, null, search);
    })
    .catch(err => tip("Could not copy URL: " + err, false, "error", 5000));
}

const cellsDensityMap = {
  1: 1000,
  2: 2000,
  3: 5000,
  4: 10000,
  5: 20000,
  6: 30000,
  7: 40000,
  8: 50000,
  9: 60000,
  10: 70000,
  11: 80000,
  12: 90000,
  13: 100000
};

function changeCellsDensity(value) {
  const cells = cellsDensityMap[value] || 1000;
  pointsInput.dataset.cells = cells;
  pointsOutputFormatted.value = getCellsDensityValue(cells);
  pointsOutputFormatted.style.color = getCellsDensityColor(cells);
}

function getCellsDensityValue(cells) {
  return cells / 1000 + "K";
}

function getCellsDensityColor(cells) {
  return cells > 50000 ? "#b12117" : cells !== 10000 ? "#dfdf12" : "#053305";
}

function changeCultureSet() {
  const max = culturesSet.selectedOptions[0].dataset.max;
  culturesInput.max = culturesOutput.max = max;
  if (+culturesOutput.value > +max) culturesInput.value = culturesOutput.value = max;
}

function changeStatesNumber(value) {
  regionsOutput.style.color = +value ? null : "#b12117";
  burgLabels.select("#capitals").attr("data-size", Math.max(rn(6 - value / 20), 3));
  labels.select("#countries").attr("data-size", Math.max(rn(18 - value / 6), 4));
}

function changeUIsize(value) {
  if (isNaN(+value) || +value < 0.5) return;

  const max = getUImaxSize();
  if (+value > max) value = max;

  uiSizeInput.value = uiSizeOutput.value = value;
  document.getElementsByTagName("body")[0].style.fontSize = rn(value * 10, 2) + "px";
  document.getElementById("options").style.width = value * 300 + "px";
}

function getUImaxSize() {
  return rn(Math.min(window.innerHeight / 465, window.innerWidth / 302), 1);
}

function changeTooltipSize(value) {
  tooltip.style.fontSize = `calc(${value}px + 0.5vw)`;
}

const THEME_COLOR = "#997787";
function restoreDefaultThemeColor() {
  localStorage.removeItem("themeColor");
  changeDialogsTheme(THEME_COLOR, transparencyInput.value);
}

function changeThemeHue(hue) {
  const {s, l} = d3.hsl(themeColorInput.value);
  const newColor = d3.hsl(+hue, s, l).hex();
  changeDialogsTheme(newColor, transparencyInput.value);
}

// change color and transparency for modal windows
function changeDialogsTheme(themeColor, transparency) {
  transparencyInput.value = transparencyOutput.value = transparency;
  const alpha = (100 - +transparency) / 100;
  const alphaReduced = Math.min(alpha + 0.3, 1);

  const {h, s, l} = d3.hsl(themeColor || THEME_COLOR);
  themeColorInput.value = themeColor || THEME_COLOR;
  themeHueInput.value = h;

  const getRGBA = (hue, saturation, lightness, alpha) => {
    const color = d3.hsl(hue, saturation, lightness, alpha);
    return color.toString();
  };

  const theme = [
    {name: "--bg-main", h, s, l, alpha},
    {name: "--bg-lighter", h, s, l: l + 0.02, alpha},
    {name: "--bg-light", h, s: s - 0.02, l: l + 0.06, alpha},
    {name: "--light-solid", h, s: s + 0.01, l: l + 0.05, alpha: 1},
    {name: "--dark-solid", h, s, l: l - 0.2, alpha: 1},
    {name: "--header", h, s: s, l: l - 0.03, alpha: alphaReduced},
    {name: "--header-active", h, s: s, l: l - 0.09, alpha: alphaReduced},
    {name: "--bg-disabled", h, s: s - 0.04, l: l + 0.09, alphaReduced},
    {name: "--bg-dialogs", h: 0, s: 0, l: 0.98, alpha}
  ];

  const sx = document.documentElement.style;
  theme.forEach(({name, h, s, l, alpha}) => {
    sx.setProperty(name, getRGBA(h, s, l, alpha));
  });
}

function changeZoomExtent(value) {
  if (+zoomExtentMin.value > +zoomExtentMax.value) {
    [zoomExtentMin.value, zoomExtentMax.value] = [zoomExtentMax.value, zoomExtentMin.value];
  }
  const min = Math.max(+zoomExtentMin.value, 0.01);
  const max = Math.min(+zoomExtentMax.value, 200);
  zoomExtentMin.value = min;
  zoomExtentMax.value = max;
  zoom.scaleExtent([min, max]);
  const scale = minmax(+value, 0.01, 200);
  zoom.scaleTo(svg, scale);
}

// restore options stored in localStorage
function applyStoredOptions() {
  if (!stored("mapWidth") || !stored("mapHeight")) {
    mapWidthInput.value = window.innerWidth;
    mapHeightInput.value = window.innerHeight;
  }

  const heightmapId = stored("template");
  if (heightmapId) {
    const name = heightmapTemplates[heightmapId]?.name || precreatedHeightmaps[heightmapId]?.name || heightmapId;
    applyOption(templateInput, heightmapId, name);
  }

  if (stored("distanceUnit")) applyOption(distanceUnitInput, stored("distanceUnit"));
  if (stored("heightUnit")) applyOption(heightUnit, stored("heightUnit"));

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key === "speakerVoice") continue;
    const input = byId(key + "Input") || byId(key);
    const output = byId(key + "Output");

    const value = stored(key);
    if (input) input.value = value;
    if (output) output.value = value;
    lock(key);

    // add saved style presets to options
    if (key.slice(0, 5) === "style") applyOption(stylePreset, key, key.slice(5));
  }

  if (stored("winds"))
    options.winds = localStorage
      .getItem("winds")
      .split(",")
      .map(w => +w);
  if (stored("military")) options.military = JSON.parse(stored("military"));

  if (stored("tooltipSize")) changeTooltipSize(stored("tooltipSize"));
  if (stored("regions")) changeStatesNumber(stored("regions"));

  uiSizeInput.max = uiSizeOutput.max = getUImaxSize();
  if (stored("uiSize")) changeUIsize(stored("uiSize"));
  else changeUIsize(minmax(rn(mapWidthInput.value / 1280, 1), 1, 2.5));

  // search params overwrite stored and default options
  const params = new URL(window.location.href).searchParams;
  const width = +params.get("width");
  const height = +params.get("height");
  if (width) mapWidthInput.value = width;
  if (height) mapHeightInput.value = height;

  const transparency = stored("transparency") || 5;
  const themeColor = stored("themeColor");
  changeDialogsTheme(themeColor, transparency);

  setRendering(shapeRendering.value);
  options.stateLabelsMode = stateLabelsModeInput.value;
}

// randomize options if randomization is allowed (not locked or options='default')
function randomizeOptions() {
  const randomize = new URL(window.location.href).searchParams.get("options") === "default"; // ignore stored options

  // 'Options' settings
  if (randomize) randomizeHeightmapTemplate();
  if (randomize) regionsInput.value = regionsOutput.value = gauss(18, 5, 2, 30);
  if (randomize) provincesInput.value = provincesOutput.value = gauss(20, 10, 20, 100);
  if (randomize) {
    manorsInput.value = 1000;
    manorsOutput.value = "auto";
  }
  if (randomize) religionsInput.value = religionsOutput.value = gauss(5, 2, 2, 10);
  if (randomize) powerInput.value = powerOutput.value = gauss(4, 2, 0, 10, 2);
  if (randomize) neutralInput.value = neutralOutput.value = rn(1 + Math.random(), 1);
  if (randomize) culturesInput.value = culturesOutput.value = gauss(12, 3, 5, 30);
  if (randomize) randomizeCultureSet();

  // 'Configure World' settings
  if (randomize) precInput.value = precOutput.value = gauss(100, 40, 5, 500);
  const tMax = 30,
    tMin = -30; // temperature extremes
  if (randomize)
    temperatureEquatorOutput.value = temperatureEquatorInput.value = rand(tMax - 10, tMax);
  if (randomize)
    temperaturePoleOutput.value = temperaturePoleInput.value = rand(tMin, tMin + 30);

  // 'Units Editor' settings
  const US = navigator.language === "en-US";
  if (randomize) distanceScaleOutput.value = distanceScaleInput.value = gauss(3, 1, 1, 5);
  distanceUnitInput.value = "mi";
  heightUnit.value = "ft";
  temperatureScale.value = "°F";

  // World settings
  generateEra();
}

// select heightmap template pseudo-randomly
function randomizeHeightmapTemplate() {
  const templates = {};
  for (const key in heightmapTemplates) {
    templates[key] = heightmapTemplates[key].probability || 0;
  }
  const template = rw(templates);
  const name = heightmapTemplates[template].name;
  applyOption(templateInput, template, name);
}

// select culture set pseudo-randomly
function randomizeCultureSet() {
  const sets = {
    world: 10,
    european: 10,
    oriental: 2,
    english: 5,
    antique: 3,
    highFantasy: 11,
    darkFantasy: 3,
    random: 1
  };
  culturesSet.value = rw(sets);
  changeCultureSet();
}

function setRendering(value) {
  viewbox.attr("shape-rendering", value);

  if (value === "optimizeSpeed") {
    // block some styles
    coastline.select("#sea_island").style("filter", "none");
    statesHalo.style("display", "none");
    emblems.style("opacity", 1);
  } else {
    // remove style block
    coastline.select("#sea_island").style("filter", null);
    statesHalo.style("display", null);
    emblems.style("opacity", null);
  }
}

// generate current year and era name
function generateEra() {
  if (!stored("year")) yearInput.value = rand(100, 2000); // current year
  if (!stored("era")) eraInput.value = Names.getBaseShort(P(0.7) ? 1 : rand(nameBases.length)) + " Era";
  options.year = +yearInput.value;
  options.era = eraInput.value;
  options.eraShort = options.era
    .split(" ")
    .map(w => w[0].toUpperCase())
    .join(""); // short name for era
}

function regenerateEra() {
  unlock("era");
  options.era = eraInput.value = Names.getBaseShort(P(0.7) ? 1 : rand(nameBases.length)) + " Era";
  options.eraShort = options.era
    .split(" ")
    .map(w => w[0].toUpperCase())
    .join("");
}

function changeYear() {
  if (!yearInput.value) return;
  if (isNaN(+yearInput.value)) {
    tip("Current year should be a number", false, "error");
    return;
  }
  options.year = +yearInput.value;
}

function changeEra() {
  if (!eraInput.value) return;
  lock("era");
  options.era = eraInput.value;
}

async function openTemplateSelectionDialog() {
  const HeightmapSelectionDialog = await import("../dynamic/heightmap-selection.js?v=1.87.00");
  HeightmapSelectionDialog.open();
}

// remove all saved data from LocalStorage and reload the page
function restoreDefaultOptions() {
  localStorage.clear();
  location.reload();
}

function regeneratePrompt(options) {
  if (customization)
    return tip("New map cannot be generated when edit mode is active, please exit the mode and retry", false, "error");
  const workingTime = (Date.now() - last(mapHistory).created) / 60000; // minutes
  if (workingTime < 5) return regenerateMap(options);

  alertMessage.innerHTML = /* html */ `Are you sure you want to generate a new map?<br />
    All unsaved changes made to the current map will be lost`;
  $("#alert").dialog({
    resizable: false,
    title: "Generate new map",
    buttons: {
      Cancel: function () {
        $(this).dialog("close");
      },
      Generate: function () {
        closeDialogs();
        regenerateMap(options);
      }
    }
  });
}

function showSavePane() {
  const sharableLinkContainer = document.getElementById("sharableLinkContainer");
  sharableLinkContainer.style.display = "none";

  $("#saveMapData").dialog({
    title: "Save map",
    resizable: false,
    width: "25em",
    position: {my: "center", at: "center", of: "svg"},
    buttons: {
      Close: function () {
        $(this).dialog("close");
      }
    }
  });
}

function copyLinkToClickboard() {
  const shrableLink = document.getElementById("sharableLink");
  const link = shrableLink.getAttribute("href");
  navigator.clipboard.writeText(link).then(() => tip("Link is copied to the clipboard", true, "success", 8000));
}

function showExportPane() {
  document.getElementById("showLabels").checked = !hideLabels.checked;

  $("#exportMapData").dialog({
    title: "Export map data",
    resizable: false,
    width: "26em",
    position: {my: "center", at: "center", of: "svg"},
    buttons: {
      Close: function () {
        $(this).dialog("close");
      }
    }
  });
}

async function exportToJson(type) {
  const {exportToJson} = await import("../dynamic/export-json.js");
  exportToJson(type);
}

async function showLoadPane() {
  $("#loadMapData").dialog({
    title: "Load map",
    resizable: false,
    width: "24em",
    position: {my: "center", at: "center", of: "svg"},
    buttons: {
      Close: function () {
        $(this).dialog("close");
      }
    }
  });

  // already connected to Dropbox: list saved maps
  if (Cloud.providers.dropbox.api) {
    document.getElementById("dropboxConnectButton").style.display = "none";
    document.getElementById("loadFromDropboxSelect").style.display = "block";
    const loadFromDropboxButtons = document.getElementById("loadFromDropboxButtons");
    const fileSelect = document.getElementById("loadFromDropboxSelect");
    fileSelect.innerHTML = /* html */ `<option value="" disabled selected>Loading...</option>`;

    const files = await Cloud.providers.dropbox.list();

    if (!files) {
      loadFromDropboxButtons.style.display = "none";
      fileSelect.innerHTML = /* html */ `<option value="" disabled selected>Save files to Dropbox first</option>`;
      return;
    }

    loadFromDropboxButtons.style.display = "block";
    fileSelect.innerHTML = "";
    files.forEach(({name, updated, size, path}) => {
      const sizeMB = rn(size / 1024 / 1024, 2) + " MB";
      const updatedOn = new Date(updated).toLocaleDateString();
      const nameFormatted = `${updatedOn}: ${name} [${sizeMB}]`;
      const option = new Option(nameFormatted, path);
      fileSelect.options.add(option);
    });

    return;
  }

  // not connected to Dropbox: show connect button
  document.getElementById("dropboxConnectButton").style.display = "inline-block";
  document.getElementById("loadFromDropboxButtons").style.display = "none";
  document.getElementById("loadFromDropboxSelect").style.display = "none";
}

async function connectToDropbox() {
  await Cloud.providers.dropbox.initialize();
  if (Cloud.providers.dropbox.api) showLoadPane();
}

function loadURL() {
  const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  const inner = `Provide URL to a .map file:
    <input id="mapURL" type="url" style="width: 24em" placeholder="https://e-cloud.com/test.map">
    <br><i>Please note server should allow CORS for file to be loaded. If CORS is not allowed, save file to Dropbox and provide a direct link</i>`;
  alertMessage.innerHTML = inner;
  $("#alert").dialog({
    resizable: false,
    title: "Load map from URL",
    width: "27em",
    buttons: {
      Load: function () {
        const value = mapURL.value;
        if (!pattern.test(value)) {
          tip("Please provide a valid URL", false, "error");
          return;
        }
        loadMapFromURL(value);
        $(this).dialog("close");
      },
      Cancel: function () {
        $(this).dialog("close");
      }
    }
  });
}

// load map
document.getElementById("mapToLoad").addEventListener("change", function () {
  const fileToLoad = this.files[0];
  this.value = "";
  closeDialogs();
  uploadMap(fileToLoad);
});

function openSaveTiles() {
  closeDialogs();
  updateTilesOptions();
  const status = document.getElementById("tileStatus");
  status.innerHTML = "";
  let loading = null;

  const inputs = document.getElementById("saveTilesScreen").querySelectorAll("input");
  inputs.forEach(input => input.addEventListener("input", updateTilesOptions));

  $("#saveTilesScreen").dialog({
    resizable: false,
    title: "Download tiles",
    width: "23em",
    buttons: {
      Download: function () {
        status.innerHTML = "Preparing for download...";
        setTimeout(() => (status.innerHTML = "Downloading. It may take some time."), 1000);
        loading = setInterval(() => (status.innerHTML += "."), 1000);
        saveTiles().then(() => {
          clearInterval(loading);
          status.innerHTML = /* html */ `Done. Check file in "Downloads" (crtl + J)`;
          setTimeout(() => (status.innerHTML = ""), 8000);
        });
      },
      Cancel: function () {
        $(this).dialog("close");
      }
    },
    close: () => {
      inputs.forEach(input => input.removeEventListener("input", updateTilesOptions));
      debug.selectAll("*").remove();
      clearInterval(loading);
    }
  });
}

function updateTilesOptions() {
  if (this?.tagName === "INPUT") {
    const {nextElementSibling: next, previousElementSibling: prev} = this;
    if (next?.tagName === "INPUT") next.value = this.value;
    if (prev?.tagName === "INPUT") prev.value = this.value;
  }

  const tileSize = document.getElementById("tileSize");
  const tilesX = +document.getElementById("tileColsOutput").value;
  const tilesY = +document.getElementById("tileRowsOutput").value;
  const scale = +document.getElementById("tileScaleOutput").value;

  // calculate size
  const sizeX = graphWidth * scale * tilesX;
  const sizeY = graphHeight * scale * tilesY;
  const totalSize = sizeX * sizeY;

  tileSize.innerHTML = /* html */ `${sizeX} x ${sizeY} px`;
  tileSize.style.color = totalSize > 1e9 ? "#d00b0b" : totalSize > 1e8 ? "#9e6409" : "#1a941a";

  // draw tiles
  const rects = [];
  const labels = [];
  const tileW = (graphWidth / tilesX) | 0;
  const tileH = (graphHeight / tilesY) | 0;
  for (let y = 0, i = 0; y + tileH <= graphHeight; y += tileH) {
    for (let x = 0; x + tileW <= graphWidth; x += tileW, i++) {
      rects.push(`<rect x=${x} y=${y} width=${tileW} height=${tileH} />`);
      labels.push(`<text x=${x + tileW / 2} y=${y + tileH / 2}>${i}</text>`);
    }
  }
  const rectsG = "<g fill='none' stroke='#000'>" + rects.join("") + "</g>";
  const labelsG =
    "<g fill='#000' stroke='none' text-anchor='middle' dominant-baseline='central' font-size='24px'>" +
    labels.join("") +
    "</g>";
  debug.html(rectsG + labelsG);
}

function enterStandardView() {
  viewMode.querySelectorAll(".pressed").forEach(button => button.classList.remove("pressed"));
  heightmap3DView.classList.remove("pressed");
  viewStandard.classList.add("pressed");

  if (!document.getElementById("canvas3d")) return;
  ThreeD.stop();
  document.getElementById("canvas3d").remove();
  if (options3dUpdate.offsetParent) $("#options3d").dialog("close");
  if (preview3d.offsetParent) $("#preview3d").dialog("close");
}

async function enter3dView(type) {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas3d";
  canvas.dataset.type = type;

  if (type === "heightmap3DView") {
    canvas.width = parseFloat(preview3d.style.width) || graphWidth / 3;
    canvas.height = canvas.width / (graphWidth / graphHeight);
    canvas.style.display = "block";
  } else {
    canvas.width = svgWidth;
    canvas.height = svgHeight;
    canvas.style.position = "absolute";
    canvas.style.display = "none";
  }

  const started = await ThreeD.create(canvas, type);
  if (!started) return;

  canvas.style.display = "block";
  canvas.onmouseenter = () => {
    const help =
      "Left mouse to change angle, middle mouse / mousewheel to zoom, right mouse to pan. <b>O</b> to toggle options";
    +canvas.dataset.hovered > 2 ? tip("") : tip(help);
    canvas.dataset.hovered = (+canvas.dataset.hovered | 0) + 1;
  };

  if (type === "heightmap3DView") {
    document.getElementById("preview3d").appendChild(canvas);
    $("#preview3d").dialog({
      title: "3D Preview",
      resizable: true,
      position: {my: "left bottom", at: "left+10 bottom-20", of: "svg"},
      resizeStop: resize3d,
      close: enterStandardView
    });
  } else document.body.insertBefore(canvas, optionsContainer);

  toggle3dOptions();
}

function resize3d() {
  const canvas = document.getElementById("canvas3d");
  canvas.width = parseFloat(preview3d.style.width);
  canvas.height = parseFloat(preview3d.style.height) - 2;
  ThreeD.redraw();
}

function toggle3dOptions() {
  if (options3dUpdate.offsetParent) {
    $("#options3d").dialog("close");
    return;
  }
  $("#options3d").dialog({
    title: "3D mode settings",
    resizable: false,
    width: fitContent(),
    position: {my: "right top", at: "right-30 top+10", of: "svg", collision: "fit"}
  });

  updateValues();

  if (modules.options3d) return;
  modules.options3d = true;

  document.getElementById("options3dUpdate").addEventListener("click", ThreeD.update);
  document.getElementById("options3dSave").addEventListener("click", ThreeD.saveScreenshot);
  document.getElementById("options3dOBJSave").addEventListener("click", ThreeD.saveOBJ);

  document.getElementById("options3dScaleRange").addEventListener("input", changeHeightScale);
  document.getElementById("options3dScaleNumber").addEventListener("change", changeHeightScale);
  document.getElementById("options3dLightnessRange").addEventListener("input", changeLightness);
  document.getElementById("options3dLightnessNumber").addEventListener("change", changeLightness);
  document.getElementById("options3dSunX").addEventListener("change", changeSunPosition);
  document.getElementById("options3dSunY").addEventListener("change", changeSunPosition);
  document.getElementById("options3dSunZ").addEventListener("change", changeSunPosition);
  document.getElementById("options3dMeshRotationRange").addEventListener("input", changeRotation);
  document.getElementById("options3dMeshRotationNumber").addEventListener("change", changeRotation);
  document.getElementById("options3dGlobeRotationRange").addEventListener("input", changeRotation);
  document.getElementById("options3dGlobeRotationNumber").addEventListener("change", changeRotation);
  document.getElementById("options3dMeshLabels3d").addEventListener("change", toggleLabels3d);
  document.getElementById("options3dMeshSkyMode").addEventListener("change", toggleSkyMode);
  document.getElementById("options3dMeshSky").addEventListener("input", changeColors);
  document.getElementById("options3dMeshWater").addEventListener("input", changeColors);
  document.getElementById("options3dGlobeResolution").addEventListener("change", changeResolution);

  function updateValues() {
    const globe = document.getElementById("canvas3d").dataset.type === "viewGlobe";
    options3dMesh.style.display = globe ? "none" : "block";
    options3dGlobe.style.display = globe ? "block" : "none";
    options3dOBJSave.style.display = globe ? "none" : "inline-block";
    options3dScaleRange.value = options3dScaleNumber.value = ThreeD.options.scale;
    options3dLightnessRange.value = options3dLightnessNumber.value = ThreeD.options.lightness * 100;
    options3dSunX.value = ThreeD.options.sun.x;
    options3dSunY.value = ThreeD.options.sun.y;
    options3dSunZ.value = ThreeD.options.sun.z;
    options3dMeshRotationRange.value = options3dMeshRotationNumber.value = ThreeD.options.rotateMesh;
    options3dGlobeRotationRange.value = options3dGlobeRotationNumber.value = ThreeD.options.rotateGlobe;
    options3dMeshLabels3d.value = ThreeD.options.labels3d;
    options3dMeshSkyMode.value = ThreeD.options.extendedWater;
    options3dColorSection.style.display = ThreeD.options.extendedWater ? "block" : "none";
    options3dMeshSky.value = ThreeD.options.skyColor;
    options3dMeshWater.value = ThreeD.options.waterColor;
    options3dGlobeResolution.value = ThreeD.options.resolution;
  }

  function changeHeightScale() {
    options3dScaleRange.value = options3dScaleNumber.value = this.value;
    ThreeD.setScale(+this.value);
  }

  function changeLightness() {
    options3dLightnessRange.value = options3dLightnessNumber.value = this.value;
    ThreeD.setLightness(this.value / 100);
  }

  function changeSunPosition() {
    const x = +options3dSunX.value;
    const y = +options3dSunY.value;
    const z = +options3dSunZ.value;
    ThreeD.setSun(x, y, z);
  }

  function changeRotation() {
    (this.nextElementSibling || this.previousElementSibling).value = this.value;
    const speed = +this.value;
    ThreeD.setRotation(speed);
  }

  function toggleLabels3d() {
    ThreeD.toggleLabels();
  }

  function toggleSkyMode() {
    const hide = ThreeD.options.extendedWater;
    options3dColorSection.style.display = hide ? "none" : "block";
    ThreeD.toggleSky();
  }

  function changeColors() {
    ThreeD.setColors(options3dMeshSky.value, options3dMeshWater.value);
  }

  function changeResolution() {
    ThreeD.setResolution(this.value);
  }
}
