DesignPatterns.namespace("DataSource").MonthlyStatistics = (function () {

    var get = function (what) {
        switch (what) {
            case "users":
                return [{
                    "label": "Users",
                    "data": [[1, 344], [2, 578], [3, 460], [4, 902], [5, 1933], [6, 2303], [7, 3281], [8, 3590], [9, 6830], [10, 8429]]
                }];

            case "visits":
                return [{
                    "label": "Visits",
                    "data": [[1, 12965], [2, 16935], [3, 19993], [4, 21983], [5, 76801], [6, 67372], [7, 87922], [8, 100399], [9, 140332], [10, 188022]],
                    "color": 2
                }];

            case "sales":
                return [{
                    "label": "Sales",
                    "data": [[1, 266], [2, 1009], [3, 6754], [4, 6570], [5, 7489], [6, 8888], [7, 10821], [8, 14099], [9, 12222], [10, 23390]],
                    "color": 3
                }];

            default:
                return [];
        }
    };

    return {
        get: get
    }

})();