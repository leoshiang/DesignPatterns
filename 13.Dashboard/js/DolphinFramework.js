/**
 * 命名空間實體物件。定義一個命名空間，會回傳一個 DolphinNamespace
 */
function DolphinNamespace() {
}

/**
 * 遍歷命名空間樹
 * @param {string} namespace 命名空間，例如：System.Helpers
 * @param {callback} callback 回呼函數
 * @returns {DolphinNamespace}
 */
DolphinNamespace.prototype.traverse = function (namespace, callback) {
    // 將命名空間分解
    var parts = namespace.split(".");

    // 從命名空間樹頭開始
    var node = this;

    // 依序遍歷每一個命名空間節點
    parts.forEach(function (name) {
        node = callback(node, name);
    });

    return node;
};

/**
 * 定義命名空間
 * @param {string} namespace 命名空間，例如：System.Helpers
 * @returns {DolphinNamespace}
 */
DolphinNamespace.prototype.namespace = function (namespace) {
    // 依序遍歷每一個命名空間節點
    return this.traverse(namespace, function (node, item) {
            // 為命名空間節點產生一個物件，並存入陣列
            node[item] = node[item] || {};

            // 回傳剛剛產生的物件
            return node[item];
        }
    );
};

/**
 * 反射，動態載入物件
 * @param name
 * @returns {object}
 */
DolphinNamespace.prototype.reflection = function (name) {
    // 依序遍歷每一個命名空間節點
    return this.traverse(name, function (node, item) {
            // 回傳命名空間節點物件
            return node[item];
        }
    );
};

var DesignPatterns = new DolphinNamespace();