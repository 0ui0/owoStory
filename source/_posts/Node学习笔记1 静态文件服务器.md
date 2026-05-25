---
title: "Node学习笔记1 静态文件服务器"
date: 2018-12-19 20:04
categories: [来自QQ空间]
tags: [QQ空间迁移]
---

>http = require 'http'
urlLib = require 'url'
fs = require 'fs'
###
JSON.parse(字符串)
Json.stringify(对象)
urlLib.parse(req.url,true)={
    query:
    path:
}
###
 #本地www目录
server=http.createServer (req,res)->
    url = urlLib.parse req.url
    console.log url.path
    fs.readFile www+url.path,(err,data)->
        if err
            tip =
                '''
                    <!doctype html>
                    <head>
                        <title>404 Not Found</title>
                        <meta >
                    </head>
                    <body>
                        <div >
                            404 Not Found
                        </div>
                        <style>
                            body{
                                text-align:center;
                            }
                            #404{
                                display:inline-block;
                                font-size:20px;
                            }
                        </style>
                    </body>
                '''
            res.write tip
        else
            res.write data
        res.end()
server.listen 80

{% asset_img Node学习笔记1 静态文件服务器_0.jpg Node学习笔记1 静态文件服务器 %}


