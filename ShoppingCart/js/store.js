//function store($window) {
function store($window) {
    //if ($window.localstorage["bicycleproduct"] === null) {
        this.products = [
            new product("1Series", "1 Series", "1 Series aluminium road bikes are strong, light, and built to fly over the pavement.", 1200,
                [
                    { "FeatureName": "Mudguard compatible", "ImageName": "1Series-Mudgaurd", "Description": "Mudguard mounts allow for full-coverage mudguards so you can ride comfortably in less-than-ideal conditions." }
                ]
                ),
            new product("KRX", "KRX", "The KRX kids' road bike is the real deal, with a light, fast frame, larger 26 inch wheels.", 1000,
                [
                    { "FeatureName": "26 inch wheels", "ImageName": "KRX-Wheel", "Description": "Big, fast-rolling 26 inch wheels make this junior road bike a serious competitor." },
                    { "FeatureName": "Race-ready components", "ImageName": "KRX-Race", "Description": "Quality components mean Superfly Kids' is ready to shred the singletrack, on race day or every day." }
                ]
                ),
        ];
    //}
    //else
    //    this.products = JSON.parse($window.localstorage["bicycleproduct"]);
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
