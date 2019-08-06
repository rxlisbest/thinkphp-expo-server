<?php

namespace app\common;

use Pheanstalk\Pheanstalk;
use think\Facade;
use think\facade\Config;

class BeansTalkd extends Facade
{
    static private $instance;

    private function __construct() {

    }

    static public function getInstance()
    {
        $beanstalkd = Config::get('beanstalkd.');
        //判断一下$instance是否已经存在
        if (!isset(self::$instance)) {
            self::$instance = Pheanstalk::create($beanstalkd['host'], $beanstalkd['port']);
        }
        return self::$instance;
    }
}