/**
 * 字符串解码
 * https://leetcode.cn/problems/decode-string/description/?envType=study-plan-v2&envId=top-100-liked
 */
function decodeString(s: string): string {
    let len = s.length;
    let stack: string[] = [];
    let res: string = '';

    
    for (let i = 0; i < len; i++) {
        if (s[i] === ']') {
            let str: string = '';
            while (stack[stack.length - 1] !== '[') {
                str = stack.pop() + str;
            }
            stack.pop();
            let num: string = '';
            while (stack.length && !isNaN(Number(stack[stack.length - 1]))) {
                num = stack.pop() + num;
            }
            stack.push(str.repeat(Number(num)));
        } else {
            stack.push(s[i]);
        }
    }
    while (stack.length) {
        res = stack.pop() + res;
    }
    return res;
};