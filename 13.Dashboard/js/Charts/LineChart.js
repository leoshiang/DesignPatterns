DesignPatterns.namespace("Charts").LineChart = (function () {
    // 每月統計資料
    var monthlyStatistics = DesignPatterns.DataSource.MonthlyStatistics;

    /**
     * 顯示折線圖
     * @param monthlyData 每月資料
     */
    var showLineChart = function (monthlyData) {
        var options = {
            legend: {position: "nw"},
            lines: {show: true},
            points: {show: true},
            xaxis: {ticks: [[1, "jan"], [2, "feb"], [3, "mar"], [4, "apr"], [5, "may"], [6, "jun"], [7, "jul"], [8, "aug"], [9, "sep"], [10, "oct"], [11, "nov"], [12, "dec"]]},
            grid: {backgroundColor: {colors: ["#fff", "#f5f6f7"]}}
        };

        $.plot($("#plotarea"), monthlyData, options);
    };

    /**
     * 策略模式
     * @param dataSource 資料來源
     * @returns {{show: show}}
     * @constructor
     */
    function PlotStrategy(dataSource) {
        var what = dataSource;
        var show = function () {
            showLineChart(monthlyStatistics.get(what));
        };
        return {show: show};
    }

    // 建立策略模式
    var userStrategy = new PlotStrategy("users");
    var visitsStrategy = new PlotStrategy("visits");
    var salesStrategy = new PlotStrategy("sales");

    // 預設策略
    var defaultStrategy = userStrategy;

    var showeChart = function () {
        defaultStrategy.show();
    };

    // 觀察者模式
    function observe(id, strategy) {
        var _strategy = strategy;
        $(id).on('hover', function () {
            $('[id^="link-"]').removeClass("active");
            $("#link-users").addClass("active");
            defaultStrategy = _strategy;
            showeChart();
        });
    }

    var init = function () {
        observe("#link-users", userStrategy);
        observe("#link-visits", visitsStrategy);
        observe("#link-sales", salesStrategy);
        showeChart();
    };

    return {
        init: init
    }
})();