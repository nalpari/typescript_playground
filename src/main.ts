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
  };
}

const m = new Main();
m.init();
m.methods.fnConsole();
