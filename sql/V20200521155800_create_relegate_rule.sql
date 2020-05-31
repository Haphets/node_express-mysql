CREATE TABLE `relegate_rule` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '主键,优先级',
  `business` varchar(50) NOT NULL DEFAULT '' COMMENT '业务类型,NODE_EXE:节点降级,DOWN:下载功能降级,MODEL:模块降级',
  `filter` mediumtext DEFAULT '' COMMENT '降级过滤规则',
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='降级规则表';