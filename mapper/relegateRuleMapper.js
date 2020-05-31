let relegateRuleMapper = {
// 表 relegate_rule
        // `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '主键,优先级',
        // `business` varchar(50) NOT NULL DEFAULT '' COMMENT '业务类型,NODE_EXE:节点降级,DOWN:下载功能降级,MODEL:模块降级',
        // `action` varchar(50) NOT NULL DEFAULT '' COMMENT '降级行为,默认为EXE_ERROR,EXE_ERROR: 节点打岔,DISABLE: 功能屏蔽',
        // `reglate_start_time` datetime NOT NULL COMMENT '降级开始时间',
        // `reglate_end_time` datetime NOT NULL COMMENT '降级结束时间',
        // `filter` JSON COMMENT '降级过滤规则',
        // `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        // add: 'insert into user(username, password) values(?, ?)',
        // update: 'update user set username=?, password=? where id=?',
        list: 'select id,business,filter,created from relegate_rule'
        // getById: 'select * from user where id = ?'
};
module.exports = relegateRuleMapper;