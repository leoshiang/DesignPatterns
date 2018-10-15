DesignPatterns.namespace("DataSource").Coordinates = (function () {
    var yCoordinates = [];

    /**
     * 產生隨機座標資料
     * @returns {Array} 隨機座標 (x,y) 陣列
     */
    function generateRandomCoordinates() {
        if (yCoordinates.length > 0) {
            yCoordinates = yCoordinates.slice(1);
        }

        // 產生隨機資料
        while (yCoordinates.length < 300) {
            var prev = yCoordinates.length > 0 ? yCoordinates[yCoordinates.length - 1] : 50;
            var y = Math.round(prev + Math.random() * 5 - 2.5);
            // range is 0 - 100;
            y = Math.max(Math.min(y, 100), 0);
            yCoordinates.push(y);
        }

        // 回傳座標 (x,y) 陣列
        var coordinates = [];
        for (var x = 0; x < yCoordinates.length; ++x) {
            coordinates.push([x, yCoordinates[x]])
        }

        return coordinates;
    }

    return {
        generateRandomCoordinates: generateRandomCoordinates
    }

})();