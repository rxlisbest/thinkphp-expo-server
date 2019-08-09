<?php

namespace app\http\middleware;

class Cors
{

    public function handle($request, \Closure $next)
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: *');
        header('Access-Control-Allow-Headers: Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With, Authorization');
        header('Access-Control-Allow-Credentials:false');
        if($request->isOptions()){
            return json([]);
        }
        return $next($request);
    }
}
