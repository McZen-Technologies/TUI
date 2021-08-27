/**
 * The unique identifier serves as the taxpayer's identifier 
 * to the tax authorities in Tunisia, it's composed of 7 digits
 * with a control key.
 * 
 * @api public
 */
class TUI {
	constructor(value) {
		this.value = value
	}

	isValid() {
		// TODO: convert regex and alphabet constants to static attributes
		const regex = new RegExp('[0-9]{7}[A-Z]')
		const alphabet = "ABCDEFGHJKLMNPQRSTVWXYZ"

		if (!regex.test(this.value)) return false

		const matricule = +this.value.slice(0, -1)
		// FIXME: should simplify this behave.
		const ctrlKey = Array.from(String(matricule), Number).reduce((prevResult, currentValue, index, array) => prevResult + currentValue * (array.length - index), 0) % 23

		return this.value.charAt(this.value.length - 1) == [...alphabet][ctrlKey]
	}
}
