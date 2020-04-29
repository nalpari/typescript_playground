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
  }

  methods = {
    fnChk(): void {
      console.log("click");
    },

    fnConsole(): void {
      console.log("console test");
    },
  };
}

main();
const m = new Main();
m.init();
