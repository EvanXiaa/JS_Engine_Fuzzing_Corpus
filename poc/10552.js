/*
Source: 
*/
class C { static #m() { return 42 } static m(C) { return (C?.#m)() } }; C.#m(C)