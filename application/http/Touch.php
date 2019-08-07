<?php

namespace app\http;

use app\common\Message;
use think\worker\Server;

class Touch extends Server
{
    protected $socket = 'udp://0.0.0.0:2347';
//    protected $protocol = 'udp';
//    protected $port = '2347';
    protected $option = ['count' => 1];

    public function onConnect($connection)
    {
        $connection->send('哈哈');
    }

    public function onMessage($connection, $data)
    {
        $connection->send($data);
        if ($data) {
            $post = [
                'no' => 12,
                'value' => 8
            ];
            Message::receive(12, json_encode($post));
        }
    }

    public function onClose($connection)
    {
        $connection->send('哈哈1');
    }
}
