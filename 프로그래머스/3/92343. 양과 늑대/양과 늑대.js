// dfs로 완전 탐색
// 부모 루트에 갔었으면 갈 수 있음 -> 아님 백트래킹

function dfs(info, edges, orderCheck, treeCheck, L, arr, answer, count) {
    if(count[0] <= count[1]) {
        return;
    } else if(count[0] > count[1] && count[0] > answer[0]) {
        answer[0] = count[0];
    }
    
    if(L === edges.length) {
        // const count = [1, 0];
        // for(let i = 0; i < arr.length; i++) {
        //     if(count[0] < count[1]) {
        //         return;
        //     }
        //     const [parent, child] = edges[arr[i]];
        //     count[info[child]]++;
        //     if(count[0] === count[1]) {
        //         count[0] = 0;
        //     } else if(count[0] > count[1] && count[0] > answer[0]) {
        //         answer[0] = count[0];
        //     }
        // }
        return;
    } else {
        for(let i = 0; i < edges.length; i++) {
            if(orderCheck[i] === false 
               && treeCheck[edges[i][0]] === true) {
                orderCheck[i] = true;
                treeCheck[edges[i][1]] = true;
                count[info[edges[i][1]]]++;
                arr[L] = i;
                dfs(info, edges, orderCheck, treeCheck, L + 1, arr, answer, count);
                orderCheck[i] = false;
                treeCheck[edges[i][1]] = false;
                count[info[edges[i][1]]]--;
            }
        }
    }
}

function solution(info, edges) {
    const orderCheck = Array.from({ length : edges.length}, () => false);
    const treeCheck = Array.from({ length : info.length}, () => false);
    const answer = [1];
    treeCheck[0] = true;
    dfs(info, edges, orderCheck, treeCheck, 0, [], answer, [1, 0]);
    return answer[0];
}