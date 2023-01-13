// UI module to control the style
"use strict";

// add available filters to lists
{
  const filters = Array.from(document.getElementById("filters").querySelectorAll("filter"));
  const emptyOption = '<option value="" selected>None</option>';
  const options = filters.map(filter => {
    const id = filter.getAttribute("id");
    const name = filter.getAttribute("name");
    return `<option value="url(#${id})">${name}</option>`;
  });
  const allOptions = emptyOption + options.join("");
}

// Toggle style sections on element select
function selectStyleElement() {
  const sel = styleElementSelect.value;
  let el = d3.select("#" + sel);

  styleElements.querySelectorAll("tbody").forEach(e => (e.style.display = "none")); // hide all sections

  // show alert line if layer is not visible
  const isLayerOff = sel !== "ocean" && (el.style("display") === "none" || !el.selectAll("*").size());
  styleIsOff.style.display = isLayerOff ? "block" : "none";

  // active group element
  const group = styleGroupSelect.value;
  if (["routes", "labels", "coastline", "lakes", "anchors", "burgIcons", "borders"].includes(sel)) {
    const gEl = group && el.select("#" + group);
    el = group && gEl.size() ? gEl : el.select("g");
  }

  // opacity
  if (!["landmass", "ocean", "regions", "legend"].includes(sel)) {
    styleOpacity.style.display = "block";
    styleOpacityInput.value = styleOpacityOutput.value = el.attr("opacity") || 1;
  }

  // filter
  if (!["landmass", "legend", "regions"].includes(sel)) {
    styleFilter.style.display = "block";
    styleFilterInput.value = el.attr("filter") || "";
  }

  // fill
  if (["rivers", "lakes", "landmass", "prec", "ice", "fogging"].includes(sel)) {
    styleFill.style.display = "block";
    styleFillInput.value = styleFillOutput.value = el.attr("fill");
  }

  // stroke color and width
  if (
    ["armies", "routes", "lakes", "borders", "cults", "relig", "cells", "coastline", "prec", "ice", "icons", "coordinates", "zones", "gridOverlay"].includes(
      sel
    )
  ) {
    styleStroke.style.display = "block";
    styleStrokeInput.value = styleStrokeOutput.value = el.attr("stroke");
    styleStrokeWidth.style.display = "block";
    styleStrokeWidthInput.value = styleStrokeWidthOutput.value = el.attr("stroke-width") || "";
  }

  // stroke dash
  if (["routes", "borders", "temperature", "legend", "population", "coordinates", "zones", "gridOverlay"].includes(sel)) {
    styleStrokeDash.style.display = "block";
    styleStrokeDasharrayInput.value = el.attr("stroke-dasharray") || "";
    styleStrokeLinecapInput.value = el.attr("stroke-linecap") || "inherit";
  }

  // clipping
  if (["cells", "gridOverlay", "coordinates", "compass", "terrain", "temperature", "routes", "texture", "biomes", "zones"].includes(sel)) {
    styleClipping.style.display = "block";
    styleClippingInput.value = el.attr("mask") || "";
  }

  // show specific sections
  if (sel === "texture") styleTexture.style.display = "block";

  if (sel === "terrs") {
    styleHeightmap.style.display = "block";
    styleHeightmapScheme.value = terrs.attr("scheme");
    styleHeightmapTerracingInput.value = styleHeightmapTerracingOutput.value = terrs.attr("terracing");
    styleHeightmapSkipInput.value = styleHeightmapSkipOutput.value = terrs.attr("skip");
    styleHeightmapSimplificationInput.value = styleHeightmapSimplificationOutput.value = terrs.attr("relax");
    styleHeightmapCurve.value = terrs.attr("curve");
  }

  if (sel === "markers") {
    styleMarkers.style.display = "block";
    styleRescaleMarkers.checked = +markers.attr("rescale");
  }

  if (sel === "gridOverlay") {
    styleGrid.style.display = "block";
    styleGridType.value = el.attr("type");
    styleGridScale.value = el.attr("scale") || 1;
    styleGridShiftX.value = el.attr("dx") || 0;
    styleGridShiftY.value = el.attr("dy") || 0;
    calculateFriendlyGridSize();
  }

  if (sel === "compass") {
    styleCompass.style.display = "block";
    const tr = parseTransform(compass.select("use").attr("transform"));
    styleCompassShiftX.value = tr[0];
    styleCompassShiftY.value = tr[1];
    styleCompassSizeInput.value = styleCompassSizeOutput.value = tr[2];
  }

  if (sel === "terrain") {
    styleRelief.style.display = "block";
    styleReliefSizeOutput.innerHTML = styleReliefSizeInput.value = terrain.attr("size");
    styleReliefDensityOutput.innerHTML = styleReliefDensityInput.value = terrain.attr("density");
    styleReliefSet.value = terrain.attr("set");
  }

  if (sel === "population") {
    stylePopulation.style.display = "block";
    stylePopulationRuralStrokeInput.value = stylePopulationRuralStrokeOutput.value = population.select("#rural").attr("stroke");
    stylePopulationUrbanStrokeInput.value = stylePopulationUrbanStrokeOutput.value = population.select("#urban").attr("stroke");
    styleStrokeWidth.style.display = "block";
    styleStrokeWidthInput.value = styleStrokeWidthOutput.value = el.attr("stroke-width") || "";
  }

  if (sel === "regions") {
    styleStates.style.display = "block";
    styleStatesBodyOpacity.value = styleStatesBodyOpacityOutput.value = statesBody.attr("opacity") || 1;
    styleStatesBodyFilter.value = statesBody.attr("filter") || "";
    styleStatesHaloWidth.value = styleStatesHaloWidthOutput.value = statesHalo.attr("data-width") || 10;
    styleStatesHaloOpacity.value = styleStatesHaloOpacityOutput.value = statesHalo.attr("opacity") || 1;
    const blur = parseFloat(statesHalo.attr("filter")?.match(/blur\(([^)]+)\)/)?.[1]) || 0;
    styleStatesHaloBlur.value = styleStatesHaloBlurOutput.value = blur;
  }

  if (sel === "labels") {
    styleFill.style.display = "block";
    styleStroke.style.display = "block";
    styleStrokeWidth.style.display = "block";

    styleShadow.style.display = "block";
    styleSize.style.display = "block";
    styleVisibility.style.display = "block";
    styleFillInput.value = styleFillOutput.value = el.attr("fill") || "#3e3e4b";
    styleStrokeInput.value = styleStrokeOutput.value = el.attr("stroke") || "#3a3a3a";
    styleStrokeWidthInput.value = styleStrokeWidthOutput.value = el.attr("stroke-width") || 0;
    styleShadowInput.value = el.style("text-shadow") || "white 0 0 4px";

    styleFont.style.display = "block";
    styleSelectFont.value = el.attr("font-family");
    styleFontSize.value = el.attr("data-size");
  }

  if (sel === "provs") {
    styleFill.style.display = "block";
    styleSize.style.display = "block";
    styleFillInput.value = styleFillOutput.value = el.attr("fill") || "#111111";

    styleFont.style.display = "block";
    styleSelectFont.value = el.attr("font-family");
    styleFontSize.value = el.attr("data-size");
  }

  if (sel == "burgIcons") {
    styleFill.style.display = "block";
    styleStroke.style.display = "block";
    styleStrokeWidth.style.display = "block";
    styleStrokeDash.style.display = "block";
    styleRadius.style.display = "block";
    styleFillInput.value = styleFillOutput.value = el.attr("fill") || "#ffffff";
    styleStrokeInput.value = styleStrokeOutput.value = el.attr("stroke") || "#3e3e4b";
    styleStrokeWidthInput.value = styleStrokeWidthOutput.value = el.attr("stroke-width") || 0.24;
    styleStrokeDasharrayInput.value = el.attr("stroke-dasharray") || "";
    styleStrokeLinecapInput.value = el.attr("stroke-linecap") || "inherit";
    styleRadiusInput.value = el.attr("size") || 1;
  }

  if (sel == "anchors") {
    styleFill.style.display = "block";
    styleStroke.style.display = "block";
    styleStrokeWidth.style.display = "block";
    styleIconSize.style.display = "block";
    styleFillInput.value = styleFillOutput.value = el.attr("fill") || "#ffffff";
    styleStrokeInput.value = styleStrokeOutput.value = el.attr("stroke") || "#3e3e4b";
    styleStrokeWidthInput.value = styleStrokeWidthOutput.value = el.attr("stroke-width") || 0.24;
    styleIconSizeInput.value = el.attr("size") || 2;
  }

  if (sel === "legend") {
    styleStroke.style.display = "block";
    styleStrokeWidth.style.display = "block";
    styleSize.style.display = "block";

    styleLegend.style.display = "block";
    styleLegendColItemsOutput.value = styleLegendColItems.value = el.attr("data-columns");
    styleLegendBackOutput.value = styleLegendBack.value = el.select("#legendBox").attr("fill");
    styleLegendOpacityOutput.value = styleLegendOpacity.value = el.select("#legendBox").attr("fill-opacity");

    styleStrokeInput.value = styleStrokeOutput.value = el.attr("stroke") || "#111111";
    styleStrokeWidthInput.value = styleStrokeWidthOutput.value = el.attr("stroke-width") || 0.5;

    styleFont.style.display = "block";
    styleSelectFont.value = el.attr("font-family");
    styleFontSize.value = el.attr("data-size");
  }

  if (sel === "ocean") {
    styleOcean.style.display = "block";
    styleOceanFill.value = styleOceanFillOutput.value = oceanLayers.select("#oceanBase").attr("fill");
    styleOceanPattern.value = document.getElementById("oceanicPattern")?.getAttribute("href");
    styleOceanPatternOpacity.value = styleOceanPatternOpacityOutput.value = document.getElementById("oceanicPattern").getAttribute("opacity") || 1;
    outlineLayers.value = oceanLayers.attr("layers");
  }

  if (sel === "temperature") {
    styleStrokeWidth.style.display = "block";
    styleTemperature.style.display = "block";
    styleStrokeWidthInput.value = styleStrokeWidthOutput.value = el.attr("stroke-width") || "";
    styleTemperatureFillOpacityInput.value = styleTemperatureFillOpacityOutput.value = el.attr("fill-opacity") || 0.1;
    styleTemperatureFillInput.value = styleTemperatureFillOutput.value = el.attr("fill") || "#000";
    styleTemperatureFontSizeInput.value = styleTemperatureFontSizeOutput.value = el.attr("font-size") || "8px";
  }

  if (sel === "coordinates") {
    styleSize.style.display = "block";
    styleFontSize.value = el.attr("data-size");
  }

  if (sel === "armies") {
    styleArmies.style.display = "block";
    styleArmiesFillOpacity.value = styleArmiesFillOpacityOutput.value = el.attr("fill-opacity");
    styleArmiesSize.value = styleArmiesSizeOutput.value = el.attr("box-size");
  }

  if (sel === "coastline" && styleGroupSelect.value === "sea_island") {
    styleCoastline.style.display = "block";
    const auto = (styleCoastlineAuto.checked = coastline.select("#sea_island").attr("auto-filter"));
    if (auto) styleFilter.style.display = "none";
  }
}

