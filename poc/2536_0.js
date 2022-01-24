
class Foo {
	flip() {
		[this.indexA, this.indexB] = [this.indexB, this.indexA];
	}
}


class Foo {
	flip() {
		let { indexA, indexB } = this;
		[indexA, indexB] = [this.indexB, this.indexA];
		this.indexA = indexA;
		this.indexB = indexB;
	}
}

