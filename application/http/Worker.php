<?php

namespace app\http;

use think\worker\Server;

class Worker extends Server
{
    protected $socket = 'tcp://0.0.0.0:8888';
    protected $option = ['count' => 4];

    public function onMessage($connection, $data)
    {
        $connection->send(json_encode($data));
    }
}
