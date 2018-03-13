import { ElementRef, Renderer, EventEmitter } from '@angular/core';
import { DataTransfer } from './datatransfer';
export interface DropEvent {
    source: {
        medium: any;
        node: HTMLElement;
    };
    destination: {
        medium: any;
        node: HTMLElement;
    };
}
export declare class DropDirective {
    private dataTransfer;
    private renderer;
    private el;
    medium: any;
    dropEffect: string;
    dropEnabled: (event: DropEvent) => boolean;
    onDragEnter: EventEmitter<any>;
    onDragLeave: EventEmitter<any>;
    onDrop: EventEmitter<any>;
    onDragOver: EventEmitter<any>;
    constructor(dataTransfer: DataTransfer, renderer: Renderer, el: ElementRef);
    private createDropEvent();
    drop(event: any): void;
    dragEnter(event: any): void;
    dragLeave(event: any): void;
    dragOver(event: any): void;
}