<?php


namespace app\common;

use think\Facade;
use think\facade\Cache;
use think\facade\Config;

class Message extends Facade
{
    /**
     * 发送消息
     * @name: send
     * @param $no 设备编号
     * @param $callback 回调函数
     * @return void
     * @author: Roy<ruixl@soocedu.com>
     * @time: 2019-08-06 13:36
     */
    public static function send($no, \Closure $callback, $index = 0)
    {
        $beanstalkd = Config::get('beanstalkd.');
        $pheanstalk = BeansTalkd::getInstance(); // 连接队列服务

        $clientId = uniqid();
        Cache::set("client", $clientId); // 设置标识，以后打开终端为主
        $watch = $pheanstalk
            ->watch($beanstalkd['tube_prefix'] . $no)
            ->ignore('default');

        if (!$index) {
            while (true) {
                $job = $watch->reserve();
                if ($job) { // 队列中有消息，清除
                    $pheanstalk->delete($job);
                } else {
                    break;
                }
            }
        }

        while (true) {
            $job = $watch->reserveWithTimeout(3);  // 设置过期时间

            $currentClientId = Cache::get("client");
            if ($job && $clientId == $currentClientId) { // 队列中有消息，发送消息
                $data = $job->getData();
                $pheanstalk->delete($job);
            } else { // 队列中无消息，发送心跳包
                $data = [
                    'command' => 'heart',
                    'param' => (object)[],
                ];
                $data['no'] = $no;
                $data = json_encode($data);
            }

            $result = $callback($data); // 调用回调函数
            if ($result === false) { // 如果返回值是false，则退出循环
                break;
            }
        }
    }

    /**
     * 接收消息
     * @name: receive
     * @param $no
     * @param $data
     * @return bool
     * @author: Roy<ruixl@soocedu.com>
     * @time: 2019-08-06 14:12
     */
    public static function receive($no, $data)
    {
        $pheanstalk = BeansTalkd::getInstance(); // 连接队列服务
        $beanstalkd = Config::get('beanstalkd.');
        $job = $pheanstalk
            ->useTube($beanstalkd['tube_prefix'] . $no)
            ->put($data);
        return $job;
    }
}