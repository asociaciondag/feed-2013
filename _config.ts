import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(postcss());
site.ignore("css");
site.copy("fonts");
site.copy("flowplayer");
site.copy("img");
site.copy("js");
site.copy("video");

export default site;
