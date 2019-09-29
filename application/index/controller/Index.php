<?php

namespace app\index\controller;

use app\common\Client;
use app\common\Message;
use app\index\validate\SendValidate;
use think\Controller;
use think\Request;
use \BeatSwitch\Lock\Drivers\ArrayDriver;
use \BeatSwitch\Lock\Lock;
use \BeatSwitch\Lock\Manager;

class Index extends Controller
{
    protected $middleware = [
        'Cors'
    ];

    /**
     * 接收消息
     * @name: receive
     * @param Request $request
     * @return void
     * @author: Roy<ruixl@soocedu.com>
     * @time: 2019-08-07 09:13
     */
    public function receive(Request $request)
    {
        $get = $request->get();
        $validate = new SendValidate();
        if (!$validate->scene('receive')->check($get)) {
            $this->error($validate->getError());
        }
        $o = clone $this;
        Message::send($get['no'], function ($data) use ($o) {
            header('content-type:application/json;charset=utf-8');
            $result = [
                'code' => 1,
                'msg' => 'success',
                'data' => json_decode($data, true),
                'url' => '',
                'wait' => 3,
            ];
            echo json_encode($result);
            exit();
//            $o->success('success', null, json_decode($data, true));
//            return false;
        });
    }

    /**
     * 发送消息
     * @name: send
     * @param Request $request
     * @return void
     * @author: Roy<ruixl@soocedu.com>
     * @time: 2019-08-07 09:13
     */
    public function send(Request $request)
    {
        $post = $request->post();
        $validate = new SendValidate();
        if (!$validate->scene('send')->check($post)) {
            $this->error($validate->getError());
        }
        Message::receive($post['no'], json_encode($post));
        $this->success('success');
    }

    public function test()
    {

// Create a new Manager instance.
        $manager = new Manager(new ArrayDriver());

// Instantiate a new Lock instance for an object which implements the Caller contract.
        $caller = new Client();
        $lock = $manager->caller($caller);
//        $lock->allow('manage_settings');
        $lock->allow('manage_settings', 'test', 1);
        $lock->allow('manage_settings', 'test', 2);
        $lock->deny('manage_settings', 'test', null);
        $lock->allow('manage_settings', 'test', 2);
        var_dump($lock->allowed('manage_settings', 'test'));
    }
}