function getEl() {
  const el = styleElementSelect.value;
  const g = styleGroupSelect.value;
  if (g === el || g === "") return svg.select("#" + el);
  else return svg.select("#" + el).select("#" + g);
}

function calculateFriendlyGridSize() {
  const size = styleGridScale.value * 25;
  const friendly = `${rn(size * distanceScaleInput.value, 2)} ${distanceUnitInput.value}`;
  styleGridSizeFriendly.value = friendly;
}

function shiftElement() {
  const x = styleShiftX.value || 0;
  const y = styleShiftY.value || 0;
  getEl().attr("transform", `translate(${x},${y})`);
}

function shiftCompass() {
  const tr = `translate(${styleCompassShiftX.value} ${styleCompassShiftY.value}) scale(${styleCompassSizeInput.value})`;
  compass.select("use").attr("transform", tr);
}

function changeFontSize(el, size) {
  styleFontSize.value = size;

  const getSizeOnScale = element => {
    // some labels are rescaled on zoom
    if (element === "labels") return Math.max(rn((size + size / scale) / 2, 2), 1);
    if (element === "coordinates") return rn(size / scale ** 0.8, 2);

    // other has the same size
    return size;
  };

  const scaleSize = getSizeOnScale(styleElementSelect.value);
  el.attr("data-size", size).attr("font-size", scaleSize);

  if (styleElementSelect.value === "legend") redrawLegend();
}

