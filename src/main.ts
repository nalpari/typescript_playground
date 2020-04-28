import $ from "jquery";
import { hello } from "./hello";

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

main();
mainObj.init();
