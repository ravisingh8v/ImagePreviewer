export interface configuration {
    elements: elements[];
}

export interface elements {
    label: label;
    position: position;
    arrow?: arrow;
}

export interface label {
    labelName: string;
    background?: string;
    textColor?: string;
}

export interface position {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

export interface arrow {
    direction: direction;
    length: number;
}
type direction = "above" | "left" | "right" | "below";