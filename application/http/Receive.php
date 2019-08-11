<?php

namespace app\http;

use app\common\Message;
use think\worker\Server;

class Receive extends Server
{
    protected $protocol = 'websocket';
    protected $option = ['count' => 4];

    public function onWebSocketConnect($connection)
    {
        $connection->send('success');
    }

    public function onMessage($connection, $data)
    {
        $post = json_decode($data, true);
        if (is_array($post)) {
            Message::receive($post['no'], json_encode($post));
        }
    }

    public function onClose($connection)
    {
        $connection->send('close');
    }
}
