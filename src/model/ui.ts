import { Selectable } from './selection';

/**
 * A TreeNode is an item that can reside in a tree.
 */
export interface TreeNode extends Selectable {
    label: string
    icon?: string
    children? : Array<TreeNode>
}


export interface TabItem {
    key: string
    label: string
    icon?: string
}

export interface CodeDocument extends TabItem {
    language: string
    content: string
}


export interface CodeEditor {
    key: string,
    activeDocument: string
    documents: Array<CodeDocument>
}
