export default class TUI {
    static alphabet = "ABCDEFGHJKLMNPQRSTVWXYZ";
    constructor(value){
        this.value = value;
    }
    isValid() {
        const regex = new RegExp("[0-9]{7}[A-Z]");
        if (!regex.test(this.value)) return false;
        const ctrlKey = Array.from(this.value.slice(0, -1), Number).reduce((prevResult, currentValue, index, array)=>prevResult + currentValue * (array.length - index), 0) % 23;
        return this.value.charAt(this.value.length - 1) == [...TUI.alphabet][ctrlKey];
    }
}
