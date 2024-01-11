class IntMask {
    #htmlInputId
    #input
    constructor(htmlInputId) {
        this.#htmlInputId = htmlInputId
        this.#input = document.getElementById(this.#htmlInputId)
        try {
            if (this.#input === null || this.#input === undefined)
                throw new Error("The html element got by id is null or undefined")
            if (this.#input.tagName !== "INPUT")
                throw new Error("The html element got by id don't correspond to html input!")
            if (this.#input.type !== "text")
                throw new Error("The input got by id don't correspond a text type input!")
            this.#input.addEventListener("input", () => this.#mask())
        } catch (error) {
            console.error(error.message);
        }
    }
    #delLastChar() {
        this.#input.value = this.#input.value.slice(0, this.#input.value.length - 1)
    }
    #getLastChar() {
        return this.#input.value.charCodeAt(
            this.#input.value.length - 1
        )
    }
    #mask() {
        let lastChar = this.#getLastChar()
        if (lastChar < 48 || lastChar > 57) this.#delLastChar()
    }
}