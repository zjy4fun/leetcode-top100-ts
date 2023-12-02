/**
 * 合并区间
 * https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-100-liked
 * 
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * [a1, a2]
 * [ba, b2]
 * 
 * 1. 
 * a1--------a2----
 *   b1--------b2---
 * [a1, b2]
 * 2. 
 * a1--------a2----
 *  b1--b2
 * [a1, a2]
 * 3.
 * a1--------a2----
 * -------------b1--b2
 * [a1, a2], [b1, b2]
 */
function merge(intervals: number[][]): number[][] {
   // 按照 starti 升序排序
    intervals.sort((a, b) => a[0] - b[0])
    const res: number[][] = []
    for(let i = 0; i < intervals.length; i++) {
        const [starti, endi] = intervals[i]
        if(res.length === 0 || res[res.length - 1][1] < starti) {
            res.push([starti, endi])
        } else {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], endi)
        }
    }
    return res 
};


const intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals)) // [[1,6],[8,10],[15,18]]

const intervals2 = [[1,4],[4,5]]
console.log(merge(intervals2)) // [[1,5]]