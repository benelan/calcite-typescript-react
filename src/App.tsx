import React, { useState } from "react";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-switch";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-flow";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-value-list";
import "@esri/calcite-components/dist/components/calcite-value-list-item";
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel,
  CalciteLabel,
  CalciteIcon,
  CalciteSwitch,
  CalciteActionBar,
  CalciteAction,
  CalciteFlow,
  CalciteBlock,
  CalciteValueList,
  CalciteValueListItem,
} from "@esri/calcite-components-react";
import "./App.css";

function App() {
  const [activePanel, setActivePanel] = useState("layers");

  function handleActionBarClick(
    event: React.MouseEvent<HTMLCalciteActionBarElement>
  ) {
    const target = event.target as HTMLCalciteActionElement;
    if (target.tagName !== "CALCITE-ACTION") {
      return;
    }

    if (activePanel) {
      (
        document.querySelector(
          `[data-action-id=${activePanel}]`
        ) as HTMLCalciteActionElement
      ).active = false;
      (
        document.querySelector(
          `[data-panel-id=${activePanel}]`
        ) as HTMLCalcitePanelElement
      ).hidden = true;
    }

    const nextPanel = target.dataset.actionId;
    if (nextPanel && nextPanel !== activePanel) {
      (
        document.querySelector(
          `[data-action-id=${nextPanel}]`
        ) as HTMLCalciteActionElement
      ).active = true;
      (
        document.querySelector(
          `[data-panel-id=${nextPanel}]`
        ) as HTMLCalcitePanelElement
      ).hidden = false;
      setActivePanel(nextPanel);
    } else {
      setActivePanel("");
    }
  }

  return (
    <div id="app">
      <CalciteShell content-behind>
        <div slot="header" id="header">
          <h2 id="header-title">Calcite Example with React/TypeScript</h2>

          <div id="header-controls">
            <CalciteLabel disable-spacing layout="inline" class="label-wrapper">
              <CalciteIcon
                icon="brightness"
                scale="s"
                class="switch-icon"
              ></CalciteIcon>
              <CalciteSwitch />
              <CalciteIcon
                icon="moon"
                scale="s"
                class="switch-icon"
              ></CalciteIcon>
            </CalciteLabel>
          </div>
        </div>

        <CalciteShellPanel slot="primary-panel" detached>
          <CalciteActionBar slot="action-bar" onClick={handleActionBarClick}>
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="Layers"
            ></CalciteAction>
            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="Basemaps"
            ></CalciteAction>
            <CalciteAction
              data-action-id="legend"
              icon="legend"
              text="Legend"
            ></CalciteAction>
            <CalciteAction
              data-action-id="bookmarks"
              icon="bookmark"
              text="Bookmarks"
            ></CalciteAction>
            <CalciteAction
              data-action-id="print"
              icon="print"
              text="Print"
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            data-panel-id="layers"
          >
            <div id="layers-container">Layers content</div>
          </CalcitePanel>
          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            hidden
          >
            <div id="basemaps-container">Basemaps content</div>
          </CalcitePanel>
          <CalcitePanel
            heading="Legend"
            height-scale="l"
            data-panel-id="legend"
            hidden
          >
            <div id="legend-container">Legend content</div>
          </CalcitePanel>
          <CalcitePanel
            heading="Bookmarks"
            height-scale="l"
            data-panel-id="bookmarks"
            hidden
          >
            <div id="bookmarks-container">Bookmarks content</div>
          </CalcitePanel>
          <CalcitePanel
            heading="Print"
            height-scale="l"
            data-panel-id="print"
            hidden
          >
            <div id="print-container">Print content</div>
          </CalcitePanel>
        </CalciteShellPanel>

        <CalciteShellPanel
          slot="contextual-panel"
          position="end"
          detached
          height-scale="l"
        >
          <CalciteFlow>
            <CalcitePanel heading="Layer settings">
              <CalciteBlock
                collapsible
                open
                heading="Contextual Content"
                summary="Select goodness"
              >
                <CalciteValueList multiple filter-enabled>
                  <CalciteValueListItem
                    label="2018 Population Density (Esri)"
                    description="{POPDENS_CY}"
                    value="POPDENS_CY"
                  >
                    <CalciteAction
                      slot="actions-end"
                      text=""
                      icon="camera-flash-on"
                    ></CalciteAction>
                  </CalciteValueListItem>
                  <CalciteValueListItem
                    label="2018 Population Density [Updated]"
                    description="{POPDENS_CY}"
                    value="POPDENS_CY2"
                  >
                    <CalciteAction
                      slot="actions-end"
                      text=""
                      icon="banana"
                    ></CalciteAction>
                  </CalciteValueListItem>
                  <CalciteValueListItem
                    label="2018 Total Households (Esri)"
                    description="{TOTHH_CY}"
                    value="TOTHH_CY"
                  >
                    <CalciteAction
                      slot="actions-end"
                      text=""
                      icon="person2"
                    ></CalciteAction>
                  </CalciteValueListItem>
                </CalciteValueList>
              </CalciteBlock>
            </CalcitePanel>
          </CalciteFlow>
        </CalciteShellPanel>
      </CalciteShell>
    </div>
  );
}

export default App;
