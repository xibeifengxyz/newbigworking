const initState = {count:1};
export default function mainreducer (pre = initState,action){
    const {type,data} = action
    switch (type){
        case "add":
            return pre;
       
        default:
            return pre;
    }
}
