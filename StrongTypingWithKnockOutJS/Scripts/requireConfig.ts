require.config({
    baseUrl: "",
    paths: {
        "jQuery": "Scripts/jquery-2.1.4",
        "knockout": "Scripts/knockout-3.3.0.debug",
        "text":"Scripts/text"
    },
    shim: {
        "jQuery": {
            exports: "$"
        }
    }
}); 
require(["Scripts/App/main"]);