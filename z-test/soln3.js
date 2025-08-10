function getSkyline(buildings) {
    const events= [];

    for(const [left,right,height] of buildings){
        events.push([left, -height, right]);
        events.push([right,0,0])
    }

    events.sort((a,b)=>{
        if(a[0] !== b[0]) return a[0] - b[0];
        return a[1]-b[1]
    });
}

let buildings = [[], [], [], [], []];
console.log(getSkyline(buildings));
