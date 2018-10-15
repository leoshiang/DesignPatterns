DesignPatterns.namespace("Charts").PieChart = (function () {
    var pieHover = function (event, pos, obj) {
        if (obj && obj.series) {
            percent = parseFloat(obj.series.percent).toFixed(2);
            $("#hover").html('<span style="font-weight: bold;">' + obj.series.label + ' (' + percent + '%)</span>');
        }
    };

    var pieClick = function (event, pos, obj) {
        if (obj && obj.series) {
            percent = parseFloat(obj.series.percent).toFixed(2);
            alert('' + obj.series.label + ': ' + percent + '%');
        }
    };

    var init = function () {
        var piedata = [
            {label: "USA", data: 110},
            {label: "UK", data: 60},
            {label: "India", data: 50},
            {label: "Germany", data: 30},
            {label: "China", data: 24},
            {label: "Canada", data: 20}
        ];

        var $piearea = $("#piearea");

        $.plot($piearea, piedata,
            {
                series: {
                    pie: {
                        show: true
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            });

        $piearea.bind("plothover", pieHover)
            .bind("plotclick", pieClick)
            .hover(function () {
                    $("#hover").css("visibility", "visible");
                },
                function () {
                    $("#hover").css("visibility", "hidden");
                }
            );
    };

    return {
        init: init
    }

})();