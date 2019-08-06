<?php

namespace app\http;

use think\Db;
use think\worker\Server;
use Pheanstalk\Pheanstalk;

class Worker extends Server
{
    protected $socket = 'tcp://0.0.0.0:2345';
    protected $option = ['count' => 1];

    public function onConnect($connection)
    {
        $connection->send('哈哈');
//        if ($data == 1 || $data == 100) {
//            $i = 0;
//            while (true) {
//                $connection->send($i);
//                $i++;
////                if ($i > 10) {
////                    $connection->close();
////                    break;
////                }
//                if ($data == 100) {
//                    break;
//                }
//                sleep(5);
//            }
//        }
    }

    public function onMessage($connection, $data)
    {
//        $result = $connection->send('insert');
//        Db::table('role')->insert(['name' => json_encode($result)]);
        $pheanstalk = Pheanstalk::create('127.0.0.1');
//        $i = 0;
        while (true) {
            $job = $pheanstalk
                ->watch('testtube')
                ->ignore('default')
                ->reserveWithTimeout(3);  // 设置过期时间
            if ($job) {
                $data = $job->getData();
                $pheanstalk->delete($job);
            } else { // 发送心跳包
                $data = "heart";
            }
//            $connection->send($i);
            $result = $connection->send($data);
//            Db::table('role')->insert(['name' => json_encode($result)]);
//            $i++;
            if ($result === null) {
                $connection->close();
                break;
            }
        }
    }

    public function onClose($connection)
    {
        $connection->send('哈哈1');
    }
}
