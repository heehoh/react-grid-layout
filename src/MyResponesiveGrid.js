import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";


const ResponsiveGridLayout = WidthProvider(Responsive);

function MyResponsiveGrid() {
  const layouts = {
    lg: [
      { i: "1", x: 0, y: 0, w: 1, h: 1, },
      { i: "2", x: 1, y: 0, w: 1, h: 1, },
      { i: "3", x: 2, y: 0, w: 1, h: 1, },
      { i: "4", x: 3, y: 0, w: 1, h: 1,},
      { i: "5", x: 4, y: 0, w: 1, h: 1 }
    ],
    md: [
      { i: "1", x: 0, y: 0, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "2", x: 1, y: 0, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "3", x: 2, y: 0, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "4", x: 0, y: 1, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "5", x: 1, y: 1, w: 1, h: 1, resizable: true, isDraggable: true }
    ],
    sm: [
      { i: "1", x: 0, y: 0, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "2", x: 1, y: 1, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "3", x: 0, y: 1, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "4", x: 1, y: 2, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "5", x: 0, y: 2, w: 1, h: 1, resizable: true, isDraggable: true }
    ],
    xs: [
      { i: "1", x: 0, y: 0, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "2", x: 1, y: 0, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "3", x: 0, y: 1, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "4", x: 0, y: 2, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "5", x: 0, y: 3, w: 1, h: 1, resizable: true, isDraggable: true }
    ],
    xxs: [
      { i: "1", x: 0, y: 0, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "2", x: 0, y: 1, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "3", x: 0, y: 2, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "4", x: 0, y: 3, w: 1, h: 1, resizable: true, isDraggable: true },
      { i: "5", x: 0, y: 4, w: 1, h: 1, resizable: true, isDraggable: true }
    ]
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 5, md: 2, sm: 2, xs: 2, xxs: 1 }}
      verticalCompact={false} // 위로 붙지 않게 하는 코드
    >
      <div style={{ border: "5px solid pink" }} key="1">
        1
      </div>
      <div style={{ border: "5px solid pink" }} key="2">
        2
      </div>
      <div style={{ border: "5px solid pink" }} key="3">
        3
      </div>
      <div style={{ border: "5px solid pink" }} key="4">
        4
      </div>
      <div style={{ border: "5px solid pink" }} key="5">
        5
      </div>
    </ResponsiveGridLayout>
  );
}

export default MyResponsiveGrid;
