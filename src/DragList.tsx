// import React, { useState } from "react";

// export function DragLists() {
//     const [widgets, setWidgets] = useState<string[]>([]);

//     function handleOnDrag(e: React.DragEvent, widgetType: string) {
//         e.dataTransfer.setData("widgetType", widgetType);
//     }

//     function handleOnDrop(e: React.DragEvent) {
//         const widgetType = e.dataTransfer.getData("widgetType") as string;
//         console.log("widgetType", widgetType);
//         setWidgets([...widgets, widgetType]);
//     }

//     function handleDragOver(e: React.DragEvent) {
//         e.preventDefault();
//     }

//     return (
//         <div className="DragLists">
//             <div className="widgets">
//                 <div
//                     className="widget"
//                     draggable
//                     onDragStart={(e) => handleOnDrag(e, "Movie 1")}
//                 >
//                     Movie 1
//                 </div>
//                 <div
//                     className="widget"
//                     draggable
//                     onDragStart={(e) => handleOnDrag(e, "Movie 2")}
//                 >
//                     Movie 2
//                 </div>
//                 <div
//                     className="widget"
//                     draggable
//                     onDragStart={(e) => handleOnDrag(e, "Movie 3")}
//                 >
//                     Movie 3
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="list1-label">Admin List</div>
//                 <div
//                     className="list1"
//                     onDrop={handleOnDrop}
//                     onDragOver={handleDragOver}
//                 >
//                     {widgets.map((widget, index) => (
//                         <div className="dropped-widget" key={index}>
//                             {widget}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="list1-label">Admin List</div>
//                 <div
//                     className="list2"
//                     onDrop={handleOnDrop}
//                     onDragOver={handleDragOver}
//                 >
//                     {widgets.map((widget, index) => (
//                         <div className="dropped-widget" key={index}>
//                             {widget}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default DragLists;
import React, { useState } from "react";

export function DragLists() {
    const [adminWidgets, setAdminWidgets] = useState<string[]>([]);
    const [userWidgets, setUserWidgets] = useState<string[]>([]);

    function handleOnDrag(e: React.DragEvent, widgetType: string) {
        e.dataTransfer.setData("widgetType", widgetType);
    }

    function handleOnDropAdmin(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;
        console.log("widgetType", widgetType);
        setAdminWidgets([...adminWidgets, widgetType]);
    }

    function handleOnDropUser(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;
        console.log("widgetType", widgetType);
        setUserWidgets([...userWidgets, widgetType]);
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    return (
        <div className="DragLists">
            <div className="widgets">
                <div
                    className="widget"
                    draggable
                    onDragStart={(e) => handleOnDrag(e, "Movie 1")}
                >
                    Movie 1
                </div>
                <div
                    className="widget"
                    draggable
                    onDragStart={(e) => handleOnDrag(e, "Movie 2")}
                >
                    Movie 2
                </div>
                <div
                    className="widget"
                    draggable
                    onDragStart={(e) => handleOnDrag(e, "Movie 3")}
                >
                    Movie 3
                </div>
            </div>
            <div className="container">
                <div className="list1-label">Admin List</div>
                <div
                    className="list1"
                    onDrop={handleOnDropAdmin}
                    onDragOver={handleDragOver}
                >
                    {adminWidgets.map((widget, index) => (
                        <div className="dropped-widget" key={index}>
                            {widget}
                        </div>
                    ))}
                </div>
                <div className="list1-label">User List</div>
                <div
                    className="list2"
                    onDrop={handleOnDropUser}
                    onDragOver={handleDragOver}
                >
                    {userWidgets.map((widget, index) => (
                        <div className="dropped-widget" key={index}>
                            {widget}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
