import React, { useState } from "react";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-switch";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-group";
import "@esri/calcite-components/dist/components/calcite-flow";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-block-section";
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
  CalciteActionGroup,
  CalciteAction,
  CalciteFlow,
  CalciteBlock,
  CalciteBlockSection,
  CalciteValueList,
  CalciteValueListItem,
} from "@esri/calcite-components-react";
import "./App.css";

function App() {
  const [activeAction, setActiveAction] = useState("");

  const handleActionBarClick = (
    event: React.MouseEvent<HTMLCalciteActionBarElement>
  ) => {
    const target = event.target as HTMLCalciteActionElement;
    if (target.tagName !== "CALCITE-ACTION") {
      return;
    }

    if (activeAction) {
      (
        document.querySelector(
          `[id=${activeAction}]`
        ) as HTMLCalciteActionElement
      ).active = false;
    }

    const nextAction = target.id;
    if (nextAction && nextAction !== activeAction) {
      (
        document.querySelector(
          `[id=${nextAction}]`
        ) as HTMLCalciteActionElement
      ).active = true;
      setActiveAction(nextAction);
    } else {
      setActiveAction("");
    }
  };

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
              />
              <CalciteSwitch
                onCalciteSwitchChange={() =>
                  document.body.classList.toggle("calcite-theme-dark")
                }
              />
              <CalciteIcon
                icon="moon"
                scale="s"
                class="switch-icon"
              />
            </CalciteLabel>
          </div>
        </div>

        <CalciteShellPanel slot="primary-panel" position="start" detached>
          <CalciteActionBar slot="action-bar" onClick={handleActionBarClick}>
            <CalciteActionGroup>
              <CalciteAction text="Add" id="add" icon="plus" />
              <CalciteAction
                text="Save"
                id="save"
                disabled
                icon="save"
              />
              <CalciteAction
                text="Layers"
                id="layers"
                indicator
                icon="layers"
              />
            </CalciteActionGroup>
            <CalciteActionGroup>
              <CalciteAction
                text="Legend"
                id="legend"
                icon="legend"
              />
              <CalciteAction
                text="Basemaps"
                id="basemaps"
                icon="basemap"
                indicator
              />
            </CalciteActionGroup>
          </CalciteActionBar>
          <CalciteBlock
            collapsible
            open
            heading="Primary Content"
            summary="This is the primary content."
          >
            <CalciteBlockSection
              open
              status="valid"
              text="Example block section"
            >
              <CalciteAction
                text="Puppies"
                text-enabled
                indicator
                icon="plus"
              />
              <CalciteAction
                text="Kittens"
                text-enabled
                icon="save"
              />
              <CalciteAction
                text="Birds?"
                text-enabled
                icon="banana"
              />
            </CalciteBlockSection>
          </CalciteBlock>
          <CalciteBlock
            collapsible
            heading="Additional Block"
            summary="The is another block content."
          >
            <CalciteBlockSection text="Not working :'(" status="invalid">
              <p>Cool thing.</p>
            </CalciteBlockSection>
          </CalciteBlock>
        </CalciteShellPanel>

        <CalciteShellPanel
          slot="contextual-panel"
          position="end"
          detached
          height-scale="l"
        >
          <CalciteFlow>
            <CalcitePanel heading="Data settings">
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
                    />
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
                    />
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
                    />
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
