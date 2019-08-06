<?php

namespace app\http;

use app\common\Message;
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
    }

    public function onMessage($connection, $data)
    {
        if ($data == 1) {
            Message::send(1, function ($data) use ($connection) {
                $result = $connection->send($data);
                if ($result === null) {
                    $connection->close();
                    return false;
                }
            });
        } else { // 无法确认设备身份则断开连接
//            $connection->close();
        }
    }

    public function onClose($connection)
    {
        $connection->send('哈哈1');
    }
}
