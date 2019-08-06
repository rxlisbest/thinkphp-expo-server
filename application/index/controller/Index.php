<?php

namespace app\index\controller;

use app\common\Message;
use think\Controller;
use think\Request;

class Index extends Controller
{
    public function receive(Request $request)
    {
        $no = $request->get('no');
        if (!$no) {
            $this->error('Params no can\'t empty');
        }
        $o = clone $this;
        Message::send($no, function ($data) use ($o) {
            $result = $o->success('', null, $data);
            if ($result === null) {
                return false;
            }
        });
    }
}
