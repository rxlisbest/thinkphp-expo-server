<?php


namespace app\common;

use BeatSwitch\Lock\Callers\Caller;

class Client implements Caller
{
    public function getCallerType()
    {
        return 'organizations';
    }

    public function getCallerId()
    {
        return 1;
    }

    public function getCallerRoles()
    {
        return ['enterprise'];
    }
}