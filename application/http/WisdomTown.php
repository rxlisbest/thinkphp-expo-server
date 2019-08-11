<?php

namespace app\http;

use app\common\Message;
use think\worker\Server;

class WisdomTown extends Server
{
    protected $socket = 'tcp://0.0.0.0:2347';
    protected $option = ['count' => 1];

    public function onConnect($connection)
    {
        $connection->send('success');
        if (true) {
            Message::send(3, function ($data) use ($connection) {
                $result = $connection->send($data);
                if ($result == null) {
                    $connection->close();
                    return false;
                }
            });
        } else { // 无法确认设备身份则断开连接
            $connection->close();
        }
    }

    public function onMessage($connection, $data)
    {
    }

    public function onClose($connection)
    {
        $connection->send('close');
    }
}
