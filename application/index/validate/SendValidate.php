<?php

namespace app\index\validate;

use think\Validate;

class SendValidate extends Validate
{
    /**
     * 定义验证规则
     * 格式：'字段名'	=>	['规则1','规则2'...]
     *
     * @var array
     */	
	protected $rule = [
        'no' => 'require',
        'command' => 'require'
    ];
    
    /**
     * 定义错误信息
     * 格式：'字段名.规则名'	=>	'错误信息'
     *
     * @var array
     */	
    protected $message = [
        'no.require' => '编号不能为空',
        'command.require' => '命令不能为空'
    ];

    protected $scene = [
        'receive' => ['no'],
        'send' => ['no', 'command']
    ];
}
