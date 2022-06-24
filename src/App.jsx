import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import VConsole from 'vconsole'
import { initPlugin } from 'vue-vconsole-devtools'

if(window.serverConfig.CONSOLE) initPlugin(new VConsole())

Date.prototype.Format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    }
    if(/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, String(this.getFullYear()).substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (String(o[k]).padStart(RegExp.$1.length, 0)))
        }
    }
    return fmt
}

export default defineComponent({
    setup() {
        return () => <RouterView />;
    },
});
