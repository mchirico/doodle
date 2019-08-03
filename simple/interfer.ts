interface LabeledValue {
    label: string;
}

export function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

export var myObj = {size: 10, label: "Size 10 Object"};
