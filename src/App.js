
    
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import {seedColors} from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList"
import SingleColorPalette from './SingleColorPalette'
import NotFound from "./NotFound";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}  /> }  
        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
          <Route path="*" render={<NotFound />} />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;

