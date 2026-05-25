---
title: "【JS笔记】判断某数是否属于给定范围"
date: 2019-06-09 17:35
categories: [来自QQ空间]
tags: [QQ空间迁移]
---

> let at = (num,range)=>{
    let min = range[1];
    let max = range[3];
    let lEq = /^\[/.test(range);
    let rEq = /\]$/.test(range);
    if(lEq&&rEq&&min<=num&&num<=max){
        return true
    }else if(!lEq&&!rEq&&min<num&&num<max){
        return true
    }else if(!lEq&&rEq&&min<num&&num<=max){
        return true
    }else if(lEq&&!rEq&&min<=num&&num<max){
        return true
    }else{
        return false
    }
}
console.log(at(5,"(2,5]"))


