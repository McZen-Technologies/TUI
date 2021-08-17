class TUI {

  constructor(value) {
    this.value = value;
  }

  isValid() {
	const regex = new RegExp('[0-9]{7}[A-Z]');
	const alphabet = "ABCDEFGHJKLMNPQRSTVWXYZ";
	if(regex.test(this.value)){
		const matricule = Number(this.value.slice(0, -1));
		const control_key = Array.from(String(matricule), Number).reduce((accumulateur, valeurCourante, index, array) => accumulateur + valeurCourante * (array.length - index), 0) % 23;
		if(this.value.charAt(this.value.length - 1) == [...alphabet][control_key]){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
  }

}