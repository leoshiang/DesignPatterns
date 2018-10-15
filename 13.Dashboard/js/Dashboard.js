DesignPatterns.namespace('Examples').Dashboard = function () {
    return {
        start: function () {
            var Charts = DesignPatterns.Charts;
            Charts.LineChart.init();
            Charts.PieChart.init();
            Charts.RealtimeChart.init();
        }
    }
};

$(function () {
    // ** facade pattern
    var dashboard = new DesignPatterns.Examples.Dashboard;
    dashboard.start();
});