function changeRadius(size, group) {
  const el = group ? burgIcons.select("#" + group) : getEl();
  const g = el.attr("id");
  el.attr("size", size);
  el.selectAll("circle").each(function () {
    this.setAttribute("r", size);
  });
  styleRadiusInput.value = size;
  burgLabels
    .select("g#" + g)
    .selectAll("text")
    .each(function () {
      this.setAttribute("dy", `${size * -1.5}px`);
    });
  changeIconSize(size * 2, g); // change also anchor icons
}

function changeIconSize(size, group) {
  const el = group ? anchors.select("#" + group) : getEl();
  if (!el.size()) {
    console.warn(`Group ${group} not found. Can not set icon size!`);
    return;
  }
  const oldSize = +el.attr("size");
  const shift = (size - oldSize) / 2;
  el.attr("size", size);
  el.selectAll("use").each(function () {
    const x = +this.getAttribute("x");
    const y = +this.getAttribute("y");
    this.setAttribute("x", x - shift);
    this.setAttribute("y", y - shift);
    this.setAttribute("width", size);
    this.setAttribute("height", size);
  });
  styleIconSizeInput.value = size;
}

// request a URL to image to be used as a texture
function textureProvideURL() {
  alertMessage.innerHTML = /* html */ `Provide an image URL to be used as a texture:
    <input id="textureURL" type="url" style="width: 100%" placeholder="http://www.example.com/image.jpg" oninput="fetchTextureURL(this.value)" />
    <canvas id="texturePreview" width="256px" height="144px"></canvas>`;
  $("#alert").dialog({
    resizable: false,
    title: "Load custom texture",
    width: "26em",
    buttons: {
      Apply: function () {
        const name = textureURL.value.split("/").pop();
        if (!name || name === "") {
          tip("Please provide a valid URL", false, "error");
          return;
        }
        const opt = document.createElement("option");
        opt.value = textureURL.value;
        opt.text = name.slice(0, 20);
        styleTextureInput.add(opt);
        styleTextureInput.value = textureURL.value;
        getBase64(textureURL.value, base64 => texture.select("image").attr("xlink:href", base64));
        zoom.scaleBy(svg, 1.00001); // enforce browser re-draw
        $(this).dialog("close");
      },
      Cancel: function () {
        $(this).dialog("close");
      }
    }
  });
}

