﻿(function () {
    'use strict';
    angular
        .module('mmpadmin')
        .factory('apiSetting2', apiSetting);
    var apiParam = {
        post: {
            v1: {
                get_all_posts: {
                    name: '获取全公司的动态更新 ',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_all_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新(即比since_id发表时间晚的动态更新)' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'post_filter_share', isMust: true, type: 'int', des: '动态筛选范围' },
                        { key: 'project_id', isMust: false, type: 'string', des: '网络id' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组id' },

                    ]
                },
                get_at_me_posts: {
                    name: '获取提及@我的动态更新(适用inbox中的提到我的)',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_at_me_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'is_unreading', isMust: false, type: 'bool', des: '是否获取未读提及我的动态 默认0：否' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_post_detail: {
                    name: '根据动态更新编号获取单条动态更新内容',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_post_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
//                get_doc_faq_img_posts: {
//                    name: '获取 文档/图片/问答 列表信息 ',
//                    docUrl: '/doc/post/post_detail.html',
//                    url: '/post/get_doc_faq_img_posts',
//                    requestMode: 'get',
//                    params: [
//                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
//                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
//                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
//                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型。默认值0，0表示所有；1表示我上传的；2表示我收藏的' },
//                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新(即比since_id发表时间晚的动态更新)' },
//                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
//                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
//                        { key: 'select_type', isMust: true, type: 'int', des: '查询类型 (2：图片,3:文档，4：问答)' }
//                    ]
//                },
                get_favorite_posts: {
                    name: '获取当前登录用户收藏的动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_favorite_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_group_groups: {
                    name: '获取群组的动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_group_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_company_top_posts: {
                    name: '获取可见网络的置顶动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_company_top_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'count', isMust: false, type: 'int', des: '获取的数量，默认20' }
                    ]
                },
                get_my_posts: {
                    name: '获取当前登录用户发布的动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_my_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新(即比since_id发表时间晚的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_reply_by_me_posts: {
                    name: '获取我回复的最新回复信息',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_reply_by_me_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_reply_me_posts: {
                    name: '获取回复我的最新回复信息',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_reply_me_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'is_unreading', isMust: false, type: 'bool', des: '是否获取未读提及我的动态 默认0：否' },
                        { key: 'max_id', isMust: false, type: 'string', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)(特殊，数据库内部处理)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_reply_post: {
                    name: '根据动态更新编号获取某条动态更新的回复列表信息',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_reply_post',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                get_tag_posts: {
                    name: '获取某个标签下的动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_tag_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'topic', isMust: true, type: 'string', des: '话题名称' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100' }
                    ]
                },
                get_user_posts: {
                    name: '获取用户发布的动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_user_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '用户编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_company_tag: {
                    name: '获取当前企业动态更新标签信息',
                    docUrl: {type: '', url: ''},
                    url: '/post/get_company_tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100' }
                    ]
                },
                add_favorite_or_like_post: {
                    name: '增加当前登录用户的一条动态更新 收藏/喜欢',
                    docUrl: {type: '', url: ''},
                    url: '/post/add_favorite_or_like_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'choose_type', isMust: false, type: 'int', des: '操作类型 1:喜欢 2：收藏' }
                    ]
                },
                add_reply_post: {
                    name: '增加一条动态更新的回复',
                    docUrl: {type: '', url: ''},
                    url: '/post/add_reply_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '回复的动态更新编号' },
                        { key: 'reply_id', isMust: false, type: 'string', des: '回复编号(可以对别人的回复进行回复)[可选]' },
                        { key: 'reply_account_id', isMust: false, type: 'string', des: '原回复创建人，不填默认动态创建者[可选]' },
                        { key: 'reply_msg', isMust: true, type: 'int', des: '回复的消息内容([aid]accountID[/aid]代表@某个人,[gid]groupID[/gid]代表@某个群组)' },
                        { key: 'file_type', isMust: false, type: 'int', des: '可为空(为空时 p_img或p_doc也必须为空)，picture：表示上传图片；document：表示上传文档' },
                        { key: 'p_img或p_doc', isMust: true, type: 'binary', des: '要上传的图片、文档。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M。文档仅支持DOC,PDF,XLS,PPT,TXT,压缩包,目前上传文件大小限制为<50M' },
                        { key: 'is_share', isMust: false, type: 'bool', des: '同时转发动态(0表示不转发动态；1表示同时转发动态)' },
                        { key: 'group_ids', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'share_type', isMust: false, type: 'int', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' }
                    ]
                },
                delete_post: {
                    name: '根据动态更新编号删除一条动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/delete_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'binary', des: '动态更新编号' }
                    ]
                },
                delete_favorite_or_like_post: {
                    name: '删除当前登录用户 收藏/喜欢 的一条动态更新 ',
                    docUrl: {type: '', url: ''},
                    url: '/post/delete_favorite_or_like_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'choose_type', isMust: true, type: 'int', des: '操作类型 喜欢=1/收藏=2' }
                    ]
                },
                delete_reply_post: {
                    name: '根据回复编号删除一条回复 *',
                    docUrl: '',
                    url: '/post/delete_reply_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'reply_id', isMust: false, type: 'string', des: '回复编号(必须是当前登录用户自己创建的回复' }
                    ]
                },
                top_post: {
                    name: '置顶一条动态更新(仅限网络管理员使用) ',
                    docUrl: {type: '', url: ''},
                    url: '/post/top_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'binary', des: '动态更新编号' },
                        { key: 'hour', isMust: false, type: 'int', des: '置顶时长 默认为:不限时长 传多少小时' }
                    ]
                },
                issue_post: {
                    name: '发布一条动态更新',
                    docUrl: '',
                    url: '/post/issue_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_ids', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'project_ids', isMust: false, type: 'string', des: '可为空，动态分享网络编号(多个网络用逗号隔开)' },
                        { key: 'post_msg', isMust: true, type: 'string', des: '动态更新内容([aid]AccountID[/aid]代表@某个人,[gid]groupID[/gid]代表@某个群组，#话题内容#代表给动态增加个话题)' },
                        { key: 'post_type', isMust: true, type: 'int', des: '动态更新类型(0表示普通动态更新(默认值);1表示链接动态更新 ;图片=2,文档=3,提问=4,系统自动=5,应用用户分享=6,投票=7,音视频=8,附件=9)' },
                        { key: 'link_title', isMust: false, type: 'string', des: '动态更新类型是1的时候该值必填 链接标题' },
                        { key: 'link_uri', isMust: false, type: 'string', des: '动态更新类型是1的时候该值必填 链接地址' },
                        { key: 'attachments', isMust: false, type: 'string', des: '本地附件' },
                        { key: 'knowledgeAttach', isMust: false, type: 'string', des: '知识附件' },
                        { key: 'vote_options', isMust: false, type: 'string', des: '投票选项：xxx[Option]xx[Option]' },
                        { key: 'vote_anonymous', isMust: false, type: 'string', des: '是否匿名投票' },
                        { key: 'last_time', isMust: false, type: 'string', des: '投票截止时间' },
                        { key: 'available_number', isMust: false, type: 'int', des: '允许投票次数' },
                        { key: 'vote_option_files', isMust: false, type: 'string', des: '投票图片：https://dn-mdpic.qbox.me/VoteDoc/pic/201606/03/mdMImCeKkCWLkvT_2027623769.png[Option]' },
                        { key: 'vote_option_thumbnail_files', isMust: false, type: 'string', des: '投票缩略图：https://dn-mdpic.qbox.me/VoteDoc/pic/201606/03/mdMImCeKkCWLkvT_2027623769.png[Option]' }
                    ]
                },
                get_post_select_groups: {
                    name: '动态发布可选群组的范围',
                    docUrl: "",
                    url: '/post/get_post_select_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                }
            }
        },
        task: {
            v1: {
                "add_an_invited_member_to_a_task": {
                    "name": "向任务添加一个被邀请的用户",
                    "docUrl": "",
                    "url": "/task/add_an_invited_member_to_a_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"},
                        {"key": "invited_member_account", "isMust": true, "type": "string", "des": "被邀请的用户Email或者电话号码"},
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"},
                        {"key": "project_id", "isMust": false, "type": "string", "des": "不填为自由网络"}
                    ]
                },
                "add_members_to_a_task": {
                    "name": "向任务添加多个用户",
                    "docUrl": "",
                    "url": "/task/add_members_to_a_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"},
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"},
                        {"key": "account_ids", "isMust": true, "type": "string", "des": "账户Id，用英文逗号隔开！"},
                        {"key": "project_id", "isMust": false, "type": "string", "des": "不填为自由网络"}
                    ]
                },
                "add_a_comment_on_folder": {
                    "name": "创建项目",
                    "docUrl": "/doc/task/add_a_comment_on_folder.html",
                    "url": "/task/add_a_comment_on_folder",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"},
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目id"},
                        {"key": "has_attachment", "isMust": false, "type": "bool", "des": "是否有attachment, 默认false"},
                        {"key": "comment_id_to_reply", "isMust": false, "type": "string", "des": "回复的comment填写comment id"},
                        {"key": "account_id_to_reply", "isMust": false, "type": "string", "des": "回复的comment时填写被回复的account id"},
                        {"key": "message", "isMust": true, "type": "string", "des": "comment内容"},
                        {"key": "attachments", "isMust": false, "type": "string", "des": "参看[{'fileID':'o_1aj15jdgj16aj1811180121n1hukk','fileSize':105828,'serverName':'https://dn-mdoc.qbox.me/','filePath':'doc/201605/','fileName':'gqNvxiOMGJpcBAk_553513842','fileExt':'.txt','originalFileName':'new 3','key':'doc/201605/gqNvxiOMGJpcBAk_553513842.txt','allowDown':true,'docVersionID':'','oldOriginalFileName':'new 3'}] "},
                        {"key": "project_id", "isMust": false, "type": "string", "des": "不填为自由网络"}
                    ]
                },
                "add_folder": {
                    "name": "创建项目",
                    "docUrl": "/doc/task/add_folder.html",
                    "url": "/task/add_folder",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"},
                        {"key": "folder_name", "isMust": true, "type": "string", "des": "项目名称"},
                        {"key": "charge_user", "isMust": false, "type": "string", "des": "项目负责人 默认当前登录用户"},
                        {"key": "visibility", "isMust": false, "type": "int", "des": "项目可见性 0私密 1公开仅群组 2全公司(默认0)"},
                        {"key": "groups", "isMust": false, "type": "string", "des": "当项目可见性为公开群组时群组ID（多个群组已，相隔）"},
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"}
                    ]
                },
                "add_folder_file": {
                    "name": "创建项目文件夹",
                    "docUrl": "/doc/task/add_folder_file.html",
                    "url": "/task/add_folder_file",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_file_name", "isMust": true, "type": "string", "des": "项目文件夹名称"            },
                        {"key": "folder_file_sort", "isMust": false, "type": "int", "des": "项目文件夹序号(默认第一个)"            },
                        {"key": "folders", "isMust": true, "type": "string", "des": "放入项目文件夹的项目ID（多个，相隔）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "add_folder_member": {
                    "name": "新增项目成员",
                    "docUrl": "/doc/task/add_folder_member.html",
                    "url": "/task/add_folder_member",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "members", "isMust": true, "type": "string", "des": "成员ID（多个，相隔）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "add_folder_stage": {
                    "name": "创建项目阶段",
                    "docUrl": "/doc/task/add_folder_stage.html",
                    "url": "/task/add_folder_stage",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "folder_stage_name", "isMust": true, "type": "string", "des": "项目阶段名字"            },
                        {"key": "sort", "isMust": false, "type": "int", "des": "阶段次序（默认排在第一个）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"           }
                    ]
                },
                "add_task": {
                    "name": "创建一个任务",
                    "docUrl": "/doc/task/add_task.html",
                    "url": "/task/add_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_name", "isMust": true, "type": "string", "des": "任务名称"            },
                        {"key": "parent_id", "isMust": false, "type": "string", "des": "母任务ID"            },
                        {"key": "describe", "isMust": false, "type": "string", "des": "任务描述"            },
                        {"key": "dead_time", "isMust": false, "type": "string", "des": "任务截止日期，yyyy-MM-dd形式", "isDate": true},
                        {"key": "charge_user", "isMust": false, "type": "string", "des": "指定的任务负责人"            },
                        {"key": "members", "isMust": false, "type": "string", "des": "指定的任务成员 (多个成员用逗号隔开)"            },
                        {"key": "folder_id", "isMust": false, "type": "string", "des": "指定的隶属项目"            },
                        {"key": "color", "isMust": false, "type": "int", "des": "任务颜色 默认0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色"            },
                        {"key": "post_id", "isMust": false, "type": "string", "des": "动态ID（创建任务时，如果需要某个动态的附件添加到任务中必传）"            },
                        {"key": "folder_stage_id", "isMust": false, "type": "string", "des": "指定的隶属项目下的阶段ID"            },
                        {"key": "is_star", "isMust": false, "type": "bool", "des": "是否给任务标星（默认：0：否，1：是）"            },
                        {"key": "groups", "isMust": false, "type": "string", "des": "指定任务群组"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "add_task_topic": {
                    "name": "增加一条评论",
                    "docUrl": "/doc/task/add_task_topic.html",
                    "url": "/task/add_task_topic",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "message", "isMust": false, "type": "string", "des": "评论内容"            },
                        {"key": "reply_topic_id", "isMust": false, "type": "string", "des": "回复哪条评论的ID"            },
                        {"key": "attachments", "isMust": false, "type": "string", "des": "附件JSON字符串，请参照：{'Value':[{'OriginalFileName':'原文件名','FileName':'新文件名','FilePath':'文件路径','FileSize':大小(int),'AttachmentType':附件类型}}]} 文件类型： Other = 0, Picture = 1, Document = 2, Compress = 3"            }
                    ]
                },
                "apply_folder_member": {
                    "name": "申请成为项目成员",
                    "docUrl": "/doc/task/apply_folder_member.html",
                    "url": "/task/apply_folder_member",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "apply_info", "isMust": true, "type": "string", "des": "申请成为成员的理由"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "apply_for_joining_a_task": {
                    "name": "申请成为任务成员",
                    "docUrl": "",
                    "url": "/task/apply_for_joining_a_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            }
                    ]
                },
                "delete_folder": {
                    "name": "删除项目",
                    "docUrl": "/doc/task/delete_folder.html",
                    "url": "/task/delete_folder",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "remove_tasks", "isMust": false, "type": "bool", "des": "是否删除其下的任务"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "delete_folder_file": {
                    "name": "删除项目文件夹",
                    "docUrl": "/doc/task/delete_folder_file.html",
                    "url": "/task/delete_folder_file",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_file_id", "isMust": true, "type": "string", "des": "项目文件夹ID"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "delete_folder_members": {
                    "name": "移除项目成员",
                    "docUrl": "/doc/task/delete_folder_members.html",
                    "url": "/task/delete_folder_members",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "members", "isMust": false, "type": "string", "des": "成员ID（多个，相隔）为空默认退出"            },
                        {"key": "removed_from_tasks", "isMust": false, "type": "bool", "des": "是否同时退出项目下的任务（默认false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "delete_folder_stage": {
                    "name": "删除项目阶段",
                    "docUrl": "/doc/task/delete_folder_stage.html",
                    "url": "/task/delete_folder_stage",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "folder_stage_id", "isMust": true, "type": "string", "des": "项目阶段ID"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "delete_task": {
                    "name": "删除任务",
                    "docUrl": "/doc/task/delete_task.html",
                    "url": "/task/delete_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "is_subtask", "isMust": false, "type": "bool", "des": "是否同时删除子任务"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "delete_task_topic": {
                    "name": "删除任务评论",
                    "docUrl": "/doc/task/delete_task_topic.html",
                    "url": "/task/delete_task_topic",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "topic_id", "isMust": true, "type": "string", "des": "任务评论ID"            },
                        {"key": "delete_file", "isMust": false, "type": "bool", "des": "是否同时删除文件（默认为false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "duplicate_folder": {
                    "name": "复制项目",
                    "docUrl": "/doc/task/duplicate_folder.html",
                    "url": "/task/duplicate_folder",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "is_stage", "isMust": false, "type": "bool", "des": "是否复制项目阶段"            },
                        {"key": "is_describe", "isMust": false, "type": "bool", "des": "是否复制项目描述"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_archived_folders": {
                    "name": "获取个人或网络下归档项目文件夹下项目",
                    "docUrl": "/doc/task/get_archived_folders.html",
                    "url": "/task/get_archived_folders",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络， 不支持all"            }
                    ]
                },
                "get_direct_children_tasks": {
                    "name": "获取某个任务下的直接子任务，返回值文档请参考get_task_list",
                    "docUrl": "/doc/task/get_direct_children_tasks.html",
                    "url": "/task/get_direct_children_tasks",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络，不支持all"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            }
                    ]
                },
                "get_first_level_folders_and_files_by_project_id": {
                    "name": "获取个人或网络下文件夹和初层项目列表",
                    "docUrl": "/doc/task/get_first_level_folders_and_files_by_project_id.html",
                    "url": "/task/get_first_level_folders_and_files_by_project_id",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_folder_logs": {
                    "name": "获取项目下的日志",
                    "docUrl": "/doc/task/get_folder_logs.html",
                    "url": "/task/get_folder_logs",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "分页获取的页码, 从1开始"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "该页面有多少项"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "在那个网络下，不填为个人网络"            }
                    ]
                },
                "get_folder_stages": {
                    "name": "获取项目下的阶段",
                    "docUrl": "/doc/task/get_folder_stages.html",
                    "url": "/task/get_folder_stages",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_folder_task_list": {
                    "name": "获取项目下任务列表",
                    "docUrl": "/doc/task/get_folder_task_list.html",
                    "url": "/task/get_folder_task_list",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目id"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            },
                        {"key": "page_index", "isMust": false, "type": "int64", "des": "指定当前的页码（不指定页码返回所有）"            },
                        {"key": "page_size", "isMust": false, "type": "int", "des": "指定要返回的记录条数(默认值20，最大值100)"            },
                        {"key": "stage_id", "isMust": false, "type": "string", "des": "项目阶段ID"            },
                        {"key": "color", "isMust": false, "type": "int", "des": "任务颜色 默认-1：全部；0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色"            },
                        {"key": "status", "isMust": false, "type": "int", "des": "筛选任务状态 默认0：进行中；1：已完成；-1：全部"            },
                        {"key": "tags", "isMust": false, "type": "string", "des": "过滤任务标签 多个用,隔开"            },
                        {"key": "other", "isMust": false, "type": "string", "des": "指定用户编号 查看其他同事的任务列表"            },
                        {"key": "classifys", "isMust": false, "type": "string", "des": "不过滤 -1 现在要做 Now = 1，将要做 Will = 2, 以后再说 After = 3"            },
                        {"key": "sort", "isMust": false, "type": "int", "des": "任务排序 1：按首字母;2:按到期日期;3:按任务创建时间；4:按项目(查询结果结构有变化);5:任务负责人；7：按颜色；8:完成时间；9:进行中;10:最近更新" },
                        {"key": "keywords", "isMust": false, "type": "string", "des": "关键词模糊搜索"            },
						{"key": "is_star", "isMust": false, "type": "bool", "des": "过滤是否标星，true为过滤"            }
                    ]
                },
                "get_folders_by_fileID": {
                    "name": "获取项目文件夹下的项目列表",
                    "docUrl": "/doc/task/get_folders_by_fileID.html",
                    "url": "/task/get_folders_by_fileID",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_file_id", "isMust": true, "type": "string", "des": "指定的文件夹id"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_hidden_folders": {
                    "name": "获取个人或网络下隐藏项目文件夹下项目",
                    "docUrl": "/doc/task/get_Hidden_folders.html",
                    "url": "/task/get_Hidden_folders",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络， 不支持all"            }
                    ]
                },
                "get_sticky_folders": {
                    "name": "获取用户置顶项目",
                    "docUrl": "/doc/task/get_sticky_folders.html",
                    "url": "/task/get_sticky_folders",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            }
                    ]
                },
                "get_subordinates": {
                    "name": "获取用户置顶项目",
                    "docUrl": "/doc/task/get_subordinates.html",
                    "url": "/task/get_subordinates",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络, 不支持传入all"            }
                    ]
                },
                "get_task_attachments": {
                    "name": "获取任务的所有附件信息",
                    "docUrl": "/doc/task/get_task_attachments.html",
                    "url": "/task/get_task_attachments",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            }
                    ]
                },
                "get_comments_by_folder_id": {
                    "name": "获取项目上的会话",
                    "docUrl": "/doc/task/get_comments_by_folder_id.html",
                    "url": "/task/get_comments_by_folder_id",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "only_include_mine", "isMust": false, "type": "bool", "des": "是否只包含我的帖子，默认为false"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "不填为自由网络"            },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "分页的index"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "分页的页面大小"            }
                    ]
                },
                "get_folder_details_by_folder_id": {
                    "name": "根据项目id获取项目详情",
                    "docUrl": "/doc/task/get_folder_details_by_folder_id.html",
                    "url": "/task/get_folder_details_by_folder_id",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            }
                    ]
                },
                "get_task_detail": {
                    "name": "获取任务详情",
                    "docUrl": "/doc/task/get_task_detail.html",
                    "url": "/task/get_task_detail",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_task_list": {
                    "name": "获取任务列表",
                    "docUrl": "/doc/task/get_task_list.html",
                    "url": "/task/get_task_list",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            },
                        {"key": "page_index", "isMust": false, "type": "int64", "des": "指定当前的页码（不指定页码返回所有）"            },
                        {"key": "page_size", "isMust": false, "type": "int", "des": "指定要返回的记录条数(默认值20，最大值100)"            },
                        {"key": "folder_id", "isMust": false, "type": "string", "des": "项目ID 没有项目要传入Null"            },
                        {"key": "stage_id", "isMust": false, "type": "string", "des": "项目阶段ID"            },
                        {"key": "filter_type", "isMust": false, "type": "int", "des": "过滤类型 默认1：我参与的任务；2：我负责的任务；3：我托付的任务；6：全部任务  7：查看同事(与我协作的任务) 9： 我的任务"            },
                        {"key": "color", "isMust": false, "type": "int", "des": "任务颜色 默认-1：全部；0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色"            },
                        {"key": "status", "isMust": false, "type": "int", "des": "筛选任务状态 默认0：进行中；1：已完成；-1：全部"            },
                        {"key": "tags", "isMust": false, "type": "string", "des": "过滤任务标签 多个用,隔开"            },
                        {"key": "other", "isMust": false, "type": "string", "des": "指定用户编号 查看其他同事的任务列表"            },
                        {"key": "classifys", "isMust": false, "type": "string", "des": "不过滤 -1 现在要做 Now = 1，将要做 Will = 2, 以后再说 After = 3"            },
                        {"key": "sort", "isMust": false, "type": "int", "des": "任务排序 1：按首字母;2:按到期日期;3:按任务创建时间；4:按项目(查询结果结构有变化);5:任务负责人；7：按颜色；8:完成时间；9:进行中;10:最近更新"            },
                        {"key": "complete_time", "isMust": false, "type": "string", "des": "查询的时间起始点，当sort为8时(查询时间到当前的) 格式(2015-06-10)"            },
                        {"key": "keywords", "isMust": false, "type": "string", "des": "关键词模糊搜索"            },
						{"key": "is_star", "isMust": false, "type": "bool", "des": "过滤是否标星，true为过滤"            }
                    ]
                },
                "get_task_Log": {
                    "name": "获取任务日志",
                    "docUrl": "/doc/task/get_task_Log.html",
                    "url": "/task/get_task_Log",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "指定当前的页码, 从第一页开始"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "指定要返回的记录条数"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            }
                    ]
                },
                "get_task_topics": {
                    "name": "获取任务评论",
                    "docUrl": "/doc/task/get_task_topics.html",
                    "url": "/task/get_task_topics",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "指定当前的页码, 从1开始"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "指定要返回的记录条数"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_tasks_count": {
                    "name": "根据传入的筛选条件查询任务的数量",
                    "docUrl": "/doc/task/get_tasks_count.html",
                    "url": "/task/get_tasks_count",
                    "requestMode": "Get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "status", "isMust": true, "type": "int", "des": "与任务是否完成相关的条件  All = -1 所有任务, Incomplete = 0 未完成, Complete = 1 已经完成"            },
                        {"key": "filter_type", "isMust": true, "type": "int", "des": "与协作相关的条件 Participate = 1 我参与的 , Charge = 2 我负责, Release = 3（我托付的）, AllTask = 6 所有人物, WithMe = 7 与我协作的, MeTask = 9 包含 我参与、我负责、我托付 "            },
                        {"key": "classify", "isMust": true, "type": "int", "des": "与任务调度有关的条件 All = -1 不进行过滤，Now = 1 今天要做的， Will = 2 最近要做, After = 3 以后再说"            },
                        {"key": "color", "isMust": true, "type": "int", "des": "任务颜色 All = -1 全部颜色 不进行过滤，None = 0 无颜色， Purple = 1, Blue = 2, Yellow = 3, Orange = 4, Red = 5"            },
                        {"key": "star", "isMust": false, "type": "bool", "des": "是否有星标，为false则包含所有类别"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_orphaned_tasks": {
                    "name": "获取任务列表",
                    "docUrl": "/doc/task/get_orphaned_tasks.html",
                    "url": "/task/get_orphaned_tasks",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            },
                        {"key": "page_index", "isMust": false, "type": "int64", "des": "指定当前的页码（不指定页码返回所有）"            },
                        {"key": "page_size", "isMust": false, "type": "int", "des": "指定要返回的记录条数(默认值20，最大值100)"            },
                        {"key": "stage_id", "isMust": false, "type": "string", "des": "项目阶段ID"            },
                        {"key": "color", "isMust": false, "type": "int", "des": "任务颜色 默认-1：全部；0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色"            },
                        {"key": "status", "isMust": false, "type": "int", "des": "筛选任务状态 默认0：进行中；1：已完成；-1：全部"            },
                        {"key": "tags", "isMust": false, "type": "string", "des": "过滤任务标签 多个用,隔开"            },
                        {"key": "sort", "isMust": false, "type": "int", "des": "任务排序 1：按首字母;2:按到期日期;3:按任务创建时间；4:按项目(查询结果结构有变化);5:任务负责人；7：按颜色；8:完成时间；9:进行中;10:最近更新"            }
                    ]
                },
                "get_teamwork_member": {
                    "name": "获取协作成员",
                    "docUrl": "/doc/task/get_teamwork_member.html",
                    "url": "/task/get_teamwork_member",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络, 不支持传入all"            }
                    ]
                },
                "move_a_folder_into_a_file": {
                    "name": "将项目移入一个项目文件夹",
                    "docUrl": "/doc/task/move_a_folder_into_a_file.html",
                    "url": "/task/move_a_folder_into_a_file",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "file_id", "isMust": true, "type": "string", "des": "文件夹ID"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "网络id, 不填为个人自由网络"            }
                    ]
                },
                "remove_a_comment_on_folder": {
                    "name": "删除一个项目上的comment",
                    "docUrl": "",
                    "url": "/task/remove_a_comment_on_folder",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络, 不支持传入all"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目id"            },
                        {"key": "comment_id", "isMust": true, "type": "string", "des": "comment id"            }
                    ]
                },
                "remove_a_member_from_a_task": {
                    "name": "在任务上删除一个member",
                    "docUrl": "",
                    "url": "/task/remove_a_member_from_a_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络, 不支持传入all"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "account_id", "isMust": true, "type": "string", "des": "member的id"            }
                    ]
                },
                "search_folders": {
                    "name": "通过关键词搜索项目",
                    "docUrl": "/doc/task/search_folders.html",
                    "url": "/task/Search_Folders",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "keyword", "isMust": true, "type": "string", "des": "要搜索的关键词"            },
                        {"key": "account_id_other", "isMust": false, "type": "string", "des": "查询他人的任务, 他人ID"            }
                    ]
                },
                "update_folder_archived_property": {
                    "name": "修改项目是否归档",
                    "docUrl": "/doc/task/update_folder_archived_property.html",
                    "url": "/task/update_folder_archived_property",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "is_archived", "isMust": false, "type": "bool", "des": "是否归档默认false"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_detail": {
                    "name": "修改项目基本属性(负责人,项目名,项目描述)全部修改或多选一",
                    "docUrl": "/doc/task/update_folder_detail.html",
                    "url": "/task/update_folder_detail",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "charge_user", "isMust": false, "type": "string", "des": "负责人ID"            },
                        {"key": "folder_name", "isMust": false, "type": "string", "des": "项目名"            },
                        {"key": "describe", "isMust": false, "type": "string", "des": "项目描述"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_file": {
                    "name": "修改项目文件夹",
                    "docUrl": "/doc/task/update_folder_file.html",
                    "url": "/task/update_folder_file",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_file_id", "isMust": true, "type": "string", "des": "项目文件夹ID"            },
                        {"key": "folder_file_sort", "isMust": false, "type": "int", "des": "项目文件夹序号"            },
                        {"key": "folder_file_name", "isMust": false, "type": "string", "des": "项目文件夹名称"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_isHidden_property": {
                    "name": "项目隐藏",
                    "docUrl": "",
                    "url": "/task/update_folder_isHidden_property",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "is_hidden", "isMust": false, "type": "bool", "des": "是否隐藏(默认false)"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_isTop_property": {
                    "name": "项目置顶",
                    "docUrl": "",
                    "url": "/task/update_folder_isTop_property",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "is_top", "isMust": false, "type": "bool", "des": "是否置顶(默认false)"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_member_admin": {
                    "name": "设置项目成员为管理员",
                    "docUrl": "/doc/task/update_folder_member_admin.html",
                    "url": "/task/update_folder_member_admin",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "change_user", "isMust": true, "type": "string", "des": "项目负责人"            },
                        {"key": "is_admin", "isMust": false, "type": "bool", "des": "是否设置为管理员(默认false)"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_member_star": {
                    "name": "项目标星",
                    "docUrl": "/doc/task/update_folder_member_star.html",
                    "url": "/task/update_folder_member_star",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "is_star", "isMust": false, "type": "bool", "des": "是否标志为star（默认false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_stage": {
                    "name": "修改项目阶段顺序或名字",
                    "docUrl": "/doc/task/update_folder_stage.html",
                    "url": "/task/update_folder_stage",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "folder_stage_id", "isMust": true, "type": "string", "des": "项目阶段ID"            },
                        {"key": "folder_stage_name", "isMust": false, "type": "string", "des": "新项目阶段名字"            },
                        {"key": "folder_stage_sort", "isMust": false, "type": "string", "des": "新项目阶段顺序"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_visibility_property": {
                    "name": "修改项目可见性",
                    "docUrl": "/doc/task/update_folder_visibility_property.html",
                    "url": "/task/Update_Folder_Visibility_Property",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "visibility", "isMust": true, "type": "int", "des": "0:私密成员可见，1：群组公开,2全公司公开"            },
                        {"key": "groups", "isMust": false, "type": "string", "des": "群组公开时群组ID（多个，相隔）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_joining_status_on_task": {
                    "name": "修改当前用户加入一个Task的状态",
                    "docUrl": "",
                    "url": "/task/update_joining_status_on_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "joining_state", "isMust": true, "type": "int", "des": "0:None 无申请，1：NoneToMember 从非成员申请成为成员, 2: BeenRefusedToMember 被拒绝成为成员，拒绝填写2，同意填写0"            }
                    ]
                },
                "update_task_charger_property": {
                    "name": "更新任务负责人",
                    "docUrl": "/doc/task/update_task_charger_property.html",
                    "url": "/task/update_task_charger_property",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "new_charger", "isMust": true, "type": "string", "des": "新负责人的ID"            }
                    ]
                },
                "update_task_deadline": {
                    "name": "更新任务截止日期",
                    "docUrl": "/doc/task/update_task_deadline.html",
                    "url": "/task/update_task_deadline",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "deadline", "isMust": true, "type": "string", "des": "截止日期"            },
                        {"key": "include_sub_tasks", "isMust": true, "type": "bool", "des": "是否包含子任务"            }
                    ]
                },
                "update_task_description": {
                    "name": "/doc/task/update_task_description.html",
                    "url": "/task/update_task_description",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "description", "isMust": true, "type": "string", "des": "任务描述"            }
                    ]
                },
                "update_task_folderID": {
                    "name": "更新任务所在的项目",
                    "docUrl": "/doc/task/update_task_folderID.html",
                    "url": "/task/update_task_folderID",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            }
                    ]
                },
                "update_task_locked": {
                    "name": "是否锁定任务",
                    "docUrl": "/doc/task/update_task_locked.html",
                    "url": "/task/update_task_locked",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "is_lock", "isMust": false, "type": "bool", "des": "是否锁定任务（默认false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_member_classify": {
                    "name": "修改任务分类（待分配，现在要做等）",
                    "docUrl": "/doc/task/update_task_member_classify.html",
                    "url": "/task/update_task_member_classify",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "classify", "isMust": true, "type": "int", "des": "1：现在要做，2：将要做，3：以后再说"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_member_color": {
                    "name": "修改任务颜色",
                    "docUrl": "/doc/task/update_task_member_color.html",
                    "url": "/task/update_task_member_color",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "color", "isMust": true, "type": "int", "des": "任务颜色 默认0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_member_notice": {
                    "name": "修改任务是否接收提醒",
                    "docUrl": "/doc/task/update_task_member_notice.html",
                    "url": "/task/update_task_member_notice",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "is_notice", "isMust": true, "type": "bool", "des": "是否接收提醒（默认false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_member_star": {
                    "name": "任务标星",
                    "docUrl": "/doc/task/update_task_member_star.html",
                    "url": "/task/update_task_member_star",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"},
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "is_star", "isMust": true, "type": "bool", "des": "是否标星（默认false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_name": {
                    "name": "更新任务名称",
                    "docUrl": "/doc/task/update_task_name.html",
                    "url": "/task/update_task_name",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "task_name", "isMust": true, "type": "string", "des": "任务名称"            }
                    ]
                },
                "update_task_parentID": {
                    "name": "更新母任务",
                    "docUrl": "/doc/task/update_task_parentID.html",
                    "url": "/task/update_task_parentID",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "parent_id", "isMust": true, "type": "string", "des": "母任务ID"            }
                    ]
                },
                "update_task_stage": {
                    "name": "修改任务所处项目阶段",
                    "docUrl": "/doc/task/update_task_stage.html",
                    "url": "/task/update_task_stage",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "folder_stage_id", "isMust": true, "type": "string", "des": "项目阶段ID"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_status": {
                    "name": "是否标记任务完成",
                    "docUrl": "/doc/task/update_task_status.html",
                    "url": "/task/update_task_status",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"           },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "status", "isMust": true, "type": "int", "des": "任务完成状态（0：未完成，1：完成）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                }
            }
        },
        group: {
            v1: {
                get_group_detail: {
                    name: '根据群组编号获取群组的基本资料',
                    docUrl: "/doc/group/group_detail.html",
                    url: '/group/get_group_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                get_my_created_groups: {
                    name: '获取用户创建的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_my_created_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '指定用户编号，获取此用户创建的群组，默认为当前授权用户' },
                        { key: 'project_id', isMust: false, type: 'string', des: '哪个网络（默认个人自由网络）' }
                    ]
                },
                get_project_groups: {
                    name: '获取公司群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_project_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' },
                        { key: 'sort_group', isMust: false, type: 'int', des: '群组创建时间=0,群组类型=1,Post数量=2,成员数量=3,按群组名拼音=4,按群组公共=5,当前用户发布的Post数量=6,按创建者名拼音=7,官方群组=8,群组内用户名称=9,群组管理员=10,群组状态=11,群组成员创建时间=12' },
                        { key: 'sort_type', isMust: false, type: 'bool', des: 'false 降序true升序' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_account_joined_groups: {
                    name: '获取用户加入的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_account_joined_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '指定用户编号，获取此用户创建的群组，默认为当前授权用户' },
                        { key: 'project_id', isMust: false, type: 'string', des: '要获取的网络ID，不填默认个人网络' }
                    ]
                },
                get_group_members: {
                    name: '获取群组成员信息',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_group_members',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '显示数量' }
                    ]
                },
                get_project_group_members: {
                    name: '获取网络群组的内部成员信息',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_project_group_members',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '显示数量' }
                    ]
                },
                get_unaudited_members: {
                    name: '获取群组待审批成员信息',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_unaudited_members',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                create_group: {
                    name: '创建一个新的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/create_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_name', isMust: true, type: 'string', des: '要创建的群组的名称' },
                        { key: 'about', isMust: false, type: 'string', des: '群组的简介' },
                        { key: 'is_post', isMust: false, type: 'bool', des: '是否作为动态分享群组(false：否，true：是)' },
                        { key: 'project_id', isMust: false, type: 'string', des: '群组网络' },
                        { key: 'avatar', isMust: false, type: 'string', des: '群组头像' }
                    ]
                },
                edit_group: {
                    name: '编辑群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/edit_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组id' },
                        { key: 'group_name', isMust: true, type: 'string', des: '要创建的群组的名称' },
                        { key: 'about', isMust: false, type: 'string', des: '群组的简介' },
                        { key: 'is_approval', isMust: false, type: 'bool', des: '用户加入是否审批 0 否 1 是' },
                        { key: 'avatar', isMust: false, type: 'string', des: '群组头像' }
                    ]
                },
                exit_group: {
                    name: '群组操作退出',
                    docUrl: {type: '', url: ''},
                    url: '/group/exit_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'operation_type', isMust: true, type: 'int', des: '操作类型 0/关闭 2/解散 3/退出' }
                    ]
                },
                add_group_admin: {
                    name: '添加群组管理员(仅限群组管理员和网络管理员)',
                    docUrl: {type: '', url: ''},
                    url: '/group/add_group_admin',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'account_id', isMust: true, type: 'string', des: '用户编号' }
                    ]
                },
                remove_group_user_or_admin: {
                    name: '移除群组用户/管理员(仅限群组管理员和网络管理员)',
                    docUrl: {type: '', url: ''},
                    url: '/group/remove_group_user_or_admin',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' }
                    ]
                },
                remove_group_admin_role: {
                    name: '移除管理员权限',
                    docUrl: "",
                    url: '/group/remove_group_admin_role',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' }
                    ]
                },
                pass_or_refuse_user_join_group: {
                    name: '同意/拒绝 用户加入群组(仅限群组管理员)',
                    docUrl: {type: '', url: ''},
                    url: '/group/pass_or_refuse_user_join_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'account_ids', isMust: true, type: 'string', des: '待审批用户编号 多个用,号隔开' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '同意1/拒绝0' }
                    ]
                },
                chat_to_post_group: {
                    name: '聊天群组转永久动态群组',
                    docUrl: {type: '', url: ''},
                    url: '/group/chat_to_post_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                apply_join_group: {
                    name: '申请加入群组',
                    docUrl: {type: '', url: ''},
                    url: '/group/apply_join_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                }
            }
        },
        user: {
            v1: {
                get_new_friends: {
                    name: '新的朋友',
                    docUrl: '/doc/user/friend.html',
                    url: '/user/get_new_friends',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_my_friends: {
                    name: '我的联系人',
                    docUrl: '/doc/user/friend.html',
                    url: '/user/get_my_friends',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'timestamp', isMust: false, type: 'string', des: '上次拉取列表返回的时间戳' }
                    ]
                },
                get_mentioned_users: {
                    name: '获取我的最常协作人(不区分网络)',
                    docUrl: '/doc/user/account_base.html',
                    url: '/user/get_mentioned_users',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_account_byphone: {
                    name: '根据手机号获取是否是明道用户',
                    docUrl: '',
                    url: '/user/get_account_byphone',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'phone', isMust: false, type: 'string', des: '手机号码' },
                        { key: 'email', isMust: false, type: 'string', des: '邮箱(跟手机号2选1进行查询)' }
                    ]
                },
                get_project_users: {
                    name: '获取通讯录',
                    docUrl: '/doc/user/account_base.html',
                    url: '/user/get_project_users',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' },
                        { key: 'department', isMust: false, type: 'string', des: '部门名称' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'timestamp', isMust: false, type: 'string', des: '上次拉取列表返回的时间戳' }
                    ]
                },
                get_user_card: {
                    name: '个人卡片信息',
                    docUrl: '/doc/user/user_card.html',
                    url: '/user/get_user_card',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '用户账号ID' }
                    ]
                },
                add_friend: {
                    name: '请求添加好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/add_friend',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '请求加为好友的用户账号ID' },
                        { key: 'message', isMust: true, type: 'string', des: '请求描述' }
                    ]
                },
                update_friend_status: {
                    name: '同意，拒绝，忽略请求添加好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/update_friend_status',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '操作的用户账号ID' },
                        { key: 'status', isMust: true, type: 'int', des: '同意=1,忽略=2,拒绝=3' }
                    ]
                },
                remove_friend: {
                    name: '移除好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/remove_friend',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '需要移除的用户账号ID' }
                    ]
                },
                shield_friend: {
                    name: '屏蔽/取消屏蔽 好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/shield_friend',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '需要移除的用户账号ID' },
                        { key: 'is_shield', isMust: true, type: 'bool', des: '是否屏蔽好友' }
                    ]
                },
                add_mobile_address: {
                    name: '添加用户手机通讯录',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/add_mobile_address',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'mobiles', isMust: true, type: 'string', des: '手机号码数组[1300000000,13000000000]序列化' }
                    ]
                },
                get_mobile_address_recommend: {
                    name: '获取手机通讯录推荐好友列表',
                    docUrl: '/doc/user/account_base.html',
                    url: '/user/get_mobile_address_recommend',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_user_subordinate: {
                    name: '获取下属用户列表',
                    docUrl: '/doc/user/account_base.html',
                    url: '/user/get_user_subordinate',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_users_bykeywords: {
                    name: '联系人搜索（范围个人通讯录和全部企业网络通讯录）包括手机号邮箱',
                    docUrl: '/doc/user/keywords.html',
                    url: '/user/get_users_bykeywords',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: true, type: 'string', des: '搜索关键字' }
                    ]
                }
            }
        },
        company: {
            v1: {
                get_project_list: {
                    name: '获取我的网络列表',
                    docUrl: '/doc/project/project_base.html',
                    url: '/company/get_project_list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_project_departments: {
                    name: '获取网络部门列表',
                    docUrl: {type: 'string', url: ''},
                    url: '/company/get_project_departments',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                }
            }
        },
        calendar: {
            v1: {
                get_calendar_to_do: {
                    name: '获取当前登录用户待办日程列表',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_calendar_to_do',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'rsscal', isMust: false, type: 'bool', des: '是否订阅待办日程。0表不订阅；以列表形式返回，1表示订阅，直接返回订阅链接url'},
                        { key: 'group_time', isMust: false, type: 'bool', des: '是否以日程的起始时间分组显示。0表不；以列表形式返回，1表示分组，以分组列表显示' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '用户编号 查看其他同事的日程，多个以逗号相隔' },
                        { key: 'is_work_calendar', isMust: false, type: 'bool', des: '是否查看工作日程' },
                        { key: 'is_task_calendar', isMust: false, type: 'bool', des: '是否查看任务日程' },
                        { key: 'is_private_calendar', isMust: false, type: 'bool', des: '是否查看私密日程' },
                        { key: 'categorys', isMust: false, type: 'string', des: '用户日程分类，多个以逗号相隔' }
                    ]
                },
                get_calendar_day_week_month: {
                    name: '获取当前登录用户某日/某周/某月 日程列表',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_calendar_day_week_month',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'date', isMust: false, type: 'string', des: '日期字符串。默认值为今天。如：2013-05-05。' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '用户编号 查看其他同事的日程，多个以逗号相隔' },
                        { key: 'week', isMust: false, type: 'string', des: '某年第几周数。默认值为当前日期周数。' },
                        { key: 'year', isMust: false, type: 'string', des: '日期年数字。默认值为当前年。如：2013。' },
                        { key: 'is_work_calendar', isMust: false, type: 'bool', des: '是否查看工作日程' },
                        { key: 'is_task_calendar', isMust: false, type: 'bool', des: '是否查看任务日程' },
                        { key: 'is_private_calendar', isMust: false, type: 'bool', des: '是否查看私密日程' },
                        { key: 'categorys', isMust: false, type: 'string', des: '用户日程分类，多个以逗号相隔' }
                    ]
                },
                get_calendar_detail: {
                    name: '日程详情',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_calendar_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程编号' }
                    ]
                },
                get_invite_calendars: {
                    name: '获取登录用户未确认日程列表',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_invite_calendars',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'string', des: '指定要返回的页数' },
                        { key: 'pagesize', isMust: false, type: 'string', des: '指定要返回的记录条数' }
                    ]
                },
                get_user_all_cal_categories: {
                    name: '获取用户所有分类',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_user_all_cal_categories',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_user_busy_calendar: {
                    name: '获取冲突日程',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_user_busy_calendar',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_start_time', isMust: false, type: 'string', des: '日程开始时间' },
                        { key: 'calendar_end_time', isMust: false, type: 'string', des: '日程结束时间' }
                    ]
                },
                create_calendar: {
                    name: '创建一个新的日程',
                    docUrl: {type: '', url: '/v1calendar_detail.html'},
                    url: '/calendar/create_calendar',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_name', isMust: true, type: 'string', des: '日程主题' },
                        { key: 'calendar_start_time', isMust: true, type: 'string', des: '日程开始时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'calendar_end_time', isMust: true, type: 'string', des: '日程结束时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'is_all_day', isMust: false, type: 'bool', des: '是否全天日程。0表示非全天，1表示全天 默认值0' },
                        { key: 'calendar_address', isMust: false, type: 'string', des: '日程地点' },
                        { key: 'calendar_description', isMust: false, type: 'string', des: '日程描述' },
                        { key: 'calendar_private', isMust: false, type: 'bool', des: '是否私人日程。1表示私人，0表示非私人 默认值0' },
                        { key: 'group_ids', isMust: false, type: 'string', des: '私有日程分享群组 分享多群组用,隔开' },
                        { key: 'calendar_member_ids', isMust: false, type: 'string', des: '指定的日程成员 (多个成员用逗号隔开)。注：明道用户' },
                        { key: 'calendar_member_emails', isMust: false, type: 'string', des: '指定的日程成员邮件 (多个成员用逗号隔开)。注：非明道用户' },
                        { key: 'is_recur', isMust: false, type: 'bool', des: '是否为重复日程. 1:是 0:不是 默认值0' },
                        { key: 'repeat_frequency', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值必填，频率 1 表示Daily; 2 表示Weekly; 3 表示Monthly; 4 表示Yearly' },
                        { key: 'repeat_interval', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值选填，重复间隔 默认值 1。' },
                        { key: 'repeat_week_day', isMust: false, type: 'string', des: '当 frequency=2 该值必填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用,隔开' },
                        { key: 'repeat_recur_count', isMust: false, type: 'int', des: '当 is_recur为1即为重复日程时该值选填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用|隔开' },
                        { key: 'until_date', isMust: false, type: 'string', des: '当 is_recur为1 该值选填，结束日期 如果recur_count为0且until_date为null,则为永久重复' },
                        { key: 'calendar_remind_type', isMust: false, type: 'int', des: '提醒类型' },
                        { key: 'calendar_remind_time', isMust: false, type: 'int', des: '提醒时间' },
                        { key: 'calendar_category_id', isMust: false, type: 'string', des: '日程分类id' }
                    ]
                },
                edit_calendar: {
                    name: '根据日程编号修改日程',
                    docUrl: {type: '', url: '/v1calendar_detail.html'},
                    url: '/calendar/edit_calendar',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程编号' },
                        { key: 'calendar_name', isMust: false, type: 'string', des: '日程主题' },
                        { key: 'calendar_start_time', isMust: false, type: 'string', des: '日程开始时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'calendar_end_time', isMust: false, type: 'string', des: '日程结束时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'is_all_day', isMust: false, type: 'bool', des: '是否全天日程。0表示非全天，1表示全天 默认值0' },
                        { key: 'calendar_address', isMust: false, type: 'string', des: '日程地点' },
                        { key: 'calendar_description', isMust: false, type: 'string', des: '日程描述' },
                        { key: 'calendar_private', isMust: false, type: 'bool', des: '是否私人日程。1表示私人，0表示非私人 默认值0' },
                        { key: 'group_ids', isMust: false, type: 'string', des: '私有日程分享群组 分享多群组用,隔开' },
                        { key: 'calendar_member_ids', isMust: false, type: 'string', des: '指定的日程成员 (多个成员用逗号隔开)。注：明道用户' },
                        { key: 'calendar_member_emails', isMust: false, type: 'string', des: '指定的日程成员邮件 (多个成员用逗号隔开)。注：非明道用户' },
                        { key: 'is_recur', isMust: false, type: 'bool', des: '是否为重复日程. 1:是 0:不是 默认值0' },
                        { key: 'repeat_frequency', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值必填，频率 1 表示Daily; 2 表示Weekly; 3 表示Monthly; 4 表示Yearly' },
                        { key: 'repeat_interval', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值选填，重复间隔 默认值 1。' },
                        { key: 'repeat_week_day', isMust: false, type: 'string', des: '当 frequency=2 该值必填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用,隔开' },
                        { key: 'repeat_recur_count', isMust: false, type: 'int', des: '当 is_recur为1即为重复日程时该值选填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用|隔开' },
                        { key: 'until_date', isMust: false, type: 'string', des: '当 is_recur为1 该值选填，结束日期 如果recur_count为0且until_date为null,则为永久重复' },
                        { key: 'calendar_remind_type', isMust: false, type: 'int', des: '提醒类型' },
                        { key: 'calendar_remind_time', isMust: false, type: 'int', des: '提醒时间' },
                        { key: 'calendar_category_id', isMust: false, type: 'int', des: '日程分类id' }
                    ]
                },
                join_or_deny_calendar: {
                    name: '确认/拒绝一个日程',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/join_or_deny_calendar',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'choose_type', isMust: true, type: 'int', des: 'join=1/ deny=2' }
                    ]
                },
                exit_calendar: {
                    name: '退出一个日程',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/exit_calendar',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程id' }
                    ]
                },
                reinvite_calendar_member: {
                    name: '重新邀请一个日程与会人员',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/reinvite_calendar_member',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'calendar_account_id', isMust: false, type: 'string', des: '邀请人id' },
                        { key: 'calendar_account_email', isMust: false, type: 'string', des: '邀请人邮箱' }
                    ]
                },
                delete_calendar: {
                    name: '删除日程',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/delete_calendar',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程id' }
                    ]
                },
                user_category_operate: {
                    name: '删除/添加/修改用户日程分类',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/user_category_operate',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: false, type: 'string', des: '日程id' },
                        { key: 'category_name', isMust: false, type: 'string', des: '分类名' },
                        { key: 'color', isMust: false, type: 'string', des: '分类颜色' },
                        { key: 'category_id', isMust: false, type: 'string', des: ' 用户日程分类id' },
                        { key: 'choose_type', isMust: true, type: 'string', des: '操作类型 删除=0/添加=1/修改=2' }
                    ]
                },
                update_calendar_remind: {
                    name: '更新日程提醒',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/update_calendar_remind',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'calendar_remind_time', isMust: false, type: 'int', des: '提醒时间' },
                        { key: 'calendar_remind_type', isMust: false, type: 'int', des: '提醒类型' }
                    ]
                }

            }
        },
        passport: {
            v1: {
                get_passport_detail: {
                    name: '当前登录用户基本信息',
                    docUrl: '/doc/passport/passport_detail.html',
                    url: '/passport/get_passport_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_passport_setting: {
                    name: '当前登录用户的设置信息',
                    docUrl: '/doc/passport/passport_detail.html',
                    url: '/passport/get_passport_setting',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_un_read_count: {
                    name: '获取当前登录用户的各种未读消息数量',
                    docUrl: '/doc/passport/passport_detail.html',
                    url: '/passport/get_un_read_count',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_common_category: {
                    name: '获取当前登录用户最常用的的前10个标签',
                    docUrl: '/doc/passport/passport_detail.html',
                    url: '/passport/get_common_category',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_user_card: {
                    name: '获取加入的网络单个企业名片',
                    docUrl: '/doc/passport/user_card.html',
                    url: '/passport/get_user_card',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' }
                    ]
                },
                update_user_card: {
                    name: '修改加入的网络单个企业名片',
                    docUrl: '/doc/passport/user_card.html',
                    url: '/passport/update_user_card',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要修改的网络ID' },
                        { key: 'company_name', isMust: true, type: 'string', des: '公司名' },
                        { key: 'department', isMust: true, type: 'string', des: '部门' },
                        { key: 'contact_phone', isMust: true, type: 'string', des: '工作座机号码' },
                        { key: 'work_site', isMust: true, type: 'string', des: '工作地' },
                        { key: 'job', isMust: true, type: 'string', des: '职业' },
                        { key: 'job_number', isMust: true, type: 'string', des: '工号' }
                    ]
                },
                update_passport_pwd: {
                    name: '修改当前登录用户密码',
                    docUrl: '',
                    url: '/passport/update_passport_pwd',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'old_pwd', isMust: true, type: 'string', des: '旧密码' },
                        { key: 'new_pwd', isMust: true, type: 'string', des: '新密码' },
                        { key: 'confirm_pwd', isMust: true, type: 'string', des: '确认新密码' }
                    ]
                }
            }
        },
        message: {
            v1: {
                get_message_list: {
                    name: '获取当前登录用户与其它单个用户的私人消息列表',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_message_list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '发送消息对象的用户编号' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码(以1开始，1代表第一页)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' }
                    ]
                },
                get_inbox_first_message: {
                    name: '获取消息的第一条信息',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_inbox_first_message',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                }
            }
        },
        webchat: {
            V1: {
                get_chat_list: {
                    name: '获取个人和群聊最近联系人',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/get_chat_list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_chat_un_read_count: {
                    name: '获取未读计数',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/get_chat_un_read_count',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_user_or_group_message: {
                    name: '获取与某个用户或某个群组的消息列表',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/get_user_or_group_message',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'since_time', isMust: false, type: 'string', des: '' },
                        { key: 'direction', isMust: false, type: 'bool', des: '向前 true/向后 false' },
                        { key: 'keyword', isMust: false, type: 'string', des: '搜索关键字' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码(以1开始，1代表第一页)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '用户true/群组false 消息列表' }
                    ]
                },
                get_user_or_group_message_count: {
                    name: '私聊会话中用户/群组消息的总条数',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/get_user_or_group_message_count',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '用户true/群组false 消息列表' }
                    ]
                },
                get_user_or_group_message_by_id: {
                    name: '获取跟某个用户/某个群组的前后几条信息',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/get_user_or_group_message_by_id',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'message_id', isMust: true, type: 'string', des: '消息id' },
                        { key: 'size', isMust: false, type: 'int', des: '群组编号' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '用户true/群组false 消息列表' }
                    ]
                },
                delete_chat_history_item: {
                    name: '删除历史聊天记录',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/delete_chat_history_item',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' }
                    ]
                },
                set_single_or_all_group_push: {
                    name: '设置单个/所有群组push',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/set_single_or_all_group_push',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'is_push', isMust: true, type: 'bool', des: '是否开启推送 ' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '单个 true/全部 false ' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' }
                    ]
                }
            }
        },
        invitation: {
            v1: {
                get_invite_link: {
                    name: '获取通用邀请链接(返回key:link)',
                    docUrl: '',
                    url: '/invitation/get_invite_link',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'source_id', isMust: true, type: 'string', des: '来源id(如账号id,网络id,任务id,日程id)' },
                        { key: 'from_type', isMust: true, type: 'int', des: ' 邀请来源 0邀请好友1邀请群组2邀请任务3邀请知识4邀请网络5邀请日程6邀请项目' },
                        { key: 'link_type', isMust: true, type: 'int', des: '邀请去向 1微信2QQ3链接4二维码' }
                    ]
                },
                get_qrcode_invite_link: {
                    name: '获取通用邀请链接二维码(返回key:link)',
                    docUrl: '',
                    url: '/invitation/get_qrcode_invite_link',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'source_id', isMust: true, type: 'string', des: '来源id(如账号id,网络id,任务id,日程id)' },
                        { key: 'from_type', isMust: true, type: 'int', des: ' 邀请来源 0邀请好友1邀请群组2邀请任务3邀请知识4邀请网络5邀请日程6邀请项目' },
                        { key: 'link_type', isMust: true, type: 'int', des: '邀请去向 1微信2QQ3链接4二维码' },
                        { key: 'width', isMust: false, type: 'string', des: '二维码宽默认200px' },
                        { key: 'height', isMust: false, type: 'string', des: '二维码高默认200px' }
                    ]
                },
                get_source_invite_links: {
                    name: '获取来源邀请链接列表',
                    docUrl: '/doc/invitation/invite_link.html',
                    url: '/invitation/get_source_invite_links',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'source_id', isMust: true, type: 'string', des: '来源id(如账号id,网络id,任务id,日程id)' },
                        { key: 'is_all', isMust: false, type: 'bool', des: '是否获取这个来源全部邀请链接（默认false：只获取我创建的）' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码(以1开始，1代表第一页)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' }
                    ]
                },
                update_link_expire: {
                    name: '更新链接为失效',
                    docUrl: '',
                    url: '/invitation/update_link_expire',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'token', isMust: true, type: 'string', des: '链接的token值' }
                    ]
                },
                invite_user_join_group: {
                    name: '邀请群组成员',
                    docUrl: '/doc/invitation/invitation.html',
                    url: '/invitation/invite_user_join_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '邀请加入群组的现有用户ID' },
                        { key: 'accounts', isMust: false, type: 'string', des: '邀请非明道加入群组 手机/邮箱' }
                    ]
                },
                invite_user_join_friend: {
                    name: '邀请加为好友',
                    docUrl: '/doc/invitation/invitation.html',
                    url: '/invitation/invite_user_join_friend',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '邀请加为好友的现有用户(格式[id,id]序列化)' },
                        { key: 'accounts', isMust: false, type: 'string', des: '邀请非明道加入群组 手机/邮箱(格式[phone,email]序列化)' }
                    ]
                },
                invite_user_join_project: {
                    name: '邀请加入网络',
                    docUrl: '/doc/invitation/invitation.html',
                    url: '/invitation/invite_user_join_project',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '网络ID' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '邀请加为好友的现有用户(格式[id,id]序列化)' },
                        { key: 'accounts', isMust: false, type: 'string', des: '邀请非明道加入群组 手机/邮箱(格式[phone,email]序列化)' }
                    ]
                },
                get_invite_user_join_project_log: {
                    name: '获取我邀请用户加入网络的历史记录',
                    docUrl: '/doc/invitation/invite_project_log.html',
                    url: '/invitation/get_invite_user_join_project_log',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '网络ID' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码(以1开始，1代表第一页)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' }
                    ]
                }
            }
        },
        register: {
            v1: {
                get_country_code: {
                    name: '获取国家号列表',
                    docUrl: '/doc/register/country_code.html',
                    url: '/register/get_country_code',
                    requestMode: 'get',
                    params: [
                    ]
                },
                send_register_code: {
                    name: '发送注册验证码',
                    docUrl: '',
                    url: '/register/send_register_code',
                    requestMode: 'post',
                    params: [
                        { key: 'account', isMust: true, type: 'string', des: '注册的手机号' },
                        { key: 'is_first', isMust: true, type: 'bool', des: '是否是第一次发送(跟选择发送通道有关)' },
                        { key: 'type', isMust: false, type: 'int', des: '验证码类型（0:短信,1:语音）默认短信' }
                    ]
                },
                register_account: {
                    name: '注册账号',
                    docUrl: '',
                    url: '/register/register_account',
                    requestMode: 'post',
                    params: [
                        { key: 'account', isMust: true, type: 'string', des: '注册的手机号' },
                        { key: 'code', isMust: true, type: 'string', des: '验证码' },
                        { key: 'full_name', isMust: false, type: 'string', des: '用户名' },
                        { key: 'password', isMust: false, type: 'string', des: '账号密码(如果没有添密码只验证验证码的正确不注册)' }
                    ]
                }
            }
        },
        vote: {
            v1: {
                create_vote: {
                    name: '创建投票',
                    docUrl: '',
                    url: '/vote/create_vote',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_message', isMust: true, type: 'string', des: '动态内容' },
                        { key: 'vote_options', isMust: true, type: 'int', des: '投票选项，如：a[Option]b[Option]c[Option] 代表有选项1:a 2:b;3:c 以此类推' },
                        { key: 'iImg_options', isMust: true, type: 'int', des: '要上传的图片对应的投票选项, 如 1,2 代表上传的两张图片是对应投票选项1和2' },
                        { key: 'last_time', isMust: true, type: 'int', des: '截止时间' },
                        { key: 'available_number', isMust: true, type: 'int', des: '允许选择多少选项 默认1项' },
                        { key: 'vote_anonymity', isMust: true, type: 'int', des: '要上传的图片对应的投票选项, 如 1,2 代表上传的两张图片是对应投票选项1和2' },
                        { key: 'vote_visble', isMust: true, type: 'int', des: '是否允许投票人员查看投票结果 0：不允许；1：允许 默认1允许' },
                        { key: 'group_id', isMust: true, type: 'int', des: '动态分享群组编号(多个群组用逗号隔开)' }
                    ]
                },
                update_vote_deadline: {
                    name: '修改投票时间',
                    docUrl: '',
                    url: '/vote/update_vote_deadline',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'source_id', isMust: true, type: 'string', des: '来源id(如账号id,网络id,任务id,日程id)' },
                        { key: 'from_type', isMust: true, type: 'int', des: ' 邀请来源 0邀请好友1邀请群组2邀请任务3邀请知识4邀请网络5邀请日程6邀请项目' },
                        { key: 'link_type', isMust: true, type: 'int', des: '邀请去向 1微信2QQ3链接4二维码' },
                        { key: 'width', isMust: false, type: 'string', des: '二维码宽默认200px' },
                        { key: 'height', isMust: false, type: 'string', des: '二维码高默认200px' }
                    ]
                },
                get_cast_options: {
                    name: '邀请成员',
                    docUrl: {type: '', url: ''},
                    url: '/vote/get_cast_options',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '邀请加入群组的现有用户ID' },
                        { key: 'accounts', isMust: false, type: 'string', des: '[{key:value}]邀请手机/邮箱的人加入群组key:手机or邮箱value:邀请的备注没有传空' }
                    ]
                }
            }
        },
        admin: {
            v1: {
                application: {
                    get_project_apps: {
                        name: '获取网络安装应用列表',
                        docUrl: {type: 'string', url: ''},
                        url: '/admin/application/get_application_list',
                        requestMode: 'get',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'project_id', isMust: true, type: 'string', des: '哪个网络必传' },
                            { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                            { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                        ]
                    }
                },
                department: {
                    get_project_departments: {
                        name: '获取网络部门',
                        docUrl: {type: '', url: '/v1group.html'},
                        url: '/admin/department/get_project_departments',
                        requestMode: 'get',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'project_id', isMust: true, type: 'string', des: '哪个网络必传' },
                            { key: 'keywords', isMust: false, type: 'string', des: '群组的简介' },
                            { key: 'pageindex', isMust: false, type: 'int', des: '第几页' },
                            { key: 'pagesize', isMust: false, type: 'int', des: '每页条数' },
                            { key: 'sort_field', isMust: false, type: 'int', des: '排序条件' },
                            { key: 'sort_type', isMust: false, type: 'int', des: '排序类型' }
                        ]
                    },
                    add_project_department: {
                        name: '新增网络部门',
                        docUrl: {type: 'string', url: ''},
                        url: '/admin/department/add_project_department',
                        requestMode: 'post',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'project_id', isMust: true, type: 'string', des: '哪个网络必传' },
                            { key: 'department_name', isMust: true, type: 'string', des: '部门名字' },
                            { key: 'mapping_group_id', isMust: false, type: 'string', des: '关联群组ID' }
                        ]
                    },
                    update_project_department: {
                        name: '修改网络部门',
                        docUrl: {type: 'string', url: ''},
                        url: '/admin/department/update_project_department',
                        requestMode: 'post',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'project_id', isMust: true, type: 'string', des: '哪个网络必传' },
                            { key: 'department_id', isMust: true, type: 'string', des: '部门ID' },
                            { key: 'department_name', isMust: true, type: 'string', des: '部门名字' },
                            { key: 'mapping_group_id', isMust: false, type: 'string', des: '关联群组ID' }
                        ]
                    }
                }
            },
            v2: {
                application: {
                    create_group: {
                        name: '创建一个新的群组',
                        docUrl: {type: '', url: '/v1group.html'},
                        url: '/group/create_group',
                        requestMode: 'post',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'group_name', isMust: true, type: 'string', des: '要创建的群组的名称' },
                            { key: 'about', isMust: false, type: 'string', des: '群组的简介' },
                            { key: 'is_hidden', isMust: false, type: 'bool', des: '是否列入公司群组列表(*只有私有群组才有此功能)，0不隐藏，1隐藏' },
                            { key: 'is_approval', isMust: false, type: 'string', des: '用户加入是否审批(0：否，1：是)' },
                            { key: 'is_post', isMust: false, type: 'string', des: '是否作为动态分享群组(0：否，1：是)' },
                            { key: 'dept_id', isMust: false, type: 'int', des: '部门ID(如果设置官方群组需传关联的部门ID)' },
                            { key: 'account_ids', isMust: false, type: 'string', des: '群组成员' }
                        ]
                    },
                    get_project_list: {
                        name: '获取我的网络列表',
                        docUrl: {type: 'string', url: ''},
                        url: '/company/get_project_list',
                        requestMode: 'get',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                            { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                        ]
                    }
                }
            }
        },
        private: {
            v1: {
                group: {
                    get_all_project_groups: {
                        name: '用户所有加入的网络和群组',
                        docUrl: {type: '', url: ''},
                        url: '/private/group/get_all_project_groups',
                        requestMode: 'get',
                        params: [
                            { key: 'account_id', isMust: true, type: 'string', des: '账号ID' }
                        ]
                    }
                }
            }
        }
    };

    function apiSetting() {
        var apiSetting = {
            getApiAll: getApiAll,
            getApiSetting: getApiSetting,
            getapiPram: getapiPram
        }
        return apiSetting;
        function getApiAll(scallback) {
            var moduleArray = [];
            for (var module in apiParam) {
                var moduleItem = apiParam[module];
                var moduleObj = {};
                var versionArray = [];
                for (var version in moduleItem) {
                    var versionItem = moduleItem[version];
                    var versionObj = {};
                    var portArray = [];
                    for (var port in versionItem) {
                        var privateItem = versionItem[port];
                        var privateObj = {};
                        var privateArray = [];
                        if (module === 'admin' || module === 'private') {
                            for (var privates in privateItem) {
                                privateArray.push(privates);
                            }
                            privateObj.port = port;
                            privateObj.value = privateArray;
                            portArray.push(privateObj);
                        } else {
                            portArray.push(port);
                        }
                    }
                    versionObj.version = version;
                    versionObj.value = portArray;
                    versionArray.push(versionObj);
                }
                moduleObj.module = module;
                moduleObj.value = versionArray;
                moduleArray.push(moduleObj);
            }
            scallback(moduleArray);
        }

        function getApiSetting(module, version, port, item, scallback) {
            var param = '';
            if (item) {
                param = apiParam[module][version][port][item];
            } else {
                param = apiParam[module][version][port];
            }
            if (param) {
                scallback(param);
            }
        }

        function getapiPram(search, scallback) {
            var list = [];
            for (var module in apiParam) {
                var moduleItem = apiParam[module];
                var moduleObj = {};
                var versionArray = [];
                for (var version in moduleItem) {
                    var versionItem = moduleItem[version];
                    for (var port in versionItem) {
                        if (port.toUpperCase().indexOf(search.toUpperCase()) != -1) {
                            var portObject = { "module": module, "version": version, "port": port }
                            list.push(portObject);
                        }
                    }
                }
            }
            scallback(list)
        }
    }
})
();










