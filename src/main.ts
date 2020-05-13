import $ from "jquery";
import { hello } from "./hello";
import { IMainObject } from "./common";

const main = (): void => {
  console.log(hello("test222"));
};

const mainObj = {
  init: function (): void {
    this.bind();
  },
  bind: function (): void {
    $("#btnCheck").off().on("click", this.methods.fnChk);
    // document.getElementById('btnCheck')?.addEventListener('click', this.methods.fnChk, false);
  },
  methods: {
    fnChk(): void {
      console.log("click");
    },
  },
};

class Main implements IMainObject {
  init() {
    console.log("init");
    this.bind();
  }

  bind() {
    $("#btnCheck").off().on("click", this.methods.fnChk);
    $('#btnExcute').off().on('click', this.methods.fnExcute03);
  }

  methods = {
    fnChk(): void {
      console.log("click");
    },

    fnConsole(): void {
      console.log("console test");
    },

    fnExcute01(): void {
      let test: string = 'aaa';
      const over = (): void  => {
        let test: string = 'bbb';
        console.log(test);
      }
      console.log(test);
      over();
      console.log(test);
    },

    fnExcute02(): void {
      const obj: {name: string, age: number} = {name: 'Jack', age: 31};
      obj.name = 'Yoo';
      // obj.tel = '01051008301';
    },

    fnExcute03(): void {
      const arrow4 = (a: number, b:number): boolean => a > b
      console.log(arrow4(1, 2));
    },

    fnExcute04(): void {
      let n: number = 1;
      let m = 2;
    },

    fnExcute05(): void {
      interface Person {
        name: string,
        age?: number
      }

      let person: Person = {name: 'Jane'};

      class badPerson implements Person {
        // public name = '';
        constructor(public name: string) {
          this.name = name;
        }
      }
    },

    fnExcute06(): void {
      let array = [1, 2, 3];
      let tuple: [boolean, number, string] = [true, 1, 'Jane'];
    },

    fnExcute07(): void {
      class Container<T> {
        constructor(public value: T) {}
      };

      let numberContainer: Container<number> = new Container<number>(1);
      let stringContainer: Container<string> = new Container<string>('Hello World');
    },

    fnExcute08(): void {
      interface Animal {
        name: string,
        age?: number
      }

      interface Person {
        name: string,
        tel?: string
      }
      type NumberOrString = number | string;
      type AnimalAndPerson = Animal & Person;
    },
  };
}

const m = new Main();
m.init();
m.methods.fnConsole();
