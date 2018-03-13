

# Welcome to Drag Enabled!

Have you looked at all the other Angular drag and drop libraries and noted they are not generic enough to fit within your design?

This library provides Angular 4 directives that enables you to have any html tag drag drop enabled within your component control just by adding DragDropModule into your AppModule.

You will be able to pass a medium object to the directives. The meduim will supposedly have or know of certain things that can help your code make a decision on allowing a drag or a drop to take place. At the start, a "dragEnabled" requst with a DragEvent will be sent to your component. if returned true, dragging begins. At the end of drag operation, an event with the source medium, source HTMLElement, destination medium, and destination HTMLElement will be sent to your component to perform any action necessary.

# Version 0.0.1
```
MODULE: 
		DragDropModule

DEPENDENCIES: 
		basic Angular core libraries
```

Interfaces
```
export interface DragEvent {
    medium: any,
    node: HTMLElement
}

export interface DropEvent {
    source: {
        medium: any,
        node: HTMLElement
    },
    destination: {
        medium: any,
        node: HTMLElement
    }
}
```

The following are available functionalities presented in this version:

Sample code
```
<th scope="col"
	[medium]="headerInfo"
	[dragEnabled]="isDragEnabled.bind(this)"
	[dropEnabled]="dropEnabled.bind(this)"
	(onDragStart)="onDragStart($event)"
	(onDragEnd)="onDragEnd($event)"
	(onDrop)="onDrop($event)">header text</th>

	.............

  	isDragEnabled(event: DragEvent) {
		return event.medium.dragable;
	}
	onDragStart(event: DragEvent){
	}
	onDragEnd(event: DragEvent){
	}
	
	dropEnabled(event: DropEvent) {
		return event.destination.medium.dragable;
	}
	onDrop(event: DropEvent){
	//	swapColumns(source.medium, source.node, destination.medium, destination.node);
	}

	.............

	table {
		th {
			&.drag-over {
				background-color: #9b9b9b;

				.title, .icon {
				color: #eee;
			}
		}
	}
	
```

[Source code](https://github.com/msalehisedeh/drag-enabled)