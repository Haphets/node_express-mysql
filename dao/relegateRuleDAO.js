const mysql = require('mysql');
const debug = require('debug')('ccms-relegation-manage:db');
const config = require('config-lite')(__dirname);
const relegateRuleMapper = require('../mapper/relegateRuleMapper');

module.exports = {
    //查询降级规则列表
    list: function (callback) {
        let connection = mysql.createConnection(config.db);

        connection.connect(function (error) {
            if (error) {
                debug('relegateRule 获取连接失败' + error);
            } else {
                debug('relegateRule 获取连接成功');
            }
        });
        debug('查询规则列表sql:' + relegateRuleMapper.list);
        connection.query(relegateRuleMapper.list, function (error, result) {
            if (error) {
                debug('查询规则列表失败:' + error);
                throw error
            }
            callback(result);
        });
        connection.end(function (error) {
            if (error) {
                debug('relegateRule 关闭连接失败' + error);
            } else {
                debug('relegateRule 关闭连接成功');
            }
        });
    }
};
