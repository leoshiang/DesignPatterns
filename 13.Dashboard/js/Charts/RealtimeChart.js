DesignPatterns.namespace("Charts").RealtimeChart = (function () {
    var coordinates = DesignPatterns.DataSource.Coordinates;
    var plot;

    /**
     * 更新圖形內容
     */
    function update() {
        plot.setData([coordinates.generateRandomCoordinates()]);
        plot.draw();
        setTimeout(update, 30);
    }

    /**
     * 初始化
     */
    var init = function () {
        var options = {
            series: {shadowSize: 0},
            yaxis: {min: 0, max: 100},
            xaxis: {show: false},
            colors: ["#cc0000"]
        };

        plot = $.plot($("#realtime"), [coordinates.generateRandomCoordinates()], options);
        update();
    };

    return {
        init: init
    }
})();