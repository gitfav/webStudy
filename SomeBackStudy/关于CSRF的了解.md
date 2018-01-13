CSRF

### [参考文章](https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)

#### 简单的说明和了解
![cmd-markdown-logo](./2009040916453171.jpg)

危险网站会进行跨域请求来传送参数，达到客户不知情的请求

例如：通过get和post（假设网站支持跨域请求）请求传参。

方法一就是多在客户端页面增加伪随机数。，因为攻击者不能获得第三方的Cookie(理论上)，所以表单中的数据也就构造失败了
```php
<?php
　　　　//构造加密的Cookie信息
　　　　$value = “DefenseSCRF”;
　　　　setcookie(”cookie”, $value, time()+3600);
　　?>
```
在表单里增加Hash值，以认证这确实是用户发送的请求。