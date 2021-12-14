var  glob = {
    BaseUrl:'https://testweb.datasw.com.cn',
    httpHeader:'http://',
    appId:'99999943',
    //appId:'52010402',
    projectNameKey: 'bmop',
    toUrl:'https://testweb.datasw.com.cn',
    outUrl:'https://testweb.datasw.com.cn/bmop/webLogin',
    ssoTokenUrl:'.datasw.com.cn',
}
// ssoTokenUrl 配置作用实现SSO单点登录
// 注意事项
// 一定配置 以 '.' 开头，不然无法实现单点登录
//  默认情况下，cookie是不能跨域访问的，如在www.google.com域无法操作和获取www.baidu.com里面的cookie，
//  因为他们的一级域不同。但是在二级域里面可以共享和修改cookie的。
//  即www.baidu.com和 www.baike.baidu.com之间是可以共享cookie的。把 ssoTokenUrl域名设置为 '.baidu.com'
//  那么www.baike.baidu.com可以获取SSO cookie