function fetchTextureURL(url) {
  INFO && console.log("Provided URL is", url);
  const img = new Image();
  img.onload = function () {
    const canvas = document.getElementById("texturePreview");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = url;
}

function updateElements() {
  // burgIcons to desired size
  burgIcons.selectAll("g").each(function () {
    const size = +this.getAttribute("size");
    d3.select(this)
      .selectAll("circle")
      .each(function () {
        this.setAttribute("r", size);
      });
    burgLabels
      .select("g#" + this.id)
      .selectAll("text")
      .each(function () {
        this.setAttribute("dy", `${size * -1.5}px`);
      });
  });

  // anchor icons to desired size
  anchors.selectAll("g").each(function (d) {
    const size = +this.getAttribute("size");
    d3.select(this)
      .selectAll("use")
      .each(function () {
        const id = +this.dataset.id;
        const x = pack.burgs[id].x,
          y = pack.burgs[id].y;
        this.setAttribute("x", rn(x - size * 0.47, 2));
        this.setAttribute("y", rn(y - size * 0.47, 2));
        this.setAttribute("width", size);
        this.setAttribute("height", size);
      });
  });

  // redraw elements
  if (layerIsOn("toggleHeight")) drawHeightmap();
  if (legend.selectAll("*").size() && window.redrawLegend) redrawLegend();
  oceanLayers.selectAll("path").remove();
  OceanLayers();
  invokeActiveZooming();
}
