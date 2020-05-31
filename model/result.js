module.exports = {
    jsonResult: function (success, data) {
        let result = {};
        result.success = success;
        result.data = data;
        return result;
    }
}